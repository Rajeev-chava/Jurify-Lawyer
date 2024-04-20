import React from 'react';
import Button from 'react-bootstrap/Button';

import { ImProfile } from "react-icons/im";
function UpcomingApp({ data }) {
  // console.log(data);
  const deleteHandler = async () => {
    try {
      console.log(data._id);
      const response = await fetch('http://localhost:5000/api/removeapp?appid='+data._id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data1=await response.json();
      console.log(data1);
      if (data1.message) {
        // Handle successful deletion
      } else {
        throw new Error('Failed to delete appointment');
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const profileHandler = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/profile/${data.client}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const profileData = await response.json();
        // Handle successful retrieval of profile data
        console.log('Profile data:', profileData);
      } else {
        throw new Error('Failed to fetch profile data');
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const rescheduleHandler = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/reschedule/${data._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newDate: '2024-02-28' }), // Example new date
      });
      if (response.ok) {
        // Handle successful rescheduling
      } else {
        throw new Error('Failed to reschedule appointment');
      }
    } catch (error) {
      console.error('Error rescheduling appointment:', error);
    }
  };

  return (

    <div className='upcomingcard rounded-full shadow-xl mx-4 w-auto'>
      <div className='mb-3  '>
        <div className='bg-[#313131] capitalize font-mono leading-10	fs-5  text-white py-3 rounded-[2vw] px-5' >
          {/* <Card.Title className='fw-bold'>{title}</Card.Title> */}
          <div>
            <span className='fw-bold '>Appointment Type: {data.type}</span>
          </div>
          <div>
            <span className='fw-bold'>start time: {data.startTime}</span>
          </div>
          <div>
            {/* <span className='fw-bold'>end time: {data.endTime}</span> */}
          </div>
          <div>
            <span className='fw-bold'>date: {data.dayofapp}</span>
          </div>
          <div className='flex gap-2'>
            <Button className='bg-success' onClick={profileHandler}>
            <span> <ImProfile /> Profile</span>
          </Button>
          <Button className=' bg-secondary' onClick={rescheduleHandler}>
            <span>Reschedule</span>
          </Button>
          <Button className='bg-danger' onClick={deleteHandler}>
            <span>Cancel</span>
          </Button>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default UpcomingApp;
