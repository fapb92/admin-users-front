import { Link } from "react-router-dom";
import { LogOut } from "./LogOut";
import { useState } from "react";
import { useAuth } from "../Hooks/useAuth";
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
					<div></div>
					<div className="flex items-center">
						{showButtons && (
							<div className="ml-4 flex items-center">
								<LogOut />
							</div>
						)}
						<button className="text-gray-800 hover:font-bold px-3 py-2 rounded-md text-sm" onClick={handleButtonClick}>
							{auth?.user?.name || "Opciones"}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);

	return (
		<nav className="bg-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div></div>
					<div className="flex items-center">
						{showButtons && (
							<div className="ml-4 flex items-center">
								<button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Button 1</button>
								<LogOut />
							</div>
						)}
						<button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleButtonClick}>
							Username
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
