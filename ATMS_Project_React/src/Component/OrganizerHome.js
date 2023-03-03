import { Link } from "react-router-dom";
export default function OrganizerHome(){

return (
    <div>
        <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
          <li class="nav-item">
              <Link to="viewevent" className='nav-link px-3'>View event&nbsp;&nbsp;&nbsp;&nbsp; </Link> 
            </li>
            <li class="nav-item">
              <Link to="updateprofile" className='nav-link px-3'>Update Profile&nbsp;&nbsp;&nbsp;&nbsp; </Link> 
            </li>
            <li class="nav-item">
              <Link to="addevent" className='nav-link px-3'>Add Event&nbsp;&nbsp;&nbsp;&nbsp; </Link>

            </li>
            
            <li class="nav-item">
              <Link to="removeevent" className='nav-link px-3'>Remove Event&nbsp;&nbsp;&nbsp;&nbsp; </Link>
            </li>
            <li class="nav-item">
              <Link to="/logout" className='nav-link px-3'> Logout&nbsp;&nbsp;&nbsp;&nbsp; </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    <h1>Organizer Home</h1>

    </div>
)

}