import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function LawyerList({ result }) {
  console.log(result._id);

  return (
    <div>
      <Card className='my-3 border-none mx-lg-5 font-[sans] rounded bg-white shadow-2xl'>
        <Card.Body>
          <Card.Title className='fw-bold capitalize'>
            Name: {result.fullName}
          </Card.Title>

          <Card.Text>
            <span className='fw-bold capitalize'>
              Profession: {result.profession || 'N/A'}
            </span>
          </Card.Text>

          <Card.Text>
            <span className='fw-bold capitalize'>
              Contact: {result.contact || result.email}
            </span>
          </Card.Text>

          <Card.Text>
            <span className='fw-bold capitalize'>
              Location: {result.location || 'Unknown'}
            </span>
          </Card.Text>

          <div className="d-flex w-100 overflow-hidden">
            <Link to="/calendar" onClick={() => cookies.set('lid', result._id)}>
              <Button className='mx-2 my-2 self-center rounded-lg shadow-2xl'>
                <span>Availability</span>
              </Button>
            </Link>
            <Link to="/booking" onClick={() => cookies.set('lid', result._id)}>
              <Button className='mx-2 my-2 self-center rounded-lg shadow-2xl'>
                <span>Book</span>
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LawyerList;
