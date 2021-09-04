import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../palette";

const Container = styled.article`
	font-size: 15px;
	opacity: 1;
	transition: opacity 0.2s ease-in-out;

	&:hover {
		opacity: 0.6;
	}
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
	background-color: ${palette.articleBg};
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

const Article = ({ id, title, img, desc, date, author, comments, views }) => (
	<Link to={`/details/${id}`}>
		<Container>
			<Main className="main">
				<Img src={img} alt="img" />
				<Title>{`[${title}]`}</Title>
			</Main>
			<Info>
				<Desc>{desc}</Desc>
				<Date>
					<span>{date}</span>
				</Date>
				<Items>
					<Item>{author}</Item>
					<Item>
						<span>댓글 {comments}</span>
						<span>|</span>
						<span>조회 {views}</span>
					</Item>
				</Items>
			</Info>
		</Container>
	</Link>
);

export default Article;
