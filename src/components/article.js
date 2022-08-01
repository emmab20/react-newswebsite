import React, { useState } from "react";
import useGetRequest from "./useGetRequest";

const Article = ({ id }) => {
	// const [topic, setTopic] = useState("sports");
	// const [headline, setHeadline] = useState("Lorem ipsum dolor sit amet.");
	// const [subtext, setSubtext] = useState(
	// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi, eget consectetur nisi nisi velit."
	// );

	const {
		data: article,
		isLoading,
		errorMessage,
	} = useGetRequest("http://localhost:7000/articles/" + id);

	return (
		<article>
			<img src={article.image} alt="" />
			<span className={`topic ${article.topic}`}>{article.topic}</span>
			<h3>
				<a href="">{article.headline}</a>
			</h3>
			<p>{article.subtext}</p>
		</article>
	);
};

export default Article;
