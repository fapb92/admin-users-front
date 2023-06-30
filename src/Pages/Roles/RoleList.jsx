import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts/Layout";
import { TablesHorizontalHead } from "../../Components/Tables/TablesHorizontalHead";
import { useRole } from "../../Hooks/useRole";

export const RoleList = () => {
	const [roles, setRoles] = useState([]);
	const [loading, setLoading] = useState(true);
	const { roleList } = useRole();
	useEffect(() => {
		const controller = new AbortController();
		const getRolelist = async () => {
			try {
				const res = await roleList(controller.signal);
				setRoles(res.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		getRolelist();
		return () => {
			controller.abort();
		};
	});
	return (
		<Layout isLoading={loading}>
			<TablesHorizontalHead
				title='Lista de roles plataforma User Admin'
				headers={{
					name: "Nombre",
					title: "Título",
				}}
				data={roles}
			/>
		</Layout>
	);
};
