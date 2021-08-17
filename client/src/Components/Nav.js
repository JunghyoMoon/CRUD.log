import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const Container = styled.nav`
	width: 15%;
`;

const Nav = () => <Container>nav</Container>;

export default withRouter(Nav);
