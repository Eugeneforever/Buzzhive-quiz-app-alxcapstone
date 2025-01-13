import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Result from "./pages/Result";
import Intro from "./pages/Intro";
import { useState } from "react";
import axios from "axios";

function App() {
	const [user, setUser] = useState("");
	const [questions, setQuestions] = useState();
	const [score, setScore] = useState(0);

	const fetchQuestions = async (category = "", difficulty = "") => {
		const { data } = await axios.get(
			`https://opentdb.com/api.php?amount=10${
				category && `&category=${category}`
			}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
		);
		setQuestions(data.results);
	};

	return (
		<BrowserRouter>
			<div className="font-montserrat">
				<Header />

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
						element={<Result score={score} user={user} />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
