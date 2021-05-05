import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Context } from "./Context";
import Header from "./Header";
import Register from "./components/Register"
import Login from "./components/Login"




function AppRouter() {
	const [user, setUser] = useState(null);

	const value = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<Router>
			<div>
				{/* <nav> */}
				{/* 	<ul> */}
				{/* 		<li> */}
				{/* 			<Link to="/doctor/register">Register</Link> */}
				{/* 		</li> */}
				{/* 		<li> */}
				{/* 			<Link to="/doctor/login">Login</Link> */}
				{/* 		</li> */}
				{/* 		<li> */}
				{/* 			<Link to="/home">Home</Link> */}
				{/* 		</li> */}
				{/* 	</ul> */}
				{/* </nav> */}
				<Route path="/doctor/register" exact component={Register} />
				<Route path="/doctor/login" exact component={Login} />
				<Context.Provider value={value}>
					<Route path="/home" component={Header} />
				</Context.Provider>
			</div>
			</Router>
			);
}

export default AppRouter;