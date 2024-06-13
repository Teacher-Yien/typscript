
interface BtnClick{
	  onClick():string;
}

const Button = ({onClick}:BtnClick)=>{
			const clickHeader = () =>{
				console.log(onClick);
			}

			return <button onClick={clickHeader}>Check me</button>
}
export default Button;