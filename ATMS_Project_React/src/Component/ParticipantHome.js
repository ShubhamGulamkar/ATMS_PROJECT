import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ParticipantHome(){

  const [participant , setParticipant] = useState([]);
  useEffect(()=>{
    const userid = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(userid);
    fetch("http://localhost:8080/getParticipant?user_id="+userid.user_id)
    .then(resp=>resp.json())
    .then(obj=>{
      console.log(obj);
      localStorage.setItem("loggedParticipant",JSON.stringify(obj))
      setParticipant(obj);
    })
  },[]);

return (
    <div>
        <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
          <li class="nav-item">
              <Link to="viewevent" className='nav-link px-3'> View event&nbsp;&nbsp;&nbsp;&nbsp; </Link> 
            </li>
            <li class="nav-item">
              <Link to="bookevent" className='nav-link px-3'> Book Event&nbsp;&nbsp;&nbsp;&nbsp; </Link> 
            </li>
            <li class="nav-item">
              <Link to="searchevent" className='nav-link px-3'> Search Event&nbsp;&nbsp;&nbsp;&nbsp; </Link>

            </li>
            
            <li class="nav-item">
              <Link to="updateprofile" className='nav-link px-3'>Update Profile&nbsp;&nbsp;&nbsp;&nbsp; </Link>
            </li>
            <li class="nav-item">
              <Link to="viewbooking" className='nav-link px-3'>View Booking&nbsp;&nbsp;&nbsp;&nbsp; </Link>
            </li>
            <li class="nav-item">
              <Link to="/logout" className='nav-link px-3'> Logout&nbsp;&nbsp;&nbsp;&nbsp; </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    <h1>PARTICIPANT HOME</h1>
    <h3>WELCOME {participant.first_name}</h3>

    </div>
)

}