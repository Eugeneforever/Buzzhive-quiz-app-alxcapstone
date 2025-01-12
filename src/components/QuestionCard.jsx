import { useState } from "react";
import "../components/QuestionStyle/QuestionCard.css";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
const QuestionCard = ({
	currentQuestion,
	setCurrentQuestion,
	questions,
	possibleAnswers,
	correct,
	score,
	setScore,
	setQuestions
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const handleSelect = (item) => {
    if (selected === item && selected === correct) return "select";
    else if (selected === item && selected !== correct) return "wrong";
    else if (item === correct) return "select";
  };

  const handleCheck = (item) => {
    setSelected(item);
    if (item === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currentQuestion > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrentQuestion(0);
    setQuestions();
  };
  
  return (
    <div className="question">
      <h1>Question {currentQuestion + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {possibleAnswers &&
            possibleAnswers.map((item) => (
              <button
                className={`singleOption  ${selected && handleSelect(item)}`}
                key={item}
                onClick={() => handleCheck(item)}
                disabled={selected}
              >
                {item}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currentQuestion > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;