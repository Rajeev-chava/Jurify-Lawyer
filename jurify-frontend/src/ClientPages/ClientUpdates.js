import React, { useState } from 'react';

import Updates from '../Components/Updates';

const dummyUpdates = [
  "Appointment scheduled for next week.",
  "Meeting rescheduled to 2:00 PM.",
  "Client requested additional information.",
  "Appointment canceled by client."
];

const ClientUpdates = () => {
  const [updates, setUpdates] = useState(dummyUpdates);

  const removeUpdate = (index) => {
    const updatedUpdates = [...updates];
    updatedUpdates.splice(index, 1);
    setUpdates(updatedUpdates);
  };

  return (
    <div className='px-5 py-3 w-full h-screen'>
     <h1 className='text-center'>Appointment Updates</h1>
      <Updates updates={updates} onRemoveUpdate={removeUpdate} />
    </div>
      
   
  );
};

export default ClientUpdates;
