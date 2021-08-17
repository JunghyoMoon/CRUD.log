import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            result: []
        }
    }

    render() {
        return <HomePresenter />
    }
}

export default HomeContainer;
