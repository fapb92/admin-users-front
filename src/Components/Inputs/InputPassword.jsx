import React from "react";
import { CustomInput } from "./CustomInput";

export const InputPassword = ({ title = "password", ...props }) => {
	return <CustomInput type="password" title={title} {...props} />;
};
