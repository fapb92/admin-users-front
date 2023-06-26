import { useAuth } from "../Hooks/useAuth";
import { logOutService } from "../Services/logOutService";
import { useNavigate } from "react-router-dom";

export const LogOut = () => {
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
        console.log("entra a handle logout");
		logOutService(auth?.accessToken)
			.then((res) => {
				setAuth({});
				navigate("/", { replace: true });
			})
			.catch((error) => {});
	};
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<button className="text-gray-800 hover:text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-bold">Cerrar Sesión</button>
		</form>
	);
};
