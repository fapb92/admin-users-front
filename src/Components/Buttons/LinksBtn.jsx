import React from "react";
import { CustomButton } from "./CustomButton";

export const LinksBtn = ({ color = "blue", text='Link', ...props }) => {
	return <CustomButton type="link" color={color} text={text} {...props} />;
};
