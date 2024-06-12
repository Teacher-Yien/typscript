import Button from './component/Button';
// function addToRiel(amount:number):string{
// 	return `This ${amount}$ = ${amount * 4000} Riel`;
// }

// console.log(addToRiel(10));

export default function App(){

	return(
		<>
		  <h1>Hi</h1>
			<Button fontSize={30} variant='btn btn-primary' text="Click me"/>
		</>
	)
}
