import { useState } from "react";
import React  from 'react';
import { Card } from "react-bootstrap";

const AppointmentDuration = () => {
    
    return (
         <Card>
            <div className=" z-10  w-[100vw] md:w-[25vw] bg-gray-800 text-white p-4">
            <h2 className="text-lg font-semibold mb-4">Appointment Duration Settings</h2>
            <div className="space-y-4">
                <AppointmentTypeAdjustBar title="will" />
                <AppointmentTypeAdjustBar title="consultation" />
                <AppointmentTypeAdjustBar title="court " />
                <AppointmentTypeAdjustBar title="case review" />
                <AppointmentTypeAdjustBar title="Case status" />
            </div>
        </div>
         </Card>
        
    );
};

const AppointmentTypeAdjustBar = ({ title }) => {
    const [duration, setDuration] = useState(30);

    const handleDurationChange = (e) => {
        setDuration(parseInt(e.target.value));
    };

    return (
        <div className=" border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="flex items-center space-x-2">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">{duration} mins</span>
            </div>
            <input
                type="range"
                min="15"
                max="60"
                step="1"
                value={duration}
                onChange={handleDurationChange}
                className="w-full mt-2 md:mt-0 md:w-48 lg:w-64"
            />
        </div>
    );
};

export default AppointmentDuration;
