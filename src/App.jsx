import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Result from "./pages/Result";
import Intro from "./pages/Intro";
import { useState } from "react";
import axios from "axios";
import NotFound from "./components/NotFound";

function App() {
	const [user, setUser] = useState("");
	const [questions, setQuestions] = useState();
	const [score, setScore] = useState(0);
	const baseUrl = `https://opentdb.com/api.php?amount=10&type=multiple`;

	const fetchQuestions = async (category = "", difficulty = "") => {
		try {
			const response = await axios.get(
			`${baseUrl}${category && `&category=${category}`}
			${difficulty && `&difficulty=${difficulty}`}`
		);
		console.log(response.data.results);
		setQuestions(response.data.results);
		return response.data.results;
		
	} catch (error) {
		console.log('There is an error fetching the questions from Trivia API ', error);
		return [];
	}
};

	return (
		<BrowserRouter>
			<div className="font-montserrat">
				<Header setScore={setScore} />

				<Routes>
					<Route path="/" element={<Intro />} />
					<Route
						path="/home"
						element={
							<Home
								user={user}
								setUser={setUser}
								fetchQuestions={fetchQuestions}
							/>
						}
					/>
					<Route
						path="/quiz"
						element={
							<QuizPage
								user={user}
								questions={questions}
								setQuestions={setQuestions}
								score={score}
								setScore={setScore}
							/>
						}
					/>
					<Route
						path="/result"
						element={<Result score={score} user={user} setScore={setScore} />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
