import React, { useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import HomePage from './HomePage';
import ClientAppointments from './ClientAppointments';
import ClientSettings from './ClientSettings';
import ClientUpdates from './ClientUpdates';
import Cookies from 'universal-cookie';
const cookies=new Cookies();
function ClientDashBoard() {


  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('Home');
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const changeContent = (contentId) => {
    // setIsOpen(!isOpen);
    setActiveContent(contentId);
};
let mainContent;
if (activeContent === 'Home') {
    mainContent = <HomePage />;
}else if(activeContent=='Appointments'){
    mainContent=<ClientAppointments/>
}else if(activeContent=='updates'){
   mainContent=<ClientUpdates/>
}else if(activeContent=='Settings'){
  mainContent=<ClientSettings/>
}


return(
  
    <div className='width-[100vw] h-[100vh] flex justify-end bg-[#EA9937] min-h-[120vh]'>
      <div className="relative h-screen ">
        <button
          className="absolute top-0 left-0 m-4 focus:outline-none z-50"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <></>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <nav
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 overflow-y-auto transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
            <span className="text-xl font-semibold text-white capitalize"> welcome {cookies.get('name')} <button className='absolute z-[999]  left-[50vw] sm:left-[15vw]' onClick={toggleSidebar}> <FaArrowAltCircleLeft /></button></span>
          </div>
          <div className="px-4 py-6 text-white">
            <a href="#"onClick={() => changeContent('Home')} className="block py-2 text-decoration-none text-white uppercase fw-bold">home</a>
            <a href="#" onClick={() => changeContent('Appointments')} className="block py-2 text-decoration-none text-white uppercase fw-bold">Appointments</a>
            <a href="#" onClick={() => changeContent('updates')} className="block py-2 text-decoration-none text-white uppercase fw-bold">Updates</a>
            {/* <a href="#" onClick={() => changeContent('Settings')}className="block py-2 text-decoration-none text-white uppercase fw-bold">settings</a> */}

          </div>
        </nav>
      </div>
      <div className={`main ${isOpen?'w-[81.3vw]  ':'w-[100vw] '}  transition-all`}>
        {mainContent}
      </div>
     
    </div>




    
  )
}

export default ClientDashBoard
