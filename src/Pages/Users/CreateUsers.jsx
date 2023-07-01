import { InputEmail } from "../../Components/Inputs/InputEmail";
import { Layout } from "../../Components/Layouts/Layout";
import { Forms } from "../../Components/Layouts/Forms";
import { useUsersApp } from "../../Hooks/useUsersApp";
import { useEffect, useState } from "react";
import { InputText } from "../../Components/Inputs/InputText";
import { SubmitBtn } from "../../Components/Buttons/SubmitBtn";
import { Buttons } from "../../Components/Buttons/Buttons";
import { LinksBtn } from "../../Components/Buttons/LinksBtn";
import { useRole } from "../../Hooks/useRole";
import { ErrorMessage } from "../../Components/ErrorMessage";
import ButtonsPermissions from "../../Components/Permissions/ButtonsPermissions";

export const CreateUsers = () => {
	const { createUsersApp } = useUsersApp();
	const { roleList } = useRole();
	const [roles, setRoles] = useState([]);
	const [newUser, setNewUser] = useState(true);
	const [data, setData] = useState({
		name: "",
		email: "",
		role: "",
	});
	const [errorValidation, setErrorValidation] = useState({
		message: "",
		errors: {},
	});

	const [successMessage, setSuccessMessage] = useState("");

	const [loading, setLoading] = useState(false);

	const handleNewUser = () => {
		setNewUser(true);
		setData({
			name: "",
			email: "",
			role: "",
		});
		setErrorValidation({
			message: "",
			errors: {},
		});
        setSuccessMessage("")
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (!!errorValidation.message) {
			setErrorValidation({
				message: "",
				errors: {},
			});
		}
		setSuccessMessage("");
		try {
			const res = await createUsersApp(data);
			setSuccessMessage(res.message);
			setNewUser(false);
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
			}
		};
		getRoles();
		return () => {
			controller.abort();
			setData({
				name: "",
				email: "",
				role: "",
			});
		};
	}, []);

	return (
		<Layout title="Create Users" isLoading={loading}>
			<div className="flex flex-col justify-center items-center py-3">
				<Forms title="Registro de usuarios" onSubmit={(e) => handleSubmit(e)} errorMessage={errorValidation?.message} successMessage={successMessage}>
					<InputText title="Nombre" name="name" onChange={(e) => handleChange(e)} value={data.name} errors={errorValidation?.errors?.name} />
					<InputEmail
						title="Correo electrónico"
						name="email"
						onChange={(e) => handleChange(e)}
						errors={errorValidation?.errors?.email}
						value={data.email}
					/>
					<div>
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
					</div>
					{newUser && (
						<div className="flex justify-center">
							<ButtonsPermissions buttons={<SubmitBtn text="Crear" />} permissionsNeeded={['p-006']}/>
							
							<LinksBtn color="red" text="Cancelar" to="/" />
						</div>
					)}
				</Forms>
				{!newUser && (
					<div className="flex justify-center">
						<Buttons text="Agregar" onClick={(e) => handleNewUser(e)} />
						<LinksBtn color="red" text="Home" to="/" />
					</div>
				)}
			</div>
		</Layout>
	);
};
