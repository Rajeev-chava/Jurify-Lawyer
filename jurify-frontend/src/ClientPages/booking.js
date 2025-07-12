import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Booking() {
  const [formData, setFormData] = useState({
    appointmentType: '',
    startTime: '',
    dayofapp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: formData.appointmentType,
          lawyer: cookies.get('lid'),
          startTime: formData.startTime,
          dayofapp: formData.dayofapp,
        }),
      });
      const data = await response.json();
      alert(data.message);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex justify-center align-items-center'>
      <div className='min-h-[10vh] flex flex-col'>
        <h1 className="text-center semibold fs-1 w-[100%]">Add Appointments</h1>
        <div className="w-[50vw] min-h-[20vh] self-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Appointment Type</Form.Label>
              <Form.Select
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleChange}
              >
                <option value="">-----select----</option>
                <option value="will">Will</option>
                <option value="consultation">Consultation</option>
                <option value="court appearance">Court Appearance</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="dayofapp"
                value={formData.dayofapp}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="flex justify-center content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
