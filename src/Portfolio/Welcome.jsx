import './CSS/Welcome.css'
import { useNavigate } from 'react-router-dom'
const Welcome=()=>{
const navigate=useNavigate();
    const home=()=>{
        navigate("/home")
    }
    return(
        <>
        <div className="welcome">
         <div className="wel-containor">
            <img src="OIP.webp" alt="" />
            <button onClick={home}>-Visit Now-</button>
         </div>
        </div>
        </>
    )
}

export default Welcome