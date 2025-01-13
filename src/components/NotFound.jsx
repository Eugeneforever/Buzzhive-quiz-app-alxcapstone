import { Button } from "@mui/material"
import { useNavigate } from "react-router"


const NotFound = () => {
    const navigate = useNavigate()
  return (
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', minHeight:'70vh', border: '1px solid grey', marginTop: '30px'}}>
       <h1 className="my-2 text-2xl"> 404 | Page not found </h1>
       <p className="text-center my-5">You are seeing this error because an error occurred or the page you are trying to access does not exist. Please click on the button below :)</p>
       <Button variant="contained" color="error" onClick={() => navigate("/")} style={{marginTop: '30px'}}>Go back to Homepage</Button>
    </div>
  )
}

export default NotFound