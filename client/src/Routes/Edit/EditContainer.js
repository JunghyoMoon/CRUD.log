import React from "react";
import EditPresenter from "./EditPresenter";
import { getArticle } from "../../api";

class EditContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null,
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
        } = this.props;
        try {
            const { data } = await getArticle(id);
            console.log(data);
        } catch (error) {
            this.setState({ error: "Cannot get this article's edit page." });
            console.log(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, error, data } = this.state;
        return <EditPresenter />;
    }
}

export default EditContainer;
