import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthAxios } from "../Config/AuhtInstance";
import { Layout } from "../Components/Layouts/Layout";
import { LinksBtn } from "../Components/Buttons/LinksBtn";

export const VerifyEmail = () => {
	const { vcode, hash } = useParams();
	const [message, setMessage] = useState("Verificando...");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const verify = async () => {
			try {
				const res = await AuthAxios.get(`api/verification/email/${vcode}/${hash}`);
				console.log(res);
				setMessage(res.data.message);
			} catch (error) {
                if (error.response) {
                    setMessage(error.response.data.message)
                }
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		verify();
	}, []);
	return (
		<Layout isLoading={loading}>
			<div>
				<h1>{message}</h1>
                <br />
				<LinksBtn to={"/signin"} text="Iniciar sesión" />
			</div>
		</Layout>
	);
};
