import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Header from "../Components/Header";

import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Details from "../Routes/Details";

const Container = styled.div`
	width: 100%;
`;

const Router = () => (
	<HashRouter>
		<Container>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/details/:id" component={Details} />
				<Redirect to="/" />
			</Switch>
		</Container>
	</HashRouter>
);

export default Router;
