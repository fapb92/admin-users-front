import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { UserList } from "./Pages/Users/UserList";
import { RequestResetPassword } from "./Pages/RequestResetPassword";
import { ResetPassword } from "./Pages/ResetPassword";
import { UserInfo } from "./Pages/User/UserInfo";
import { PrivateRoutes } from "./Components/PrivateRoutes";
import { VerifyToken } from "./Components/VerifyToken";
import { UpdateUser } from "./Pages/User/UpdateUser";
import { SelectRole } from "./Pages/User/SelectRole";
import { RoleList } from "./Pages/Roles/RoleList";
import { ShowRole } from "./Pages/Roles/ShowRole";
import { UserDetails } from "./Pages/Users/UserDetails";
import { UpdateUsersApp } from "./Pages/Users/UpdateUsersApp";

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
						<Route path="/profile/selectrole" element={<SelectRole />} />
						<Route path="/users" element={<UserList />} />
						<Route path="/users/:id" element={<UserDetails />} />
						<Route path="/users/:id/update" element={<UpdateUsersApp />} />
						<Route path="/role/list" element={<RoleList />} />
						<Route path="/role/:role" element={<ShowRole />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
