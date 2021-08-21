import React from "react";
import styled from "styled-components";
import Editor from "../../Components/Editor";

const Container = styled.div`
	padding-top: 100px;
`;

const CreatePresenter = () => <Container>
	<Editor />
</Container>;

export default CreatePresenter;
