import React from "react";
import { LinksBtn } from "../Components/Buttons/LinksBtn";
import { Layout } from "../Components/Layouts/Layout";
import { useAuth } from "../Hooks/useAuth";

export const Home = () => {
	document.title = "User Admin - Home";
	const { auth } = useAuth();
	return (
		<Layout>
			<div className="bg-gray-100 p-4 rounded">
				<h1 className="text-3xl font-bold text-center">Bienvenido a User Admin</h1>
				{!auth?.accessToken && (
					<div className="flex justify-center">
						<LinksBtn color="green" text="Iniciar Sesión" to="/signin" />
						<LinksBtn color="blue" text="Registrarse" to="/signup" />
					</div>
				)}
			</div>
		</Layout>
	);
};
