export const path = {
	register: import.meta.env.VITE_USER_ADMIN_ENPOINT_REGISTER,
	login: import.meta.env.VITE_USER_ADMIN_ENPOINT_LOGIN,
	logout: import.meta.env.VITE_USER_ADMIN_ENPOINT_LOGOUT,
	getUser: import.meta.env.VITE_USER_ADMIN_ENPOINT_GET_USER,
	updateUser: import.meta.env.VITE_USER_ADMIN_ENPOINT_UPDATE_USER,
	resendEmailVerification: import.meta.env.VITE_USER_ADMIN_ENPOINT_RESEND_EMAIL_VERIFICATION,
	refreshToken: import.meta.env.VITE_USER_ADMIN_ENPOINT_REFRESH_TOKEN,
};
