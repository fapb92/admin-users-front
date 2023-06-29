import { useAuth } from "../Hooks/useAuth";
import { useAuthRequests } from "../Hooks/useAuthRequests";
import { logOutService } from "../Services/logOutService";
import { useNavigate } from "react-router-dom";

export const LogOut = () => {
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();
	const authRequests = useAuthRequests();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await authRequests(logOutService);
			setAuth({});
			navigate("/", { replace: true });
		} catch (error) {
			if (error?.response?.status >= 400) {
				setAuth({});
				navigate("/", { replace: true });
			}
		}
	};
	return (
		<form onSubmit={async (e) => await handleSubmit(e)}>
			<button className="text-gray-800 hover:text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-bold">Cerrar Sesión</button>
		</form>
	);
};
