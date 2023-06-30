import { LogOut } from "./LogOut";
import { useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
export const NavigationBar = () => {
	const [showButtons, setShowButtons] = useState(false);
	const { auth } = useAuth();

	const handleButtonClick = () => {
		setShowButtons(!showButtons);
	};
	return (
		<nav className="bg-gray-100 shadow-sm fixed inset-x-0 top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
								Home
							</Link>
						</div>
					</div>
					<div className="flex items-center">
						{showButtons && (
							<>
								<div className="ml-4 flex items-center">
									<LogOut />
								</div>
								<div className="ml-4 flex items-center">
									<Link
										to="/profile/selectrole"
										className="text-gray-800 px-3 py-2 rounded-md text-sm font-bold hover:bg-blue-500 hover:text-white"
									>
										Roles
									</Link>
								</div>
							</>
						)}
						<div className="flex flex-col items-center">
							<button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-bold" onClick={handleButtonClick}>
								{auth?.user?.name || "Opciones"}
								{auth?.role?.title ? <p className="text-gray-500 text-xs font-normal">{auth?.role?.title}</p> : null}
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
