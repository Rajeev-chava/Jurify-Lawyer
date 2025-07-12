import { Card, Button } from 'react-bootstrap';
import React from 'react';

// Use environment variable or fallback to localhost
const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function AppReq({ appointmentData }) {
  const { id, appType, clientName, contact, requestedTime } = appointmentData;

  const handleAccept = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/appointments/accept`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }) // use appointment ID here
      });
      const data = await res.json();
      alert("✅ Accepted: " + data.message);
    } catch (error) {
      console.error("Accept Error:", error);
      alert("❌ Failed to accept appointment.");
    }
  };

  const handleCancel = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/removeapp?appid=${id}`, {
        method: "GET"
      });
      const data = await res.json();
      alert("🚫 Cancelled: " + data.message);
    } catch (error) {
      console.error("Cancel Error:", error);
      alert("❌ Failed to cancel appointment.");
    }
  };

  return (
    <div className='w-full flex justify-center px-2'>
      <Card className='my-2 mx-[1vw] w-[80vw] font-[gilroy]'>
        <Card.Body>
          <Card.Title className='fw-bold uppercase'>App Type: {appType}</Card.Title>
          <Card.Text><span className='fw-bold'>Client Name: </span>{clientName}</Card.Text>
          <Card.Text><span className='fw-bold'>Contact: </span>{contact}</Card.Text>
          <Card.Text><span className='fw-bold'>Requested Time: </span>{requestedTime}</Card.Text>
          <div className='w-[80vw] flex shrink-0'>
            <Button className='mx-1' variant="success" onClick={handleAccept}>Accept</Button>
            <Button className='mx-1' variant="danger" onClick={handleCancel}>Cancel</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AppReq;
