import { useState } from "react";
export default function Use(){
	interface Iuser{
	  id:number;
		Name:string;
		Score:number;
 }
	const User : Iuser ={id:1001,Name:"Nama@gmail.com",Score:200};
	const [person,setPerson] = useState<Iuser|null>(null);
	
	console.log(User);

	return(
		<>
	  	<h2>{User.id}</h2>
			<h2>{User.Name}</h2>
			<h2>{User.Score}</h2>
		</>
	)
}