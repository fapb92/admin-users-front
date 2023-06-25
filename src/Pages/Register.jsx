import React from "react";
import { Link } from "react-router-dom";
import { SubmitBtn } from "../Components/Buttons/SubmitBtn";
import { LinksBtn } from "../Components/Buttons/LinksBtn";
import { InputText } from "../Components/Inputs/InputText";
import { InputEmail } from "../Components/Inputs/InputEmail";
import { InputPassword } from "../Components/Inputs/InputPassword";
import { Layout } from "../Components/Layouts/Layout";
import { Forms } from "../Components/Layouts/Forms";

export const Register = () => {
	document.title = "User Admin - Sign up";
	return (
		<Layout title="Sing up">
			<Forms title="Registro de usuarios">
				<InputText title="Nombre" />
				<InputEmail title="Correo electrónico" />
				<InputPassword title="Contraseña" />
				<div className="flex justify-center">
					<SubmitBtn text="Registrarse" />
					<LinksBtn color="red" text="Cancelar" to="/" />
				</div>
			</Forms>
		</Layout>
	);
};
