import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FaEdit, FaSistrix, FaKey } from "react-icons/fa";
import palette from "../palette";

const Container = styled.header`
	position: fixed;
	width: 85vw;
	background-color: ${palette.headerBg};
	padding: 12px 0px;
	border-radius: 7px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	z-index: 10;

	@media screen and (max-width: 1000px) {
		width: 100vw;
		flex-direction: column;
	}
`;

const Title = styled.h1`
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
	margin-left: 25px;
	font-size: 3em;

	@media screen and (max-width: 1000px) {
		margin-bottom: 15px;
		font-size: 2em;
	}
`;

const Items = styled.ul`
	margin-right: 30px;
	display: flex;
	font-size: 30px;

	@media screen and (max-width: 1000px) {
		width: 100%;
		justify-content: flex-end;
		font-size: 20px;
	}
`;

const Item = styled.li`
	z-index: 5;
	margin-right: 30px;
	opacity: 1;
	transition: opacity 0.2s ease-in-out;

	&:last-child {
		margin-right: 0px;
	}
	&:hover {
		opacity: 0.6;
	}
`;

const Header = () => (
	<Container>
		<Link to="/">
			<Title>CRUD.log</Title>
		</Link>
		<Items>
			<Item>
				<Link to="/create">
					<FaEdit />
				</Link>
			</Item>
			<Item>
				<Link to="/search">
					<FaSistrix />
				</Link>
			</Item>
			<Item>
				<Link to="/login">
					<FaKey />
				</Link>
			</Item>
		</Items>
	</Container>
);

export default withRouter(Header);
