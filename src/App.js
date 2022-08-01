import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./components/article";
import ArticleList from "./components/articleList";
import useGetRequest from "./components/useGetRequest";

function App() {
	const {
		data: articles,
		isLoading,
		errorMessage,
	} = useGetRequest("http://localhost:7000/articles/");

	return (
		<div className="App">
			<Router>
				<NavBar />
				<ArticleList articles={articles} />
			</Router>
		</div>
	);
}

export default App;
