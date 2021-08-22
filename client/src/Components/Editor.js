import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const Input = styled.input`
	width: 100%;
	margin-bottom: 20px;
`;

const Label = styled.label`
	font-size: 20px;
	margin-bottom: 10px;
`;

const RadioBox = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const Radio = styled.input`
	margin-right: 5px;
	margin-left: 10px;

	&:first-child {
		margin-left: 0px;
	}
`;

const RadioLabel = styled.label``;

const Content = styled.textarea`
	width: 100%;
	margin-bottom: 20px;
`;

const Submit = styled.input`
	align-self: center;
`;

const Editor = () => (
	<Container>
		<Form>
			<Label htmlFor="title">Title</Label>
			<Input type="text" id="title" name="title" />
			<Label htmlFor="category">Category</Label>
			<RadioBox id="category">
				<Radio type="radio" id="html,css" name="html,css" value="html,css" />
				<RadioLabel htmlFor="html,css">HTML, CSS</RadioLabel>
				<Radio type="radio" id="mysql" name="mysql" value="mysql" />
				<RadioLabel htmlFor="mysql">MySQL</RadioLabel>
				<Radio type="radio" id="react" name="react" value="react" />
				<RadioLabel htmlFor="react">React</RadioLabel>
				<Radio type="radio" id="personal" name="personal" value="personal" />
				<RadioLabel htmlFor="personal">Personal</RadioLabel>
			</RadioBox>
			<Label htmlFor="content">Write your article</Label>
			<Content id="content" name="content" />
			<Submit type="submit" />
		</Form>
	</Container>
);

export default Editor;
