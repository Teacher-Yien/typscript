interface ButtonType{
		text:string;
		variant?:string;
		fontSize:number;
}

//props:{text:string}
const Button = ({text,variant,fontSize}:ButtonType)=>{

	return(
		<>
			<button style={{fontSize:`${fontSize}px`}} className={variant}>{text}</button>
		</>
	)
}
export default Button;