import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

export const RequirePermissions = ({ permissionsNeeded=[] }) => {
	const { auth } = useAuth();
	return auth?.permissions.find((permission) => permissionsNeeded.includes(permission.key)) ? (
		<Outlet />
	) : auth?.accessToken ? (
		<Navigate to="*" replace />
	) : (
		<Navigate to="/signin" state={{ from: location }} replace />
	);
};
