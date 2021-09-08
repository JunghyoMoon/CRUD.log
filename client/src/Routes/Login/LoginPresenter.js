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
	border-radius: 7px;
	padding: 30px;
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
	justify-content: center;
	align-items: center;
`;

const Input = styled.input``;

const Login = styled.button``;

const LoginPresenter = ({ handleLogin }) => (
	<Container>
		<Wrapper>
			<Form onSubmit={handleLogin}>
				<Input type="text" name="id"></Input>
				<Input type="text" name="password"></Input>
				<Login>Login</Login>
			</Form>
		</Wrapper>
	</Container>
);

export default LoginPresenter;
