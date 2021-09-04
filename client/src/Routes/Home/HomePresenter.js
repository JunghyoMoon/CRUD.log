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

const HomePresenter = ({ loading, articles }) =>
	loading ? (
		<Loading />
	) : (
		<Container>
			{articles.map((article, index) => (
				<Article
					key={index}
					title={article.title}
					img={article.img_url}
					desc={article.description}
					date={article.date}
					author={article.author}
					comments={article.comment.comment_count}
					views={article.views}
				/>
			))}
		</Container>
	);

export default HomePresenter;
