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

  
function decodeHtmlEntities(text) {
	const p = new DOMParser();
	return p.parseFromString(text, "text/html").body.textContent;
}
// decode html entities with this function

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
  
  const QuestionX = decodeHtmlEntities(questions[currentQuestion].question);
  
  return (
    <div className="question-container">
      <h1>Question {currentQuestion + 1} :</h1>

      <div className="current-question">
        <h2>{QuestionX}</h2>
        <div className="possible-options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {possibleAnswers &&
            possibleAnswers.map((item) => (
              <button
                className={`single-Option  ${selected && handleSelect(item)}`}
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
            color="success"
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