
//props:{text:string}
const Button = ({text,variant}:{text:string,variant:string})=>{

	return(
		<>
			<button className={variant}>{text}</button>
		</>
	)
}
export default Button;