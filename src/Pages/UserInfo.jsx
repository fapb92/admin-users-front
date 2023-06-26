import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { getUserService } from "../Services/getUserService";
import { Layout } from "../Components/Layouts/Layout";
import { isEmptyObject } from "../Helpers/objectEmpty";

export function UserInfo() {
	const { auth, setAuth } = useAuth();
	const [loading, setLoading] = useState(false);
	const [errorValidation, setErrorValidation] = useState("");
	// const [user, setUser] = useState({
	// 	name: "name value",
	// 	email: "email value",
	// });

	useEffect(() => {
		setLoading(true);
		let componentMounted = true;
		const controller = new AbortController();
		const getUser = async () => {
			try {
				const res = await getUserService(auth?.accessToken, controller.signal);
				// componentMounted && setUser(res.data.data);
				componentMounted && setAuth({ ...auth, user: res.data.data });
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
			<div className="flex justify-center flex-col">
				<h1 className="text-3xl font-bold mb-4 text-center">Informacion de usuario</h1>
				<table className="table-auto">
					<tbody>
						{Object.entries(auth?.user || {}).map(([key, value], index) => (
							<tr key={index}>
								<td className="py-2 px-4 font-bold">{key}</td>
								<td className="py-2 px-4">{value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Layout>
	);
}
