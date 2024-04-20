import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';
import Cookies from 'universal-cookie';
const cookies=new Cookies();
const localizer = momentLocalizer(moment);

function CalendarPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/lawyerappointments?lawyerId='+cookies.get('id'), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    //body: JSON.stringify({lawyerId:cookies.get("id")}),
                });
                const data = await response.json();
                console.log(data.appointments);
                const transformedAppointments = data.appointments.map(appointment => ({
                    id: appointment._id,
                    title: appointment.type,
                    start: new Date(appointment.startTime),
                    end: new Date(appointment.endTime),
                }));
                setEvents(transformedAppointments);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className=' h-screen'>
            <Container fluid>
                <h2 className="mt-4 mb-4 align-content-center text-center text-white">Calendar View</h2>
                <div className="card ">
                    <div className="card-body rounded h-full">
                        <Calendar
                            localizer={localizer}
                            events={events}
                            views={['month', 'week', 'day']}
                            step={60}
                            showMultiDayTimes
                            defaultDate={new Date()}
                            style={{ height: 500 }}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CalendarPage;
