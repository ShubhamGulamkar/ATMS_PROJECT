import { Link } from "react-router-dom";
function AdminHome(){
    return(
        <div>
        <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
          <li class="nav-item">
              <Link to="/" className='nav-link px-3'> View event&nbsp;&nbsp;&nbsp;&nbsp; </Link> 
            </li>
            <li class="nav-item">
              <Link to="Addactivity" className='nav-link px-3'> Add Activity&nbsp;&nbsp;&nbsp;&nbsp; </Link> 
            </li>
            <li class="nav-item">
              <Link to="RemoveActivity" className='nav-link px-3'> Remove Activity&nbsp;&nbsp;&nbsp;&nbsp; </Link>

            </li>
            
            <li class="nav-item">
              <Link to="Athorize_organizer" className='nav-link px-3'> Athorize organizer&nbsp;&nbsp;&nbsp;&nbsp; </Link>
            </li>
            <li class="nav-item">
              <Link to="/logout" className='nav-link px-3'> Logout&nbsp;&nbsp;&nbsp;&nbsp; </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    <h1>Admin Home</h1>

    </div>
    )
}
export default AdminHome;