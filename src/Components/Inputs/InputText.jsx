import React from "react";
import { CustomInput } from "./CustomInput";

export const InputText = ({ name = "text", ...props }) => {
	return <CustomInput name={name} {...props} />;
};
