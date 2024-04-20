import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';

function LawyerNav() {
  const navStyle = {
    backgroundColor:'#317874',
    color:'#F3EEED',
    
    
    // background: 'linear-gradient(to right, #FF5F6D, #FFC371)',
    // width:"100%",
    // overflow:"hidden"
  };

  return (
    <Navbar   expand='lg' style={navStyle}>
 
      <Navbar.Brand href="#" className='fs-3 fw-bold'  style={navStyle}>Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link  className='fs-5 fw-medium' style={navStyle} href="/">Home</Nav.Link>
          <Nav.Link href="/Calendar"  style={navStyle} className='fs-5 fw-medium px-3' >Schedule</Nav.Link>
          <Nav.Link href="/Profile" style={navStyle} className='fs-5 fw-medium px-3'>Profile</Nav.Link>
          <Nav.Link href="/AppReq"  style={navStyle} className='fs-5 fw-medium px-3'>special request</Nav.Link>
          <Nav.Link href="/AddAppointment" style={navStyle} className='fs-5 fw-medium px-3'>Add Appointment</Nav.Link>
          <Nav.Link href="/AppSettings"  style={navStyle} className='fs-5 fw-medium px-3'> settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
    </Navbar>
  );
}

export default LawyerNav;
