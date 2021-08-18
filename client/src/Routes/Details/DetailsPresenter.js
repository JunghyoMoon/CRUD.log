import React from "react";
import styled from "styled-components";
import palette from "../../palette";

const Container = styled.div`
	width: 100%;
	padding-top: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 95%;
	height: 300px;
	border-radius: 5px;
	background-color: ${palette.articleBg};
`;

const DetailsPresenter = () => (
	<Container>
		<Wrapper>hello</Wrapper>
	</Container>
);

export default DetailsPresenter;
