import React from "react";
import DetailsPresenter from "./DetailsPresenter";
import { getArticle } from "../../api";

class DetailsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: null,
			comments: [],
		};
	}

	async componentDidMount() {
		try {
			const {
				match: {
					params: { id },
				},
			} = this.props;
			const { data } = await getArticle(id);
			this.setState({ data });
		} catch (error) {
			this.setState({ error: "Cannot get this article." });
			console.log(error);
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { loading, data, comments } = this.state;
		return (
			<DetailsPresenter loading={loading} data={data} comments={comments} />
		);
	}
}

export default DetailsContainer;
