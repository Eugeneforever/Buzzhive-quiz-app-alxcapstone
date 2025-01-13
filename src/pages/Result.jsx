import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Result = ({ score, user, setScore }) => {
  const navigate = useNavigate()
	return (
		<div className="flex flex-col items-center gap-10 my-10 justify-center content-center ">
			<h1 className=" origin-top ease-in-out duration-300 text-2xl font-semibold flex flex-wrap text-center items-center justify-center content-center h-auto m-5 shadow-lg p-1 rounded-xl w-8/12 sm:w-5/12 ">
				Great effort, {user}!
			</h1>
			<button className=" origin-bottom-left animate-bounce duration-700 text-3xl shadow-md font-extrabold border text-primaryBlack  outline-none bg-primaryYellow from-yellow-500p-5 flex justify-center items-center mx-auto h-24 rounded-full  sm:max-w-sm sm:w-full sm:flex-sm:mx-0 sm:shrink-0 p-3 cursor-pointer ">Your Score: {score}</button>
      <Button variant="outlined" style={{cursor: 'pointer', fontWeight:'bolder', position:'absolute', bottom: '160px'}} onClick={() =>{ navigate("/"); setScore(0)}}>TAKE A NEW QUIZ</Button>
		</div>
	);
};

export default Result;
