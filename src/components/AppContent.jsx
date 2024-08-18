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
            <hr className="h-1 bg-gray-300 my-6" />
            <main className="flex justify-center">
                <div className="max-w-lg w-full">
                    <div className="mb-6 flex items-center justify-between">
                        <label className="text-lg font-medium text-gray-800">Filter Events:</label>
                        <select value={filter} onChange={handleFilterChange} className="w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"   b >
                            <option value="All">All</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                        </select>
                    </div>
                    <Calendar filter={filter} />
                </div>
            </main>
        </div>
    );
};

export default AppContent;

