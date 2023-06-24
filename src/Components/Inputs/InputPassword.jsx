import React from "react";
import { CustomInput } from "./CustomInput";

export const InputPassword = ({ name = "password", ...props }) => {
	return <CustomInput type="password" name={name} {...props} />;
};
