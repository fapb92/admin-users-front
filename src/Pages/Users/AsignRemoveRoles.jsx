import { useEffect, useState } from "react";
import { Forms } from "../../Components/Layouts/Forms";
import { Layout } from "../../Components/Layouts/Layout";
import { useRole } from "../../Hooks/useRole";
import { Buttons } from "../../Components/Buttons/Buttons";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../../Components/ErrorMessage";
import ButtonsPermissions from "../../Components/Permissions/ButtonsPermissions";

export const AsignRemoveRoles = () => {
	const { id } = useParams();
	const { roleList, assignRoleUser, removeRoleUser } = useRole();
	const [roles, setRoles] = useState([]);
	const [data, setData] = useState({ role: "" });
	const [activeButtons, setActiveButtons] = useState({
		assignBtn: true,
		removeBtn: true,
	});
	const [loading, setLoading] = useState(true);
	const [errorValidation, setErrorValidation] = useState({
		message: "",
		errors: {},
	});

	const [successMessage, setSuccessMessage] = useState("");

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...data, [name]: value });
	};

	const handleAsignRoleClick = async () => {
		setLoading(true);
		if (!!errorValidation.message) {
			setErrorValidation({
				message: "",
				errors: {},
			});
		}
		setSuccessMessage("");
		try {
			const res = await assignRoleUser(id, data);
			setSuccessMessage(res);
		} catch (error) {
			if (error.response) {
				setErrorValidation({
					message: error.response.data.message,
					errors: error.response.data.errors,
				});
			}
		} finally {
			setLoading(false);
		}
	};

	const handleRemoveRoleClick = async () => {
		setLoading(true);
		if (!!errorValidation.message) {
			setErrorValidation({
				message: "",
				errors: {},
			});
		}
		setSuccessMessage("");
		try {
			const res = await removeRoleUser(id, data);
			setSuccessMessage(res);
		} catch (error) {
			if (error.response) {
				setErrorValidation({
					message: error.response.data.message,
					errors: error.response.data.errors,
				});
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		const getRoles = async () => {
			try {
				const res = await roleList(controller.signal);
				setRoles(res.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		getRoles();
		return () => {
			controller.abort();
			setData({
				role: "",
			});
		};
	}, []);
	return (
		<Layout isLoading={loading}>
			<Forms title="Agregar o quitar roles" successMessage={successMessage}>
				<label className="block mb-2 font-bold text-gray-700">Role:</label>
				{!!errorValidation?.errors?.role && <ErrorMessage errors={errorValidation?.errors?.role} />}
				{!!roles.length && (
					<select
						name="role"
						value={data.role}
						onChange={(e) => handleChange(e)}
						className="block w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
					>
						<option value=""></option>
						{roles.map((role, ind) => {
							return (
								<option key={ind} value={role.name}>
									{role.title}
								</option>
							);
						})}
					</select>
				)}
				<div className="flex justify-center">
					<ButtonsPermissions buttons={<Buttons text="Agregar" onClick={handleAsignRoleClick} />} permissionsNeeded={["p-004"]} />
					<ButtonsPermissions buttons={<Buttons color="green" text="Remover" onClick={handleRemoveRoleClick} />} permissionsNeeded={["p-005"]} />
				</div>
			</Forms>
		</Layout>
	);
};
