import { Link } from "react-router-dom";
import { LogOut } from "./LogOut";
export const NavigationBar = () => {
	return (
		<nav className="bg-gray-100 shadow-sm fixed inset-x-0 top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div></div>
					<div className="flex items-center">
						<LogOut/>
					</div>
				</div>
			</div>
		</nav>
	);
};
