import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Header from "../Components/Header";
import Nav from "./Nav";

import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Details from "../Routes/Details";

const Container = styled.div`
	width: 100%;
	display: flex;
`;

const Article = styled.section`
	width: 100%;
`;

const Router = () => (
	<HashRouter>
		<Container>
			<Nav />
			<Article>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={Login} />
					{/* todo: category/:category */}
					{/* todo: write */}
					{/* todo: search */}
					{/* todo: edit/:id */}
					<Route path="/details/:id" component={Details} />
					<Redirect to="/" />
				</Switch>
			</Article>
		</Container>
	</HashRouter>
);

export default Router;
