import React from "react";

interface BtnCss{
	  text?:string;
		BtnStyle:React.CSSProperties;
}
const Button = ({text,BtnStyle}:BtnCss)=>{
	return(
		<>
		  <button style={BtnStyle}>{text}</button>
		</>
	)
}

export default Button;