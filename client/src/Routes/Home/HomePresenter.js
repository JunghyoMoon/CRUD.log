import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Article from "../../Components/Article";

const Container = styled.div`
	width: 98%;
	padding-top: 90px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-template-rows: auto;
	grid-gap: 20px;
`;

const backgroundArray = [
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iahbYjphVbjSQaWHFCTOlgHaDj%26pid%3DApi&f=1",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EntHChgUyirgbZ9A3zTxkAHaFj%26pid%3DApi&f=1",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3of4QJ65oynrDrNpgHYXTgHaD4%26pid%3DApi&f=1",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.p4PedUSIPTyRyztLE0wvAwHaEo%26pid%3DApi&f=1",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-UxRkS1XKkPRaBTG5aGVSAHaHa%26pid%3DApi&f=1",
];

const HomePresenter = () => (
	<Container>
		{backgroundArray.map((bg) => {
			console.log(bg);
			return <Article img={bg} />;
		})}
	</Container>
);

export default HomePresenter;
