
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './LandingPages/LandingPage';
import Signup from './LandingPages/signup';
import CalendarPage from './LawyerPages/CalendarPage';
import LawyerHome from './LawyerPages/LawyerHome';
import ClientDashBoard from './ClientPages/ClientDashBoard';
import MiddleLogIn from './LandingPages/MiddleLogIn';
import LawyerSignUp from './LandingPages/LawyerSignUp';
// import LocomotiveScroll from 'locomotive-scroll';
import Booking from './ClientPages/booking';


function App() {
  
// const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
    <Routes>
    <Route exact path='/'  element={<LandingPage/>}/>
    <Route exact path='/signup'  element={<Signup/>}/>
    <Route exact path='/booking/'  element={<Booking/>}/>
    <Route exact path='/calendar'  element={<CalendarPage/>}/>
    <Route exact path='/lawyerhome'  element={<LawyerHome/>}/>
    <Route exact path='/client'  element={< ClientDashBoard/>}/>
    <Route exact path='/middle'  element={< MiddleLogIn/>}/>
    <Route exact path='/LawyerSignUp'  element={< LawyerSignUp/>}/>
    </Routes>
  </Router>
  );
}

export default App;
