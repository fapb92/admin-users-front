import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts/Layout";
import { TablesHorizontalHead } from "../../Components/Tables/TablesHorizontalHead";
import { useUsersApp } from "../../Hooks/useUsersApp";

export const UserList = () => {
	const [loading, setLoading] = useState(false);
	const [userListData, setUserListData] = useState({});
	const { getUserList, getUserByUrlList } = useUsersApp();

	const handleOnClickPage = async (url) => {
		try {
			const res = await getUserByUrlList(url);
			setUserListData(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		const userList = async () => {
			try {
				const res = await getUserList(controller.signal);
				setUserListData(res);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		userList();
		return () => {
			controller.abort();
		};
	}, []);
	return (
		<Layout title="Usuarios" isLoading={loading}>
			<div className="flex justify-center">
				{userListData?.data && (
					<TablesHorizontalHead
						title="Lista de usuarios"
						headers={{
							id: "ID",
							name: "Nombre",
							email: "Email",
							register_at: "Fecha de registro",
							roles: "Roles",
						}}
						data={userListData.data.map((user, ind) => {
							const { roles: roleList, ...userInfo } = user;
							const rolesName = roleList.map((role) => role.title);
							return { ...userInfo, roles: rolesName.join(", ") };
						})}
						pagination={{
							onclick: handleOnClickPage,
							pages: userListData.meta.links,
						}}
					/>
				)}
				{!userListData?.data && <h1 className="text-3xl font-bold mb-4">Sin datos</h1>}
			</div>
		</Layout>
	);
};
