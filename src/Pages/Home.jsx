import React, { useEffect, useState } from "react";
import { LinksBtn } from "../Components/Buttons/LinksBtn";
import { Layout } from "../Components/Layouts/Layout";
import { useAuth } from "../Hooks/useAuth";
import { useUser } from "../Hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
	document.title = "User Admin - Home";
	const { auth } = useAuth();
	const getUser = useUser();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const controller = new AbortController();
		const callUser = async () => {
			try {
				await getUser(controller.signal);
			} catch (error) {
				navigate("/", { replace: true, state: location });
			} finally {
				setLoading(false);
			}
		};
		!auth?.user ? callUser() : setLoading(false);
		return () => {
			controller.abort();
		};
	}, []);
	return (
		<Layout isLoading={loading}>
			<div className="bg-gray-100 p-4 rounded max-w-lg mt-40">
				<h1 className="text-3xl font-bold text-center">Bienvenido {auth?.user?.name || "a User Admin"}</h1>
				{!auth?.user && (
					<div className="flex justify-center">
						<LinksBtn color="green" text="Iniciar Sesión" to="/signin" />
						<LinksBtn color="blue" text="Registrarse" to="/signup" />
					</div>
				)}
				{auth?.user && (
					<div className="flex justify-center flex-wrap">
						<LinksBtn color="green" text="Lista de roles en la plataforma" to="/role/list" />
						<LinksBtn color="green" text="Lista de usuarios" to="/users" />
						<LinksBtn color="green" text="Crear Usuarios" to="/users/create" />
					</div>
				)}
			</div>
		</Layout>
	);
};
