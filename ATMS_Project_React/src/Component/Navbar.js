import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route, Routes } from 'react-router-dom';
import LoginFrom from './LoginForm';
import Logoutcomp from './Logoutcomp';

import OrganizerHome from './OrganizerHome';
import AdminHome from './AdminHome';
import ParticipantHome from './ParticipantHome';
import ParticipantReg from './ParticipantReg';
import OrganizerReg from './OrganizerReg';
import { useSelector } from 'react-redux';

function Navbar1() {

  const mystate = useSelector((state)=>state.logged);
    return (
    <div>
      
        <div style={{display: mystate.loggedIn?"none":"block"}}>
        <Navbar bg="info" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Adventure World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link className='nav-link' to="home">Home</Link> */}
            <Link className='nav-link' to="login" >Login</Link>
            <Nav>
            { <NavDropdown className="justify-content-end" title="Register" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link className='nav-link' to="part_reg" >Participant</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1"><Link className='nav-link' to="org_reg" >Organizer</Link></NavDropdown.Item>
              
              
            </NavDropdown>}
            </Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

      <Routes>
        <Route path="login" element={<LoginFrom/>} />
        
        <Route path="participant_home" element={<ParticipantHome/>} />
                <Route path="admin_home" element={<AdminHome/>} />
                
                <Route path="organizer_home" element={<OrganizerHome/>} />
                <Route path="/logout" element={<Logoutcomp/>} />
                <Route path="part_reg" element={<ParticipantReg/>} />
                <Route path="org_reg" element={<OrganizerReg/>} />
      </Routes>
    </div>
    )

}
export default Navbar1;