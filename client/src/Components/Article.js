import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.article`
	font-size: 15px;
`;

const Main = styled.div`
	display: flex;
	align-items: flex-end;
	border-radius: 4px;
	background-position: center;
	height: 300px;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
`;

const Title = styled.h1`
	position: absolute;
	font-size: 30px;
	margin-left: 15px;
	margin-bottom: 15px;
`;

const Info = styled.div`
	padding: 15px;
	border-radius: 4px;
	background-color: #181a1b;
`;

const Desc = styled.p`
	margin-bottom: 30px;
`;

const Date = styled.div`
	width: 100%;
	font-size: 20px;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;
`;

const Items = styled.ul`
	width: 100%;
	font-size: 17px;
	display: flex;
	justify-content: space-between;
`;

const Item = styled.li`
	span {
		margin-right: 10px;
		vertical-align: middle;

		&:last-child {
			margin-right: 0px;
			color: #44bd32;
		}
	}
`;

const Article = ({ title, img, desc, date, author, reply, views }) => (
	<Link to="/details/5">
		<Container>
			<Main className="main">
				<Img src={img} alt="img" />
				<Title>[Title]</Title>
			</Main>
			<Info>
				<Desc>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. D..
				</Desc>
				<Date>
					<span>21.8.17</span>
				</Date>
				<Items>
					<Item>Hyo</Item>
					<Item>
						<span>댓글 0</span>
						<span>|</span>
						<span>조회 200</span>
					</Item>
				</Items>
			</Info>
		</Container>
	</Link>
);

export default Article;
