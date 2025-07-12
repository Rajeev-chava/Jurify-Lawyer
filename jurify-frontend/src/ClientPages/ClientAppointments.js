import React from 'react';
import ClientUpcomingApp from '../Components/ClientUpcomingApp';

function ClientAppointments() {
  const appointments = [
    { title: 'Meeting with Client', clientName: 'Harish', contact: '9848632245' },
    { title: 'Discussion with Team', clientName: 'Alice', contact: '9876543210' },
    // Add more appointments as needed
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-2xl font-semibold mb-4">Upcoming Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <ClientUpcomingApp key={index} data={appointment} />
        ))}
      </div>
    </div>
  );
}

export default ClientAppointments;
