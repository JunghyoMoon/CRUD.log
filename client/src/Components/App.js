import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Nav from "./Nav";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 12px;
        background-color: #282B2D;
        color: white;
    }
`;

const Container = styled.div`
	width: 100%;
	display: flex;
`;

const App = () => (
	<Container>
		<GlobalStyle />
		<Nav />
		<Router />
	</Container>
);

export default App;
