import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { UserList } from "./Pages/UserList";
import { RequestResetPassword } from "./Pages/RequestResetPassword";
import { ResetPassword } from "./Pages/ResetPassword";
import { UserInfo } from "./Pages/User/UserInfo";
import { PrivateRoutes } from "./Components/PrivateRoutes";
import { VerifyToken } from "./Components/VerifyToken";
import { UpdateUser } from "./Pages/User/UpdateUser";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<VerifyToken />}>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/password/forget" element={<RequestResetPassword />} />
					<Route path="/password/reset" element={<ResetPassword />} />
					<Route element={<PrivateRoutes />}>
						<Route path="/profile" element={<UserInfo />} />
						<Route path="/profile/update" element={<UpdateUser />} />
						<Route path="/users" element={<UserList />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
