import React from "react";
import styled from "styled-components";
import palette from "../../palette";

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



const DetailsPresenter = () => (
	<Container>
		<Wrapper>
			<Title>Hello world!</Title>
			<Info>
				<InfoItem>Hyo</InfoItem>
				<InfoItem>|</InfoItem>
				<InfoItem>2021.8.20 12:00</InfoItem>
				<InfoItem>|</InfoItem>
				<InfoItem>조회 200</InfoItem>
				<InfoItem>|</InfoItem>
				<InfoItem>댓글 0</InfoItem>
			</Info>
			<Line />
			<Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iahbYjphVbjSQaWHFCTOlgHaDj%26pid%3DApi&f=1" alt="image of this article" />
			<Article>
			사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.
			</Article>
		</Wrapper>
		<Wrapper>
			comment here
		</Wrapper>
	</Container>
);

export default DetailsPresenter;
