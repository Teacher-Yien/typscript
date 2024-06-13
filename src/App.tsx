import Button from './component/Button';
// function addToRiel(amount:number):string{
// 	return `This ${amount}$ = ${amount * 4000} Riel`;
// }

// console.log(addToRiel(10));

export default function App(){

	return(
		<>
		  <h1>Hi</h1>
			<Button padding={[20,20]} variant='btn btn-success' text="Click me"/>
		</>
	)
}
