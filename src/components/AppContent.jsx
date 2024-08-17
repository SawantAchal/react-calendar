import React, { useState } from 'react';
import EventForm from './EventForm';
import Calendar from './Calendar';

const AppContent = () => {
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="container mx-auto p-4">
            <EventForm />
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Filter Events:</label>
                <select value={filter} onChange={handleFilterChange} className="block w-full p-2 border border-gray-300 rounded">
                    <option value="All">All</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
            <Calendar filter={filter} />
        </div>
    );
};

export default AppContent;
