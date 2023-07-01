import { useAuth } from "../../Hooks/useAuth";

const ButtonsPermissions = ({ buttons, permissionsNeeded }) => {
	const { auth } = useAuth();
	if (auth?.permissions.find((permission) => permissionsNeeded.includes(permission.key))) {
		return <>{buttons}</>;
	}
	return <></>
};

export default ButtonsPermissions;
