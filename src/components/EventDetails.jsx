import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { events } = useContext(EventContext)
    const event = events.find(e => e.id === id);

    if (!event) return <div>Event not found</div>;

    return (
        <div className="mb-6 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4">Event Details</h2>
            <p className="text-lg font-semibold">{event.title}</p>
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="text-sm text-gray-600">{event.category}</p>
            <button onClick={() => navigate('/')} className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"> Back </button>
        </div>
    );
};

export default EventDetails;
