import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SForm = styled.form``;

const Input = styled.input``;

const Submit = styled.input``;

const Editor = () => <Container>
    <SForm>
        <Input type="text" name="title"/>
        <Input type="textfield" name="content"/>
        <Submit type="submit"/>
    </SForm>
</Container>

export default Editor;