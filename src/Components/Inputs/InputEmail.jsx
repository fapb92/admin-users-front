import React from "react";
import { CustomInput } from "./CustomInput";

export const InputEmail = ({ name = "email", ...props }) => {
	return <CustomInput type="email" name={name} {...props} />;
};
