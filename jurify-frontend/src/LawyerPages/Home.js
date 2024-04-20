import React, { useEffect, useState } from 'react';
import UpcomingApp from '../Components/UpcomingApp';
import Cookies from 'universal-cookie';
const cookies=new Cookies();

const Home= () => {
    const [appointments, setAppointments] = useState([
        {
            "_id": "65d5b5216a01d38e4f5f77c1",
            "type": "will appointment",
            "lawyer": "65d5b5086a01d38e4f5f77b4",
            "startTime": "2024-02-21T08:35:00.000Z",
            "endTime": "2024-02-21T09:35:00.000Z",
            "dayofapp": "2024-02-21T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "65d5b53abf53703d0c9c1476",
            "type": "will appointment",
            "lawyer": "65d5b5086a01d38e4f5f77b4",
            "startTime": "2024-02-21T08:35:00.000Z",
            "endTime": "2024-02-21T09:35:00.000Z",
            "dayofapp": "2024-02-21T00:00:00.000Z",
            "__v": 0
        },
        // Add more appointments as needed
    ]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/lawyerappointments?lawyerId='+cookies.get('id'), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    //body: JSON.stringify({lawyerId:cookies.get("id")}),
                });
                const data = await response.json();
                // console.log(data);
                // console.log(cookies.get('id'));
                setAppointments(data.appointments);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className='text-center text-white font-bold'>Upcoming Appointments</h2>
            <div className='pt-5'>
                {appointments.map((appointment, index) => (
                    <UpcomingApp key={index} data={appointment} />
                ))}
            </div>
        </div>
    );
};

export default Home;
