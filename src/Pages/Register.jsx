import React, { useState, useEffect } from "react";
import { SubmitBtn } from "../Components/Buttons/SubmitBtn";
import { LinksBtn } from "../Components/Buttons/LinksBtn";
import { InputText } from "../Components/Inputs/InputText";
import { InputEmail } from "../Components/Inputs/InputEmail";
import { InputPassword } from "../Components/Inputs/InputPassword";
import { Layout } from "../Components/Layouts/Layout";
import { Forms } from "../Components/Layouts/Forms";
import { RegisterService } from "../Services/RegisterService";
import { useNavigate } from "react-router-dom";

export const Register = () => {
	let navigate = useNavigate();
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [errorValidation, setErrorValidation] = useState({
		message: "",
		errors: {},
	});

	const [successMessage, setSuccessMessage] = useState("");

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		if (!!errorValidation.message) {
			setErrorValidation({
				message: "",
				errors: {},
			});
		}
		
		RegisterService(data)
			.then((res) => {
				setSuccessMessage(res.data.message);
				setLoading(false);
				setTimeout(()=> navigate("/"), 5000)
			})
			.catch((error) => {
				if (error.response) {
					setErrorValidation({
						message: error.response.data.message,
						errors: error.response.data.errors,
					});
				}
				setLoading(false);
			});
	};

	useEffect(() => {
		return () => {
			setData({
				name: "",
				email: "",
				password: "",
			});
		};
	}, []);

	return (
		<Layout title="Sing up" isLoading={loading}>
			<Forms title="Registro de usuarios" onSubmit={(e) => handleSubmit(e)} errorMessage={errorValidation?.message} successMessage={successMessage}>
				<InputText title="Nombre" name="name" onChange={(e) => handleChange(e)} value={data.name} errors={errorValidation?.errors?.name} />
				<InputEmail
					title="Correo electrónico"
					name="email"
					onChange={(e) => handleChange(e)}
					errors={errorValidation?.errors?.email}
					value={data.email}
				/>
				<InputPassword
					title="Contraseña"
					name="password"
					onChange={(e) => handleChange(e)}
					value={data.password}
					errors={errorValidation?.errors?.password}
				/>
				<div className="flex justify-center">
					<SubmitBtn text="Registrarse" />
					<LinksBtn color="red" text="Cancelar" to="/" />
				</div>
			</Forms>
		</Layout>
	);
};
