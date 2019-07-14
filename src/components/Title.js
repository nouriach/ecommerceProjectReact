// this will be a functional component

import React from 'react'

/** 
the function below is going to take two props, 'name & title'

the way the function below is set up means that whenever the function is called, all we need to do is pass
a 'name' and a 'title' and the below component will be executed.

**/

function Title ({name, title}) {
	return (
		<div className = "row">
			<div className = "col-10 mx-auto my-2 text-center text-title">
				<h1 className="text-capitalize font-weight-bold"> {name} 
				<strong className="text-blue"> {title}</strong>
				</h1>
			</div>
		</div>
	)
}

export default Title;