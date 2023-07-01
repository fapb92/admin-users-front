import { useNavigate } from "react-router-dom";
import { Buttons } from "../Components/Buttons/Buttons";

export const NotFoundPage = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
			<p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
			<Buttons text="Volver" onClick={() => navigate(-1, { replace: true })} />
		</div>
	);
};
