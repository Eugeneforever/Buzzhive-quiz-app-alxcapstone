import { Link } from "react-router"
import logo from '../assets/bee-icon.svg';

const Header = ({setScore}) => {
  return (
    <div className="">
        
        <Link to= '/' className="flex flex-row justify-center cursor-pointer gap-3  items-center mt-3 mx-6" onClick={() => setScore(0)}>
            <img src= {logo} alt="BuzzHive" className="h-20 w-20 animate-bounce" />
            <h1 className=" font-bold text-3xl uppercase"><span className="text-primaryYellow">Buzz</span><span className="text-primaryBlack">Hive</span></h1>
        </Link>
    </div>
  )
}

export default Header