import React from "react";
import styled from "styled-components";
import palette from "../../palette";
import Loading from "../../Components/Loading";

const Container = styled.div`
	width: 100%;
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 95%;
	padding: 30px;
	border-radius: 7px;
	display: flex;
	flex-direction: column;
	background-color: ${palette.articleBg};

	&:last-child {
		margin-top: 10px;
		align-items: center;
	}
`;

const Title = styled.h1`
	font-size: 50px;
	margin-bottom: 10px;
`;

const Info = styled.ul`
	margin-bottom: 10px;
	display: flex;
`;

const InfoItem = styled.li`
	margin-right: 5px;

	&:last-child {
		margin-right: 0px;
	}
`;

const Line = styled.hr`
	color: ${palette.white};
	margin-bottom: 20px;
`;

const Img = styled.img`
	max-width: 600px;
	width: 100%;
	margin-bottom: 20px;
	align-self: center;
`;

const Article = styled.article``;

const UpdateButtons = styled.div`
	margin-top: 30px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UpdateButton = styled.button`
	width: 100px;
	padding: 10px 0px;
	background-color: ${palette.headerBg};
	color: ${palette.white};
	border: none;
	border-radius: 7px;
	opacity: 0.6;
	transition: opacity 0.2s ease-in-out;

	&:hover {
		opacity: 1;
	}

	&:active {
		-webkit-box-shadow: 5px 5px 15px -1px #000000;
		box-shadow: 5px 5px 15px -1px #000000;
		transform: translateY(2px);
	}

	&:first-child {
		margin-right: 15px;
	}
`;

const DetailsPresenter = ({
	loading,
	data,
	comments,
	handleEditBtn,
	handleDeleteBtn,
}) =>
	loading ? (
		<Loading />
	) : (
		<Container>
			<Wrapper>
				<Title>{data.title}</Title>
				<Info>
					<InfoItem>{data.author}</InfoItem>
					<InfoItem>|</InfoItem>
					<InfoItem>{data.date}</InfoItem>
					<InfoItem>|</InfoItem>
					<InfoItem>조회 {data.views}</InfoItem>
					<InfoItem>|</InfoItem>
					<InfoItem>댓글 {data.comment.comment_count}</InfoItem>
				</Info>
				<Line />
				<Img src={data.img_url} />
				<Article>{data.content}</Article>
				<UpdateButtons>
					<UpdateButton onClick={handleEditBtn}>Edit</UpdateButton>
					<UpdateButton onClick={handleDeleteBtn}>Delete</UpdateButton>
				</UpdateButtons>
			</Wrapper>
			<Wrapper>comment here</Wrapper>
		</Container>
	);

export default DetailsPresenter;
