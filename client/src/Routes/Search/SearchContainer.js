import React from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			error: null,
			result: [],
		};
	}

	handleSubmit = () => {
		console.log("just submitted");
	};

	render() {
		return <SearchPresenter handleSubmit={this.handleSubmit} />;
	}
}

export default SearchContainer;
