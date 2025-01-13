import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Result = ({ score, user }) => {
  const navigate = useNavigate()
	return (
		<div className="flex flex-col items-center gap-10 my-10 justify-center content-center ">
			<h1 className=" origin-top animate-bounce text-2xl font-semibold flex flex-wrap text-center items-center justify-center content-center h-auto m-5 shadow-lg p-1 rounded-xl w-8/12 sm:w-5/12 ">
				Great Effort, {user}
			</h1>
			<h2 className=" origin-bottom-left animate-pulse text-3xl shadow-md font-extrabold border text-primaryBlack  outline-none bg-primaryYellow from-yellow-500p-5 flex justify-center items-center mx-auto h-24 rounded-full  sm:max-w-sm sm:w-full sm:flex-sm:mx-0 sm:shrink-0 p-3 cursor-pointer touch-pan-down">Your Score: {score}</h2>
      <Button variant="outlined" style={{cursor: 'pointer', fontWeight:'bolder', position:'absolute', bottom: '160px'}} onClick={() => navigate("/")}>TAKE A NEW QUIZ</Button>
		</div>
	);
};

export default Result;
