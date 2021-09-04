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

const DetailsPresenter = ({ loading, data, comments }) =>
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
			</Wrapper>
			<Wrapper>comment here</Wrapper>
		</Container>
	);

export default DetailsPresenter;
