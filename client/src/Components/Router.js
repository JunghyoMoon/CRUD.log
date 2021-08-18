import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Header from "../Components/Header";
import Nav from "./Nav";

import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Details from "../Routes/Details";
import Edit from "../Routes/Edit";
import Create from "../Routes/Create";
import Search from "../Routes/Search";

const Container = styled.div`
	width: 100%;
	display: flex;
`;

const Article = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
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
					<Route path="/search" component={Search} />
					<Route path="/create" component={Create} />
					{/* todo: category/:category */}
					<Route path="/edit/:id" component={Edit} />
					<Route path="/details/:id" component={Details} />
					<Redirect from="*" to="/" />
				</Switch>
			</Article>
		</Container>
	</HashRouter>
);

export default Router;
