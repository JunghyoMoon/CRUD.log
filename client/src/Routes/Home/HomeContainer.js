import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { getArticles } from "../../api";

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			result: [],
		};
	}

	async componentDidMount() {
		try {
			const { data } = await getArticles();
			this.setState({ result: data });
		} catch (error) {
			this.setState({ error: "Cannot get articles." });
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { loading, result } = this.state;
		return <HomePresenter loading={loading} articles={result} />;
	}
}

export default HomeContainer;
