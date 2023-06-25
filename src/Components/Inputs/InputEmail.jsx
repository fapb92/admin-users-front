import React from "react";
import { CustomInput } from "./CustomInput";

export const InputEmail = ({ title = "email", ...props }) => {
	return <CustomInput type="email" title={title} {...props} />;
};
