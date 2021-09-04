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

	&:hover {
		background-color: ${palette.mainBg};
	}
`;

const Item = styled.div`
	width: 100%;
	padding: 20px;
	font-size: 20px;
	text-align: left;
`;

// todo : 조작성 향상을 위해 Link를 Item 바깥으로 뺄 것.
const Nav = () => (
	<Container>
		<Wrapper>
			<Title>Categories</Title>
			<StyledLink to="/">
				<Item>All</Item>
			</StyledLink>
			<StyledLink to="/category/html-css">
				<Item>HTML, CSS</Item>
			</StyledLink>
			<StyledLink to="/category/react">
				<Item>React</Item>
			</StyledLink>
			<StyledLink to="/category/mysql">
				<Item>MySQL</Item>
			</StyledLink>
			<StyledLink to="/category/personal">
				<Item>Personal</Item>
			</StyledLink>
		</Wrapper>
	</Container>
);

export default withRouter(Nav);
