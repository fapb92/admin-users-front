import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layouts/Layout";
import { LinksBtn } from "../../Components/Buttons/LinksBtn";
import { useParams } from "react-router-dom";
import { useUsersApp } from "../../Hooks/useUsersApp";
import { Forms } from "../../Components/Layouts/Forms";
import { InputText } from "../../Components/Inputs/InputText";
import { SubmitBtn } from "../../Components/Buttons/SubmitBtn";

export const UpdateUsersApp = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [updateUser, setUpdateUser] = useState({});
	const { getUsersDetails, updateUsersApp } = useUsersApp();

	const [errorValidation, setErrorValidation] = useState({
		message: "",
		errors: {},
	});
	const [successMessage, setSuccessMessage] = useState("");

	const handleOnChcange = (e) => {
		const { name, value } = e.target;
		setUpdateUser({ ...updateUser, [name]: value });
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
			const response = await updateUsersApp(id, updateUser);
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
		setLoading(true);
		const controller = new AbortController();
		const getUser = async () => {
			try {
				const res = await getUsersDetails(id);
				setUpdateUser({ name: res.data.name });
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		getUser();

		return () => {
			controller.abort();
		};
	}, [id]);
	return (
		<Layout isLoading={loading}>
			<div>
				<Forms title="Editar usuario" onSubmit={(e) => handleSubmit(e)} successMessage={successMessage} errorMessage={errorValidation.message}>
					<InputText title="Nombre" name="name" value={updateUser.name} onChange={(e) => handleOnChcange(e)} errors={errorValidation?.errors?.name} />
					<div className="flex justify-center">
						<SubmitBtn text="Editar" color="green" />
						<LinksBtn color="red" text="Volver" to="/" />
					</div>
				</Forms>
			</div>
		</Layout>
	);
};
