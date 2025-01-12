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
			<Button
				variant="contained"
				style={{ width: "80%", padding: "5px" }}
				onClick={handleSubmit}>
				START QUIZ
			</Button>
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
