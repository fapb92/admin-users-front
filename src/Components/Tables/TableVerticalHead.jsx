import React from "react";

export const TableVerticalHead = ({ data = {} }) => {
	console.log(data);
	const styleRows = "py-2 px-4 border-b border-gray-300";
	return (
		<table className="mt-4 bg-white w-1/2 border border-gray-300">
			<tbody>
				{Object.entries(data).map(([key, value], index) => {
					return (
						<tr key={index}>
							<td className={`${styleRows} font-bold`}>{key}</td>
							<td className={styleRows}>{value}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
