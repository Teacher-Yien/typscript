let Links=[
	{ 
		label:"Home",
		path:"/home"
	}
	,
	{ 
		label:"About",
		path:"/about"
	}
] as const;  


const Asconst = ()=>{

	return(
		<>
			<nav>
				  {Links.map((e)=>(
						<a href={e.path}>{e.label}</a>
					))}
			</nav>
		</>
	)
}
export default Asconst