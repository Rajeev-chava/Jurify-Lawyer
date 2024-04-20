

import AppReq from '../Components/AppReq';
import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

function AppReqPage() {
  // const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   // Fetch data from your Express API
  //   fetch('your-api-endpoint-for-appointments')
  //     .then((response) => response.json())
  //     .then((data) => setAppointments(data))
  //     .catch((error) => console.error('Error fetching appointments:', error));
  // }, []); // Empty dependency array ensures the effect runs once on mount
  const mockAppointments = [
    { appType:'will',
      clientName: 'John Doe',
      contact: '1234567890',
      requestedTime: '10:00 am',
    },
    { appType:'contract',
      clientName: 'Jane Doe',
      contact: '9876543210',
      requestedTime: '2:30 pm',
    },
    { appType:'contract',
    clientName: 'Jane Doe',
    contact: '9876543210',
    requestedTime: '2:30 pm',
  },
  { appType:'contract',
  clientName: 'Jane Doe',
  contact: '9876543210',
  requestedTime: '2:30 pm',
},
{ appType:'contract',
clientName: 'Jane Doe',
contact: '9876543210',
requestedTime: '2:30 pm',
},
 
  ];
  return (
    <div >
 
    <div className=''>
        {mockAppointments.map((appointment, index) => (
          <AppReq  key={index} appointmentData={appointment} />
        ))}
        </div>
   
   </div>
  )
}

export default AppReqPage
