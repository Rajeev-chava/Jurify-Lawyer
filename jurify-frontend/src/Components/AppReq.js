import { Card,Button } from 'react-bootstrap';
import React from 'react'

function AppReq({ appointmentData }) {
  const { appType,clientName, contact, requestedTime } = appointmentData;
  return (
    <div className='w-full flex justify-center px-2'>
        <Card className='my-2 mx-[1vw]  w-[80vw] font-[gilroy]  '>
   
   <Card.Body  >
     <Card.Title className='fw-bold uppercase'>App Type: {appType}</Card.Title>
     <Card.Text>
      <span className='fw-bold'> client name:{clientName}</span>
     </Card.Text>
     <Card.Text>
     <span className='fw-bold'>contact:{contact}</span>
     </Card.Text>
     <Card.Text>
     <span className='fw-bold'>Requested Time:{requestedTime}</span>
     </Card.Text>
     <div className='w-[80vw] flex shrink-0'> 
      <Button  className='mx-1' variant="success">Accept  </Button>
     {/* <Button className='mx-1' variant="primary">Reschedule </Button> */}
     <Button className='mx-1' variant="danger ">cancel</Button></div>
    
   </Card.Body>
 </Card>
    </div>
  
  )
}

export default AppReq
