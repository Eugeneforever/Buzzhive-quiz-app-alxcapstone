import { useNavigate } from 'react-router'
import puzzled from '../assets/puzzled.svg'
import { Button } from '@mui/material'
import Footer from '../components/Footer'


const Intro = () => {
    const navigate = useNavigate() 
    //store a navigation hook in a variable to route to the home page

  return (
    <>    
      <div className='flex justify-around flex-col items-center m-5 relative'>
        <img src={puzzled} alt="" className='px-3 mb-2 sm:w-[55%] md-:w-[53%] md:w-[51%] md+:w-[40%] lg:w-[35%] lg+:w-[32%]' />
        <div className=' flex flex-wrap justify-center'><h1 className='w-full text-2xl font-medium  my-1 text-center p-6 '>Feeling confident? <br />Test your knowledge on BuzzHive's Trivia quizzes</h1></div>
        <div className='absolute -bottom-[1.9rem] sm:-bottom-[3rem] beforesm:-bottom-[3.5rem] cursor-pointer' ><Button onClick={() => navigate('/home')} variant="contained" size = 'large' style={{ fontWeight:'bolder'}}>Get Started</Button></div>
      </div>
      
      {/* Create button, welcome text and image on the home page */}
      <Footer />
    </>
  )
}

export default Intro