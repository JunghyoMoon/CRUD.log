import React from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		};
	}

	handleLogin = (e) => {
		e.preventDefault();
		const id = e.target[0].value;
		const pw = e.target[1].value;
		console.log(id, pw);
	};

	render() {
		return <LoginPresenter handleLogin={this.handleLogin} />;
	}
}

export default LoginContainer;
