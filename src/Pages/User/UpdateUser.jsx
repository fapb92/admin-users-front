import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts/Layout";
import { Forms } from "../../Components/Layouts/Forms";
import { useAuth } from "../../Hooks/useAuth";
import { useUser } from "../../Hooks/useUser";
import { InputText } from "../../Components/Inputs/InputText";
import { SubmitBtn } from "../../Components/Buttons/SubmitBtn";
import { LinksBtn } from "../../Components/Buttons/LinksBtn";
import { useUpdateUser } from "../../Hooks/useUpdateUser";

export const UpdateUser = () => {
	const { auth } = useAuth();
	const getUser = useUser();
	const [updateUser, setUpdateUser] = useState({});
	const [loading, setLoading] = useState(true);
	const updateUserHook = useUpdateUser();
	const [errorValidation, setErrorValidation] = useState({
		message: "",
		errors: {},
	});
	const [successMessage, setSuccessMessage] = useState("");

	const handleOnChcange = (e) => {
		const { name, value } = e.target;
		setUpdateUser({ ...UpdateUser, [name]: value });
	};

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		setErrorValidation({
			message: "",
			errors: {},
		});
		setSuccessMessage("");
		try {
			const response = await updateUserHook(updateUser);
			setSuccessMessage(response.message);
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
		const callUser = async () => {
			try {
				const user = await getUser(controller.signal);
				setUpdateUser(user);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		if (auth?.user) {
			setUpdateUser(auth?.user);
			setLoading(false);
		} else {
			callUser();
		}
		return () => {
			controller.abort();
			setUpdateUser({});
		};
	}, []);
	return (
		<Layout isLoading={loading}>
			<div>
				<Forms title="Editar usuario" onSubmit={(e) => handleSubmit(e)} successMessage={successMessage} errorMessage={errorValidation.message}>
					<InputText title="Nombre" name="name" value={updateUser.name} onChange={(e) => handleOnChcange(e)} errors={errorValidation?.errors?.name} />
					<div className="flex justify-center">
						<SubmitBtn text="Editar" color="green" />
						<LinksBtn color="red" text="Volver" to="/profile" />
					</div>
				</Forms>
			</div>
		</Layout>
	);
};
