import React from "react";
import { Forms } from "../Components/Layouts/Forms";
import { InputEmail } from "../Components/Inputs/InputEmail";
import { SubmitBtn } from "../Components/Buttons/SubmitBtn";
import { LinksBtn } from "../Components/Buttons/LinksBtn";
import { InputPassword } from "../Components/Inputs/InputPassword";
import { Layout } from "../Components/Layouts/Layout";

export const ResetPassword = () => {
	return (
		<Layout>
			<Forms title="Restaurar contraseña">
				<InputEmail title="Correo electrónico" />
				<InputPassword title="Contraseña" />
				<InputPassword title="Confirme contraseña" />
				{/* <input value={""} hidden /> */}
				<div className="flex justify-center">
					<SubmitBtn text="Enviar correo" />
					<LinksBtn color="red" text="Cancelar" to="/" />
				</div>
			</Forms>
		</Layout>
	);
};
