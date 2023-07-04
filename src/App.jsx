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
import { CreateUsers } from "./Pages/Users/CreateUsers";
import { AsignRemoveRoles } from "./Pages/Users/AsignRemoveRoles";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { RequirePermissions } from "./Components/Permissions/RequirePermissions";
import { VerifyEmail } from "./Pages/verifyEmail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<Register />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/verification/email/:vcode/:hash" element={<VerifyEmail />} />
				<Route path="/password/forget" element={<RequestResetPassword />} />
				<Route path="/password/reset" element={<ResetPassword />} />
				<Route element={<VerifyToken />}>
					<Route path="/" element={<Home />} />
					<Route element={<PrivateRoutes />}>
						<Route path="/profile" element={<UserInfo />} />
						<Route path="/profile/update" element={<UpdateUser />} />
						<Route path="/profile/selectrole" element={<SelectRole />} />
						<Route element={<RequirePermissions permissionsNeeded={["p-009"]} />}>
							<Route path="/users" element={<UserList />} />
						</Route>
						<Route element={<RequirePermissions permissionsNeeded={["p-006"]} />}>
							<Route path="/users/create" element={<CreateUsers />} />
						</Route>
						<Route element={<RequirePermissions permissionsNeeded={["p-010"]} />}>
							<Route path="/users/:id" element={<UserDetails />} />
						</Route>
						<Route element={<RequirePermissions permissionsNeeded={["p-007"]} />}>
							<Route path="/users/:id/update" element={<UpdateUsersApp />} />
						</Route>
						<Route element={<RequirePermissions permissionsNeeded={["p-004", "p-005"]} />}>
							<Route path="/users/:id/asignremove" element={<AsignRemoveRoles />} />
						</Route>

						<Route element={<RequirePermissions permissionsNeeded={["p-001"]} />}>
							<Route path="/role/list" element={<RoleList />} />
						</Route>

						<Route element={<RequirePermissions permissionsNeeded={["p-002"]} />}>
							<Route path="/role/:role" element={<ShowRole />} />
						</Route>
					</Route>
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
