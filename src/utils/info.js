import React from "react";
export const aboutMe = (name, action) => {
	return <>
		<h1>Hello Dear</h1>
		<pre>{`
		My name is ${name}, I am glad to welcome you on my page!
		I ${/`/} am ${action}.
		
		`}</pre>
	</>
}
