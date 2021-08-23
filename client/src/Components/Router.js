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
	height: 100vh;
	display: grid;
	grid-template-columns: 15vw 85vw;
	grid-template-rows: auto;
	grid-template-areas:
		"nav content"
		"nav content";

	@media screen and (max-width: 1000px) {
		grid-template-columns: 100vw;
		grid-template-areas:
			"content"
			"content";
	}
`;

const NavWrapper = styled.div`
	grid-area: nav;
	width: 100%;

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

const Content = styled.div`
	grid-area: content;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Router = () => (
	<HashRouter>
		<Container>
			<NavWrapper>
				<Nav />
			</NavWrapper>
			<Content>
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
			</Content>
		</Container>
	</HashRouter>
);

export default Router;
