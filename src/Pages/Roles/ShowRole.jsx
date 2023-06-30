import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts/Layout";
import { TableVerticalHead } from "../../Components/Tables/TableVerticalHead";
import { LinksBtn } from "../../Components/Buttons/LinksBtn";
import { useParams } from "react-router-dom";
import { useRole } from "../../Hooks/useRole";

export const ShowRole = () => {
	const { role } = useParams();
	const [loading, setLoading] = useState(true);
	const { showRoleDetails } = useRole();
	const [roleData, setRoleData] = useState({});

	useEffect(() => {
		const controller = new AbortController();
		const getDetails = async () => {
			try {
				const res = await showRoleDetails(role, controller.signal);
				setRoleData(res);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		getDetails();
		return () => {
			controller.abort();
		};
	}, []);
	return (
		<Layout isLoading={loading}>
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-bold mb-4">Información de rol</h1>
				<TableVerticalHead
					data={{
						Nombre: roleData.name,
						Título: roleData.title,
					}}
				/>
				<div className="flex justify-center">
					<LinksBtn color="red" text="Atras" to="/" />
				</div>
			</div>
		</Layout>
	);
};
