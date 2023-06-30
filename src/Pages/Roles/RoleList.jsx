import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts/Layout";
import { TablesHorizontalHead } from "../../Components/Tables/TablesHorizontalHead";
import { useRole } from "../../Hooks/useRole";
import { Link } from "react-router-dom";
import { LinksBtn } from "../../Components/Buttons/LinksBtn";

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
	}, []);
	return (
		<Layout isLoading={loading}>
			<div>
				<TablesHorizontalHead
					title="Lista de roles plataforma User Admin"
					headers={{
						role: "Role",
						title: "Título",
						actions: "",
					}}
					data={roles}
					actions={[
						{
							button: Link,
							props: {
								className: { value: "bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 m-2 rounded" },
								name: { hint: "role" },
								children: { value: "Ver" },
								to: {
									func: (role) => `/role/${role}`,
									arg: { hint: "role" },
								},
							},
						},
					]}
				/>
				<div className="flex justify-center">
					<LinksBtn color="red" text="Atras" to="/" />
				</div>
			</div>
		</Layout>
	);
};
