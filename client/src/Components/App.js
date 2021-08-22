import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./Router";
import palette from "../palette";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
        position: relative;
        margin: 0px;
        padding: 0px;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 12px;
        width: 100vw;
        background-color: ${palette.mainBg};
        color: ${palette.white};
    }
`;

const App = () => (
	<Fragment>
		<GlobalStyle />
		<Router />
	</Fragment>
);

export default App;
