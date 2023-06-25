import React from "react";
import { CustomInput } from "./CustomInput";

export const InputText = ({ title = "text", ...props }) => {
	return <CustomInput title={title} {...props} />;
};
