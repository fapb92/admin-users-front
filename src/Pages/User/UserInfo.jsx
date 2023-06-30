import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { Layout } from "../../Components/Layouts/Layout";
import { TableVerticalHead } from "../../Components/Tables/TableVerticalHead";
import { LinksBtn } from "../../Components/Buttons/LinksBtn";
import { useUser } from "../../Hooks/useUser";

export function UserInfo() {
	const { auth } = useAuth();
	const [loading, setLoading] = useState(true);
	const getUser = useUser();

	useEffect(() => {
		const controller = new AbortController();
		const callUser = async () => {
			try {
				await getUser(controller.signal);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		!auth?.user ? callUser() : setLoading(false);
		return () => {
			controller.abort();
		};
	}, []);

	return (
		<Layout isLoading={loading}>
			<div className="flex flex-col items-center">
				<img src={auth?.user?.avatar_url} alt="User avatar" className="w-32 h-32" />
				<TableVerticalHead
					data={{
						ID: auth?.user?.id,
						Nombre: auth?.user?.name,
						Email: auth?.user?.email,
						"Fecha de registro": new Date(auth?.user?.register_at).toTimeString(),
						"Última actualización": new Date(auth?.user?.last_update).toTimeString(),
					}}
				/>
				<div className="flex justify-center">
					<LinksBtn text="Editar" to="update" />
					<LinksBtn color="red" text="Volver" to="/" />
				</div>
			</div>
		</Layout>
	);
}
