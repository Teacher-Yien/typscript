//import React from "react";
interface ChildProps{
	  Element:string;
		children:JSX.Element;
		// React.ReactNode
}

const Props = ({Element,children}:ChildProps)=>{
			return(
				<>
					<article>
							<h1>{Element}</h1>
							{children}
					</article>
				</>
			)
}
export default Props