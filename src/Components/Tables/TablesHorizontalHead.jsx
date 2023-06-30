import React from "react";

// actions = [{ button, props: { prop1: { value: "value" }, prop2: { hint: "key_data" } } }]
export const TablesHorizontalHead = ({
	title = "Title",
	headers = { key_data: "Name to display" },
	data = [{ key_data: "value" }],
	actions = [],
	pagination = { onclick: "function(url)", pages: [] },
}) => {
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
						{actions.length === 0 ? null : <th></th>}
					</tr>
				</thead>
				<tbody>
					{data.map((itemObject, indexData) => {
						return (
							<tr key={indexData}>
								{Object.entries(headers).map(([key, value], index) => {
									if (key !== "actions") {
										return (
											<td className={styleTD} key={`${indexData}-${index}`}>
												{itemObject[key]}
											</td>
										);
									}

									const propsTransformed = (propsToObject) => {
										const propsToReturn = {};
										Object.keys(propsToObject).forEach((key) => {
											const props = propsToObject[key];
											if (props?.value) {
												propsToReturn[key] = props.value;
											}

											if (props?.hint) {
												propsToReturn[key] = itemObject[props.hint];
											}

											if (props?.func) {
												if (props?.arg) {
													if (props.arg?.hint) {
														propsToReturn[key] = props.func(itemObject[props.arg.hint]);
													}
													if (props.arg?.value) {
														propsToReturn[key] = props.func(props.arg.value);
													}
												} else {
													propsToReturn[key] = props.func();
												}
											}
										});
										return propsToReturn;
									};

									return (
										<td className={styleTD} key={`${indexData}-${index}`}>
											{actions.map((action, ind) => {
												const { button: Button, props } = action;
												const newProps = propsTransformed(props);
												return <Button {...newProps} key={`${indexData}-${index}-${ind}`} />;
											})}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			{pagination.length === 0 ? null : (
				<div className="flex justify-center mt-4">
					{pagination.pages.map((page, index) => {
						return (
							<button 
							className={"px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2"} 
							key={index}
							onClick={async ()=> await pagination.onclick(page.url)}
							children={page.label.replace('&laquo;','<<').replace('&raquo;','>>')}
							/>
						);
					})}

					
				</div>
			)}
		</div>
	);
};
