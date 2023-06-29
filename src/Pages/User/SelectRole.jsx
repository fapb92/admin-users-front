import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts/Layout";
import { useSelectRole } from "../../Hooks/useSelectRole";
import { useNavigate } from "react-router-dom";

export const SelectRole = () => {
	const styleButtons = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4  text-4xl";
	const [loading, setLoading] = useState(true);
	const { getRolesUser, selectRole } = useSelectRole();
	const [roles, setRoles] = useState([]);
	const [messages, setMessages] = useState("");
	const navigation = useNavigate();

	const handleOnClick = async (e) => {
		setLoading(true);
		try {
			const res = await selectRole({ role: roles[e.target.value].name });
			setMessages(res);
			setTimeout(() => {
				navigation("/", { replace: true });
			}, 1000);
		} catch (error) {
			console.log({ error: error?.response });
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		const callRoles = async () => {
			try {
				const roles_res = await getRolesUser(controller.signal);
				setRoles(roles_res.data);
				setMessages(roles_res.message);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		callRoles();
		return () => {
			controller.abort();
			setRoles([]);
			setMessages("");
		};
	}, []);

	return (
		<Layout isLoading={loading}>
			<div className="flex bg-white-100 p-4 flex-col justify-center items-center">
				<h1 className="text-3xl font-bold mb-4 text-center">{messages}</h1>
				{roles.map((role, index) => {
					return (
						<button className={styleButtons} key={index} value={index} onClick={async (e) => await handleOnClick(e)}>
							{role.title}
						</button>
					);
				})}
			</div>
		</Layout>
	);
};
