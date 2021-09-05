import React from "react";
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

	async getArticlesByCategory(categoryName) {
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

	componentDidMount() {
		const {
			match: {
				params: { categoryName },
			},
		} = this.props;
		this.getArticlesByCategory(categoryName);
	}

	componentDidUpdate(prevProps) {
		const {
			match: {
				params: { categoryName },
			},
		} = this.props;
		if (prevProps.match.params.categoryName !== categoryName) {
			this.getArticlesByCategory(categoryName);
		}
	}

	render() {
		const { loading, result } = this.state;
		return <CategoryPresenter loading={loading} articles={result} />;
	}
}

export default CategoryContainer;
