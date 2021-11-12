import React from "react";
import { InputStyle } from "../styles/InputStyle.style";

const NotificationInput = ({ text, type }) => {
 return <InputStyle type={type} placeholder={text} />;
};

export default NotificationInput;
