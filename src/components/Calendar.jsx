import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import Modal from './Modal';

const Calendar = ({ filter }) => {
    const { events, deleteEvent, setEditingEvent } = useContext(EventContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filteredEvents = filter === 'All'
        ? events
        : events.filter(event => event.category === filter);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">EVENTS</h2>
            <ul className="flex flex-col gap-4">
                {
                    filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <li key={event.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 cursor-pointer" onClick={() => handleEventClick(event)}>
                                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">📅 {event.date}</p>
                                <p className="text-sm text-gray-600 mt-1">🏷️ {event.category}</p>
                                <div className="mt-4 flex justify-between">
                                    <button onClick={(e) => { e.stopPropagation(); setEditingEvent(event); }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                        Edit
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); deleteEvent(event.id); }} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No events found.</p>
                    )
                }
            </ul>
            <Modal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />
        </div>
    );
};

export default Calendar;
