export const path = {
	register: import.meta.env.VITE_USER_ADMIN_ENPOINT_REGISTER,
	login: import.meta.env.VITE_USER_ADMIN_ENPOINT_LOGIN,
	logout: import.meta.env.VITE_USER_ADMIN_ENPOINT_LOGOUT,
	getUser: import.meta.env.VITE_USER_ADMIN_ENPOINT_GET_USER,
	updateUser: import.meta.env.VITE_USER_ADMIN_ENPOINT_UPDATE_USER,
	rolesUser: import.meta.env.VITE_USER_ADMIN_ENPOINT_ROLES_USER,
	selectRoleUser: import.meta.env.VITE_USER_ADMIN_ENPOINT_SELECT_USER_ROLE,
	resendEmailVerification: import.meta.env.VITE_USER_ADMIN_ENPOINT_RESEND_EMAIL_VERIFICATION,
	refreshToken: import.meta.env.VITE_USER_ADMIN_ENPOINT_REFRESH_TOKEN,
	rolelist: import.meta.env.VITE_USER_ADMIN_ENPOINT_ROLE_LIST,
	roleDetails: (role) => import.meta.env.VITE_USER_ADMIN_ENPOINT_ROLE_DETAILS.replace("{role}", role),
	userList: import.meta.env.VITE_USER_ADMIN_ENPOINT_USERS_LIST,
};
