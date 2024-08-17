import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';

const Calendar = ({ filter }) => {
    const { events, deleteEvent, setEditingEvent } = useContext(EventContext);

    const filteredEvents = filter === 'All'
        ? events
        : events.filter(event => event.category === filter);

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">Events</h2>
            <ul>
                {
                    filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <li key={event.id} className="mb-2 p-4 border border-gray-300 rounded">
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <p className="text-sm text-gray-600">{event.date}</p>
                                <p className="text-sm text-gray-600">{event.category}</p>
                                <div className="mt-2">
                                    <button onClick={() => setEditingEvent(event)} className="mr-2 text-blue-500">Edit</button>
                                    <button onClick={() => deleteEvent(event.id)} className="text-red-500">Delete</button>
                                </div>
                            </li>
                        ))
                    ) : (
                    <p>No events found.</p>
                )}
            </ul>
        </div>
    );
};

export default Calendar;
