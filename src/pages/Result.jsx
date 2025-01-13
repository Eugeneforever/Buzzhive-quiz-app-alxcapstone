const Result = ({ score, user }) => {
	return (
		<div className="flex flex-col items-center gap-10 my-10 justify-center ">
			<h1 className="text-2xl font-semibold w-full flex flex-wrap justify-center ml-12 ">
				Good Effort, {user}
			</h1>
			<h2 className="text-2xl font-semibold">Your Score: {score}</h2>
		</div>
	);
};

export default Result;
