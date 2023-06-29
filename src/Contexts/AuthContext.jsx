import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [auth, setAuth] = useState({});
	const session_is_expire = () => {
		if (!auth?.session_expires_in) {
			return true;
		}
		const time = auth?.session_expires_in - Date.now();
		return time <= 0;
	};
	return <AuthContext.Provider value={{ auth, setAuth, session_is_expire }}>{children}</AuthContext.Provider>;
}
