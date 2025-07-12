import React, { useState } from 'react';
import Updates from '../Components/Updates';

const dummyUpdates = [
  "Appointment scheduled for next week.",
  "Meeting rescheduled to 2:00 PM.",
  "Client requested additional information.",
  "Appointment canceled by client.",
];

const ClientUpdates = () => {
  const [updates, setUpdates] = useState(dummyUpdates);

  const removeUpdate = (index) => {
    const updatedList = [...updates];
    updatedList.splice(index, 1);
    setUpdates(updatedList);
  };

  return (
    <div className="w-full min-h-screen px-6 py-8 bg-gray-50">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Appointment Updates
      </h1>
      <Updates updates={updates} onRemoveUpdate={removeUpdate} />
    </div>
  );
};

export default ClientUpdates;
