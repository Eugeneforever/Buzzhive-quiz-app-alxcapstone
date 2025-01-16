import { Alert, Stack, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import QuestionCard from "../components/QuestionCard";

const QuizPage = ({ user, questions, setQuestions, score, setScore }) => {
	const [possibleAnswers, setPossibleAnswers] = useState();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	//create state for possible answers and current questions
	useEffect(() => {
		setPossibleAnswers(
			questions &&
				handleShuffle([
					questions[currentQuestion]?.correct_answer,
					...questions[currentQuestion]?.incorrect_answers,
				])
		);	
	}, [currentQuestion, questions]);

		const handleShuffle = (lists) => {

		console.log(lists); //checking if the list is shuffled in my console
		return lists.sort(() => Math.random() - 0.5);
	};

	return (
		<div>
			<div className=" ease-in duration-300 cursor-pointer"><Stack
				sx={{
					width: "100%",
					flexDirection: "column",
					display: "flex",
					alignItems: "center",
					justifyItems: "center",
					marginTop: "20px",
					marginX: "auto",
				}}
				spacing={2}>
				<Alert
					severity="success"
					style={{ boxShadow: "4px 4px 12px  grey", fontWeight: "semi-bold" }}>
					Welcome to the BuzzHive Quiz Game, {user}!
				</Alert>
			</Stack> </div>

			{questions ? (
				<>
					<div className="w-full flex justify-evenly  m-2 text-xs font-semibold">
						<span>{questions[currentQuestion].category}</span>
						<span>Score: {score}</span>
					</div>
					<QuestionCard
						currentQuestion={currentQuestion}
						setCurrentQuestion={setCurrentQuestion}
						questions={questions}
						possibleAnswers={possibleAnswers}
						correct={questions[currentQuestion]?.correct_answer}
						score={score}
						setScore={setScore}
						setQuestions={setQuestions}
					/>
				</>
			) : (
				<div style={{ display: "flex", justifyContent: "center" }}>
					<CircularProgress
						style={{ margin: 50, marginTop: "150px" }}
						size={200}
						thickness={5}
					/>
				</div>
			)}
		</div>
	);
};

export default QuizPage;
