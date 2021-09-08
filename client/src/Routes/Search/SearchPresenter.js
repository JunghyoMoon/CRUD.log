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

const SearchWrapper = styled.article`
	width: 95%;
	padding: 20px 30px;
	border-radius: 7px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${palette.articleBg};
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Input = styled.input`
	width: 60%;
	margin-bottom: 15px;
	background-color: transparent;
	border: none;
	border-bottom: 2px solid ${palette.white};
	color: ${palette.white};
	font-size: 25px;

	&:focus {
		outline: none;
		caret-color: ${palette.white};
	}
`;

const Submit = styled.button``;

const ResultsWrapper = styled.div`
	width: 98%;
	padding-top: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-template-rows: auto;
	grid-gap: 20px;
`;

const SearchPresenter = ({ handleSubmit }) => (
	<Container>
		<SearchWrapper>
			<Form onSubmit={handleSubmit}>
				<Input placeholder="search articles by ..."></Input>
				<Submit>search</Submit>
			</Form>
		</SearchWrapper>
		<ResultsWrapper>results</ResultsWrapper>
	</Container>
);

export default SearchPresenter;
