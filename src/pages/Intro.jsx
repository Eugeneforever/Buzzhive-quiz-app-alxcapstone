import { useNavigate } from 'react-router'
import puzzled from '../assets/puzzled.svg'
import { Button } from '@mui/material'
import Footer from '../components/Footer'

const Intro = () => {
    const navigate = useNavigate()

  return (
    <>    <div className='flex justify-around flex-col items-center m-5 relative'>
        <img src={puzzled} alt="" className='px-3 mb-2' />
        <div className=' flex flex-wrap justify-center'><h1 className='w-full text-2xl font-medium  my-1 text-center p-6 '>Feeling confident? <br />Test your knowledge on BuzzHive's Trivia quizzes</h1></div>
        <Button onClick={() => navigate('/home')} variant="contained" size = 'medium' style={{ fontWeight:'bolder', cursor: 'pointer', position:'relative', bottom: '10px'}}>Get Started</Button>
    </div>
        <Footer />
    </>

  )
}

export default Intro