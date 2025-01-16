import { MenuItem, TextField, Button, Stack, Alert } from "@mui/material";
import Categories from "../../data/Categories";
import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

const Home = ({ user, setUser, fetchQuestions }) => {
	const [category, setCategory] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [error, setError] = useState(false);

	const navigation = useNavigate(); 
	//use navigation hook to navigate to /quiz route at the click of a button

	const handleSubmit = () => {
		if (!user || !category || !difficulty) {
			setError(true);
			return;
		} else {
			setError(false);
			fetchQuestions(category, difficulty);
			navigation("/quiz");
		}
	};
	
	//create handleSubmit function that sets error to true when the user leaves a field empty or fetch questions when the user fills all fields
	// const cates = Categories.trivia_categories.name
	return (
	<>
		<div className="flex flex-col flex-wrap items-center p-3 w-full  justify-center mt-9 ">
			<TextField
				label="Enter your name"
				variant="outlined"
				style={{ margin: 30, width: "80%", padding: "5px" }}
				onChange={(e) => setUser(e.target.value)}
				// value={user}
			/>
			{/* create a text field for the user to enter their name and capture store value in a user state */}
			
			<TextField
				select
				label="Select Category"
				variant="outlined"
				onChange={(e) => setCategory(e.target.value)}
				value={category}
				style={{ marginBottom: 30, width: "80%", padding: "5px" }}>
				{Categories.trivia_categories.map((cat) => (
					<MenuItem key={cat.name} value={cat.id}>
						{cat.name}
					</MenuItem>
				))}
			</TextField>
			{/* create a text field for the user to select a category and capture the value in a category state. Map categories to display it in a dropdown */}
			
			<TextField
				select
				label="Select Difficulty"
				variant="outlined"
				onChange={(e) => setDifficulty(e.target.value)}
				value={difficulty}
				style={{ marginBottom: 30, width: "80%", padding: "5px" }}>
				<MenuItem key="Easy" value="easy">
					Easy
				</MenuItem>
				<MenuItem key="Medium" value="medium">
					Medium
				</MenuItem>
				<MenuItem key="Hard" value="hard">
					Hard
				</MenuItem>
			</TextField>
			{/* create a text field for the user to select a difficulty and capture the value in a difficulty state */}
			
			<Button
				variant="contained"
				style={{ width: "80%", padding: "5px" }}
				onClick={handleSubmit}>
				START QUIZ
			</Button>
			{/* create a button that calls the handleSubmit function when clicked and displays an alert if the user leaves a field empty */}
			
			{error && (
				<Stack sx={{ width: "80%", marginTop: "20px" }} spacing={2}>
					<Alert severity="warning">Empty fields needs to be filled in!</Alert>
				</Stack>
			)}
		</div>
	<Footer />
	</>
	);
};

export default Home;
