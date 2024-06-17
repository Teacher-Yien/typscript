import { ChangeEvent } from "react";
export default function ChangeEvents() {
		function changHandle(e:ChangeEvent<HTMLInputElement>){
			console.log(e.target.value)
		}


	return(
		<div className=" container">
			<input type="text" onChange={changHandle} />
		</div>
	)
}