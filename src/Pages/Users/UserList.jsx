import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts/Layout";
import { TablesHorizontalHead } from "../../Components/Tables/TablesHorizontalHead";
import { useUsersApp } from "../../Hooks/useUsersApp";
import { Link } from "react-router-dom";
import { Buttons } from "../../Components/Buttons/Buttons";

export const UserList = () => {
	const [loading, setLoading] = useState(false);
	const [userListData, setUserListData] = useState({});
	const { getUserList, getUserByUrlList, deleteUsersApp } = useUsersApp();

	const handleOnClickPage = async (url) => {
		try {
			const res = await getUserByUrlList(url);
			setUserListData(res);
		} catch (error) {
			console.log(error);
		}
	};

	const handleBorraUsuario = async (e) => {
		const id = e.target.value;
		setLoading(true);
		try {
			const res = await deleteUsersApp(id);
			setUserListData({ ...userListData, data: userListData.data.filter((user) => user.id != id) });
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
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
							actions: "",
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
						actions={[
							{
								button: Link,
								props: {
									className: { value: "bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 m-2 rounded" },
									children: { value: "Info" },
									to: {
										func: (id) => `/users/${id}`,
										arg: { hint: "id" },
									},
								},
								permissions:["p-010"]
							},
							{
								button: Buttons,
								props: {
									color: { value: "red" },
									text: { value: "Borrar" },
									onClick: { value: async (e) => await handleBorraUsuario(e) },
									value: { hint: "id" },
								},
								permissions:["p-008"]
							},
						]}
					/>
				)}
				{!userListData?.data && <h1 className="text-3xl font-bold mb-4">Sin datos</h1>}
			</div>
		</Layout>
	);
};
