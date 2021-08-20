import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FaEdit, FaSistrix, FaKey } from "react-icons/fa";
import palette from "../palette";

const Container = styled.header`
	background-color: ${palette.headerBg};
	padding: 12px 0px;
	border-radius: 7px;
	width: 87%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	position: fixed;
	z-index: 10;
`;

const Title = styled.h1`
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
	margin-left: 25px;
	font-size: 3em;
`;

const Items = styled.ul`
	margin-right: 30px;
	display: flex;
`;

const Item = styled.li`
	z-index: 5;
	font-size: 30px;
	margin-right: 30px;
	opacity: 1;
	&:last-child {
		margin-right: 0px;
	}
	&:hover {
		opacity: 0.6;
	}
	transition: opacity 0.2s ease-in-out;
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
