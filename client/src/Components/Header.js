import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const Container = styled.div`
	width: 100%;
`;

const Header = () => <Container>header</Container>;

export default withRouter(Header);
