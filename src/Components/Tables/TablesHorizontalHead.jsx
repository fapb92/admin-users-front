import React from "react";

export const TablesHorizontalHead = ({ data = {} }) => {
	const styleRows = "py-2 px-4 border-b border-gray-300";
	return (
		<table className="mt-4 bg-white w-1/2 border border-gray-300">
			<thead>
				<tr>
					{Object.entries(data).map(([key, value], index) => {
						return (
							<th className={styleRows} key={index}>
								{key}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				<tr>
					{Object.entries(data).map(([key, value], index) => {
						return (
							<td className={styleRows} key={index}>
								{value}
							</td>
						);
					})}
				</tr>
			</tbody>
		</table>
	);
};
