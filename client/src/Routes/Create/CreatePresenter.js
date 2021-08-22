import React from "react";
import styled from "styled-components";
import Editor from "../../Components/Editor";
import palette from "../../palette";

const Container = styled.div`
	padding-top: 80px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 30px;
	margin-bottom: 30px;
`;

const Wrapper = styled.article`
	width: 95%;
	padding: 30px;
	border-radius: 7px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${palette.articleBg};
`;

const CreatePresenter = () => (
	<Container>
		<Wrapper>
			<Title>Create an Article!</Title>
			<Editor />
		</Wrapper>
	</Container>
);

export default CreatePresenter;
