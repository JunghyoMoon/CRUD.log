import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import palette from "../palette";

const Container = styled.nav`
	width: 100%;
	height: 100%;
	min-width: 150px;
	background-color: ${palette.articleBg};
`;

const Wrapper = styled.div`
	width: 15vw;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Title = styled.h3`
	margin: 30px 0px;
	font-size: 1.5em;
	align-self: center;
`;

const StyledLink = styled(Link)`
	width: 100%;
`;

const Item = styled.div`
	width: 100%;
	padding: 20px;
	font-size: 20px;
	text-align: left;
	background-color: ${(props) => (props.selected ? palette.mainBg : "none")};

	&:hover {
		background-color: ${palette.mainBg};
	}
`;

const Nav = ({ location: { pathname } }) => {
	console.log(pathname);
	return (
		<Container>
			<Wrapper>
				<Title>Categories</Title>
				<StyledLink to="/">
					<Item selected={pathname === "/"}>All</Item>
				</StyledLink>
				<StyledLink to="/category/html-css">
					<Item selected={pathname === "/category/html-css"}>HTML, CSS</Item>
				</StyledLink>
				<StyledLink to="/category/react">
					<Item selected={pathname === "/category/react"}>React</Item>
				</StyledLink>
				<StyledLink to="/category/mysql">
					<Item selected={pathname === "/category/mysql"}>MySQL</Item>
				</StyledLink>
				<StyledLink to="/category/personal">
					<Item selected={pathname === "/category/personal"}>Personal</Item>
				</StyledLink>
			</Wrapper>
		</Container>
	);
};

export default withRouter(Nav);
