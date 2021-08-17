import React from "react";
import styled from "styled-components";
import {CgSearchLoading} from "react-icons/cg"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
`;

const Icon = styled.div`
    margin-bottom: 15px;
    font-size: 50px;
`;

const Message = styled.span`
    font-size: 20px;
    text-align: center;
`;

const Loading = () => <Container>
    <Icon><CgSearchLoading /></Icon>
    <Message>Loading..</Message>
</Container>

export default Loading;