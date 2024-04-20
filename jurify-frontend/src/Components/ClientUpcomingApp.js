import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ClientUpcomingApp({ data }) {
    const { title, clientName, contact } = data;
  return (
    <div className='upcomingcard rounded-full shadow-xl pt-3'>
    <Card className=' pt-3'>
      <Card.Body className='' >
        <Card.Title className='fw-bold'>{title}</Card.Title>
        <Card.Text>
          <span className='fw-bold'>Lawyer name: {clientName}</span>
        </Card.Text>
        <Card.Text>
          <span className='fw-bold'>Contact: {contact}</span>
        </Card.Text>
          <div className='flex gap-2'>
          <Button className='  d-md-inline-block'>
          <span>Lawyer Profile</span>
        </Button>
        <Button className=' d-md-inline-block'>
          <span>Reschedule</span>
        </Button>
        <Button className='  d-md-inline-block'>
          <span>Cancel</span>
        </Button>
          </div>
        
      </Card.Body>
    </Card>
  </div>
  )
}

export default ClientUpcomingApp
