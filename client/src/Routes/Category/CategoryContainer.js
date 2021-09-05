import React, { useState, useEffect } from "react";
import CategoryPresenter from "./CategoryPresenter";
import { getCategory } from "../../api";

class CategoryContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			result: [],
		};
	}

	async componentDidMount() {
		const {
			location: { pathname },
		} = this.props;
		const categoryName = pathname.split("/")[1];
		try {
			const { data } = await getCategory(categoryName);
			this.setState({ result: data });
		} catch (error) {
			this.setState({ error: "Cannot get articles with this dategory." });
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { loading, result } = this.state;
		return <CategoryPresenter loading={loading} articles={result} />;
	}
}

export default CategoryContainer;
