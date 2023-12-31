import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { Layout } from "../../Components/Layouts/Layout";
import { TableVerticalHead } from "../../Components/Tables/TableVerticalHead";
import { LinksBtn } from "../../Components/Buttons/LinksBtn";
import { useParams } from "react-router-dom";
import { useUsersApp } from "../../Hooks/useUsersApp";
import ButtonsPermissions from "../../Components/Permissions/ButtonsPermissions";

export const UserDetails = () => {
	const { id } = useParams();
	const [userData, setUserData] = useState({});
	const [loading, setLoading] = useState(false);
	const { getUsersDetails } = useUsersApp();
	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		const getUser = async () => {
			try {
				const res = await getUsersDetails(id);
				setUserData(res.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		getUser();

		return () => {
			controller.abort();
		};
	}, [id]);
	return (
		<Layout isLoading={loading}>
			<div className="flex flex-col items-center">
				<img src={userData?.avatar_url} alt="User Avatar" className="w-32 h-32" />
				<TableVerticalHead
					data={{
						ID: userData?.id,
						Nombre: userData?.name,
						Email: userData?.email,
						"Fecha de registro": new Date(userData?.register_at).toTimeString(),
						"Última actualización": new Date(userData?.last_update).toTimeString(),
					}}
				/>
				<div className="flex justify-center">
					<ButtonsPermissions buttons={<LinksBtn text="Editar Información" to="update" />} permissionsNeeded={["p-007"]} />
					<ButtonsPermissions buttons={<LinksBtn color="green" text="Editar Roles" to="asignremove" />} permissionsNeeded={["p-004", "p-005"]} />
					<LinksBtn color="red" text="Volver" to="/" />
				</div>
			</div>
		</Layout>
	);
};
