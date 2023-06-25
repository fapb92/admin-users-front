import React from "react";
import { Layout } from "../Components/Layouts/Layout";
import { Forms } from "../Components/Layouts/Forms";
import { InputEmail } from "../Components/Inputs/InputEmail";
import { SubmitBtn } from "../Components/Buttons/SubmitBtn";
import { LinksBtn } from "../Components/Buttons/LinksBtn";

export const RequestResetPassword = () => {
	return (
		<Layout title="Reset password">
			<Forms title="Restaurar contraseña">
				<InputEmail title="Correo electrónico" />
				<div className="flex justify-center">
					<SubmitBtn text="Enviar correo" />
					<LinksBtn color="red" text="Cancelar" to="/" />
				</div>
			</Forms>
		</Layout>
	);
};
