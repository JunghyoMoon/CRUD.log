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

	handleSubmit = (event) => {
		event.preventDefault();
		console.log("just submitted");
		// fetch data by term
	};

	render() {
		return <SearchPresenter handleSubmit={this.handleSubmit} />;
	}
}

export default SearchContainer;
