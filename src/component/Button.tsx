type Btn = "btn btn-primary" | "btn btn-success" | "btn btn-danger";
 // Not A Number(NaN)
interface ButtonType{
		text:string;
		variant?:Btn;
		padding:[number,number];
}

//props:{text:string}
const Button = ({text,variant,padding}:ButtonType)=>{

	return(
		<>
			<button style={{padding:`${padding[0]}px${padding[1]}px`}} className={variant}>{text}</button>
		</>
	)
}
export default Button;