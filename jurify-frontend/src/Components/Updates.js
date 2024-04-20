import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Updates = ({ updates, onRemoveUpdate }) => {
  return (
    <div>
     
      <div className="row">
        {updates.map((update, index) => (
          <div key={index} className="col-md-6">
            <Card className='rounded-full bg-white shadow-2xl mt-2'>
              <Card.Body>
                <Card.Title>Update {index + 1}</Card.Title>
                <Card.Text>{update}</Card.Text>
                <Button variant="danger" onClick={() => onRemoveUpdate(index)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
