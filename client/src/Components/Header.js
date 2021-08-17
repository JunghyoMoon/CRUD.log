import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FaEdit, FaSistrix, FaKey } from "react-icons/fa";

const Container = styled.div`
	background-color: #6F1E51;
	padding: 12px 0px;
	border-radius: 7px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	margin-left: 25px;
	font-size: 3em;
`;

const Items = styled.ul`
	margin-right: 30px;
	display: flex;
`;

const Item = styled.li`
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

const Header = () => <Container>
	{/* add link to home */}
	<Title>CRUD.log</Title>
	<Items>
		<Item>
			<Link to="/"><FaEdit /></Link>
		</Item>
		<Item>
			<Link to="/"><FaSistrix /></Link>
		</Item>
		<Item>
			<Link to="/"><FaKey /></Link>
		</Item>
	</Items>
</Container>;

export default withRouter(Header);
