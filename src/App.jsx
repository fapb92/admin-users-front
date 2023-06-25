import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { UserList } from "./Pages/UserList";
import { RequestResetPassword } from "./Pages/RequestResetPassword";
import { ResetPassword } from "./Pages/ResetPassword";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/signup" element={<Register />}/>
				<Route path="/signin" element={<Login />}/>
				<Route path="/password/forget" element={<RequestResetPassword />}/>
				<Route path="/password/reset" element={<ResetPassword />}/>
				<Route path="/users" element={<UserList />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;