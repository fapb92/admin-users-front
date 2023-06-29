import React, { useEffect, useState } from "react";
import { Layout } from "../Components/Layouts/Layout";
import { Forms } from "../Components/Layouts/Forms";
import { InputEmail } from "../Components/Inputs/InputEmail";
import { InputPassword } from "../Components/Inputs/InputPassword";
import { SubmitBtn } from "../Components/Buttons/SubmitBtn";
import { LinksBtn } from "../Components/Buttons/LinksBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginService } from "../Services/LoginService";
import { Buttons } from "../Components/Buttons/Buttons";
import { useAuth } from "../Hooks/useAuth";
import { ResendEmailVerificationService } from "../Services/ResendEmailVerificationService";
import { getUserService } from "../Services/getUserService";

export const Login = () => {
	const { setAuth } = useAuth();
	const [tempToken, setTempToken] = useState("");
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [errorValidation, setErrorValidation] = useState({
		message: "",
		errors: {},
	});

	const [successMessage, setSuccessMessage] = useState("");
	const [showResendEmail, setShowResendEmail] = useState(false);

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || "/";

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

		LoginService(data)
			.then(async (res) => {
				setSuccessMessage(res.data.message);
				setShowResendEmail(res.data.status !== 1);
				const token = res.data.access_token;
				if (res.data.status === 1) {
					setAuth((prev) => {
						return {
							...prev,
							accessToken: token,
							session_expires_in: Date.now() + res.data.expires_in * 1000,
						};
					});
					setTimeout(() => navigate(from, { replace: true }), 1000);
				} else {
					setTempToken(token);
				}
			})
			.catch((error) => {
				if (error.response) {
					setErrorValidation({
						message: error.response.data.message,
						errors: error.response.data.errors,
					});
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handleClick = () => {
		setLoading(true);
		setSuccessMessage("");
		ResendEmailVerificationService(tempToken)
			.then((res) => {
				setSuccessMessage(res.data.message);
				setTimeout(() => navigate("/"), 10000);
			})
			.catch((error) => {
				if (error.response) {
					setErrorValidation({
						message: error.response.data.message,
						errors: [],
					});
				}
			})
			.finally(() => {
				setShowResendEmail(false);
				setLoading(false);
			});
	};

	useEffect(() => {
		return () => {
			setData({
				email: "",
				password: "",
			});
		};
	}, []);

	return (
		<Layout title="Sign in" isLoading={loading}>
			<div>
				<Forms title="Inicio de sesión" onSubmit={(e) => handleSubmit(e)} errorMessage={errorValidation?.message} successMessage={successMessage}>
					{showResendEmail && <Buttons color="green" text="Enviar correo de verificación" onClick={() => handleClick()} />}
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
						<SubmitBtn text="Iniciar sesión" />
						<LinksBtn color="red" text="Cancelar" to="/" />
					</div>
				</Forms>
				<div className="flex justify-center">
					<Link to="/password/forget" className="hover:bg-blue-700 hover:text-white p-2 rounded" children={"¿Olvido contraseña?"} />
				</div>
			</div>
		</Layout>
	);
};
