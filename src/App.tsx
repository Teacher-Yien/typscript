import Button from './component/Css';


export default function App(){

	return(
		<>
		  <h1>Hi</h1>
			<Button
			BtnStyle={{
				fontSize:22,
				backgroundColor:"red",
				border:"3px solid blue",
				color:"black",
				borderRadius:"20px",
				padding:"10px 10px"
			}}
			text='Insert Style'
			/>
		</>
	)
}
