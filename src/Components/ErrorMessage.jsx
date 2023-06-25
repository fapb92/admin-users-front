import React from "react";

export const ErrorMessage = ({errors=[]}) => {
	return (
		<div className="text-red-500">
			{!!errors && (
				<ul>
					{errors.map((error, index) => (
						<li key={index}>{error}</li>
					))}
				</ul>
			)}
		</div>
	);
};
