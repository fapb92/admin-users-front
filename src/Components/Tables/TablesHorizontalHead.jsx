import React from "react";

export const TablesHorizontalHead = ({ title = "Title", headers = { key_data: "Name to display" }, data = [{ key_data: "value" }] }) => {
	const styleTD = "border-b border-gray-300 px-4 py-2 text-center";
	const styleTH = "border-b border-gray-300 px-4 py-2";
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-3xl font-bold mb-4">{title}</h1>
			<table className="border-collapse border border-gray-300">
				<thead>
					<tr>
						{Object.entries(headers).map(([key, value], index) => {
							return (
								<th className={styleTH} key={index}>
									{value}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((itemObject, indexData) => {
						return (
							<tr key={indexData}>
								{Object.entries(headers).map(([key, value], index) => {
									return (
										<td className={styleTD} key={`${indexData}-${index}`}>
											{itemObject[key]}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
