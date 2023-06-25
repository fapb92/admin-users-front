import axios from "axios";


export const AuthAxios = axios.create({
	baseURL: import.meta.env.VITE_USER_ADMIN_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
