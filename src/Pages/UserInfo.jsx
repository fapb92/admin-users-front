import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { getUserService } from "../Services/getUserService";
import { Layout } from "../Components/Layouts/Layout";
import { TableVerticalHead } from "../Components/Tables/TableVerticalHead";
import { LinksBtn } from "../Components/Buttons/LinksBtn";

export function UserInfo() {
	const { auth, setAuth } = useAuth();
	const [loading, setLoading] = useState(true);
	const [errorValidation, setErrorValidation] = useState("");
	const [user, setUser] = useState({});

	useEffect(() => {
		let componentMounted = true;
		const controller = new AbortController();
		const getUser = async () => {
			try {
				if (!!auth?.user) {
					setUser(auth.user);
				} else {
					const res = await getUserService(auth?.accessToken, controller.signal);
					// componentMounted && setUser(res.data.data);
					componentMounted && setAuth({ ...auth, user: res.data.data });
					componentMounted && setUser(res.data.data);
				}
			} catch (error) {
				if (error.response) {
					setErrorValidation(error.response.data.message);
				}
			} finally {
				setLoading(false);
			}
		};

		getUser();
		return () => {
			componentMounted = false;
			controller.abort();
		};
	}, []);

	return (
		<Layout isLoading={loading}>
			<div className="flex flex-col items-center">
				<img src={user.avatar_url} alt="Database Image" className="w-32 h-32" />
				<TableVerticalHead
					data={{
						Nombre: user.name,
						Email: user.email,
						"Fecha de registro": new Date(user.register_at).toTimeString(),
						"Última actualización": new Date(user.last_update).toTimeString(),
					}}
				/>
				<div className="flex justify-center">
					<LinksBtn text="Editar" />
					<LinksBtn color="red" text="Cancelar" to="/" />
				</div>
			</div>
		</Layout>
	);
}
