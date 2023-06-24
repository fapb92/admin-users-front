import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { ResetPassword } from "./Pages/ResetPassword";
import { UserList } from "./Pages/UserList";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/signup" element={<Register />}/>
				<Route path="/signin" element={<Login />}/>
				<Route path="/resetpass" element={<ResetPassword />}/>
				<Route path="/users" element={<UserList />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
