import { MouseEvent } from "react";


interface IButton{
			evenHeander: (e:MouseEvent<HTMLButtonElement>)=>string;
}

const Button = ({evenHeander}:IButton) =>{
	return(
		<>
		  <button onClick={evenHeander}>Click Me</button>
		</>	
	)
}
export default Button