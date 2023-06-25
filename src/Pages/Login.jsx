import React from "react";
import { Layout } from "../Components/Layouts/Layout";
import { Forms } from "../Components/Layouts/Forms";
import { InputEmail } from "../Components/Inputs/InputEmail";
import { InputPassword } from "../Components/Inputs/InputPassword";
import { SubmitBtn } from "../Components/Buttons/SubmitBtn";
import { LinksBtn } from "../Components/Buttons/LinksBtn";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<Layout title="Sign in">
			<div>
				<Forms title="Inicio de sesión">
					<InputEmail title="Correo electrónico" />
					<InputPassword title="Contraseña" />
					<div className="flex justify-center">
						<SubmitBtn text="Iniciar sesión" />
						<LinksBtn color="red" text="Cancelar" to="/" />
					</div>
				</Forms>
				<div className="flex justify-center">
					<Link to="/password/forget" className='hover:bg-blue-700 hover:text-white p-2 rounded' children={"¿Olvido contraseña?"} />
				</div>
			</div>
		</Layout>
	);
};
