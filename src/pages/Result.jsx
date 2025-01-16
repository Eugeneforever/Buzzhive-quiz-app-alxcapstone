import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Result = ({ score, user, setScore }) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col mt-10 items-center justify-items-center  justify-between  content-center place-content-center ">
			<h1 className="ease-in-out duration-300 text-2xl font-semibold flex flex-wrap text-center justify-center content-center h-auto my-10 shadow-lg p-1 rounded-xl w-8/12 sm:w-5/12 min-h-[70px]">
				Great effort, {user}!
			</h1>
			<div className="flex flex-col items-center ">
				<button className="my-16 origin-bottom-left animate-bounce duration-700 text-3xl shadow-md font-extrabold border text-primaryBlack  outline-none bg-primaryYellow from-yellow-500p-5 flex justify-center items-center mx-auto h-24 rounded-full  sm:max-w-sm sm:w-full sm:flex-sm:mx-0 sm:shrink-0 p-3 cursor-pointer ">
					Your Score: {score}
				</button>
				{user && (
					<div className="flex flex-col  font-semibold text-primaryBlack">
						<p className="flex flex-col items-center text-center my-6">
							<span className="text-teal-700 text-lg">Quiz taken on:</span> {Date()}
						</p>
					</div>
				)}
				<div className="flex flex-col items-center ease-in-out duration-300 my-16">
					<Button
						size="large"
						variant="contained"
						color="error"
						style={{ cursor: "pointer" }}
						onClick={() => {
							navigate("/");
							setScore(0);
						}}>
						TAKE A NEW QUIZ
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Result;
