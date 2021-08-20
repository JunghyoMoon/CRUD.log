import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Container = styled.nav`
	width: 15%;
	height: 100%;
`;

const Wrapper = styled.div`
	width: 13%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: fixed;
`;

const Title = styled.h3`
	margin: 30px;
	font-size: 1.5em;
`;

const Item = styled.section`
	width: 90%;
	padding: 10px;
	padding-left: 20px;
	margin-bottom: 20px;
	border-radius: 5px;
	opacity: 1;

	span {
		font-size: 2em;
		width: 100%;
		margin: 15px 0px;
	}
`;

// todo : 조작성 향상을 위해 Link를 Item 바깥으로 뺄 것.
const Nav = () => (
	<Container>
		<Wrapper>
			<Title>Categories</Title>
			<Item>
				<Link to="/">
					<span>All</span>
				</Link>
			</Item>
			<Item>
				<Link to="/">
					<span>HTML, CSS</span>
				</Link>
			</Item>
			<Item>
				<Link to="/">
					<span>MySQL</span>
				</Link>
			</Item>
			<Item>
				<Link to="/">
					<span>React</span>
				</Link>
			</Item>
			<Item>
				<Link to="/">
					<span>Personal</span>
				</Link>
			</Item>
		</Wrapper>
	</Container>
);

export default withRouter(Nav);
