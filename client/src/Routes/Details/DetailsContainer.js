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
            // todo: get comments.. by id?
            this.setState({ data });
        } catch (error) {
            this.setState({ error: "Cannot get this article." });
            console.log(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    handleEditBtn = () => {
        const { history } = this.props;
        const { data } = this.state;
        history.push(`/edit/${data.id}`);
    };

    handleDeleteBtn = () => {
        console.log("Ask user 'are you sure?'");
        const { history } = this.props;
        console.log(history);
    };

    render() {
        const { loading, data, comments } = this.state;
        return (
            <DetailsPresenter
                loading={loading}
                data={data}
                comments={comments}
                handleEditBtn={this.handleEditBtn}
                handleDeleteBtn={this.handleDeleteBtn}
            />
        );
    }
}

export default DetailsContainer;
