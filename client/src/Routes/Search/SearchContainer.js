import React from "react";
import SearchPresenter from "./SearchPresenter";
import { searchByTitle } from "../../api";

class SearchContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			error: null,
			result: [],
		};
	}

	searchArticles = async (term) => {
		this.setState({ loading: true });
		try {
			const { data } = await searchByTitle(term);
			console.log(data);
			this.setState({ result: data });
		} catch (error) {
			this.setState({ error: "Cannot get articles with this term." });
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const term = e.target[0].value;
		this.searchArticles(term);
	};

	render() {
		const { loading, error, result } = this.state;
		return (
			<SearchPresenter
				loading={loading}
				error={error}
				articles={result}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default SearchContainer;
