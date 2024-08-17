import React, { createContext, useState } from 'react';

export const EventContext = createContext();

const EventContextProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);

    const addEvent = (event) => {
        setEvents([...events, { ...event, id: Date.now().toString() }]);
    };

    const editEvent = (updatedEvent) => {
        setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
    };

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    const contextValue = {
        events, addEvent, editEvent, deleteEvent, editingEvent, setEditingEvent
    }

    return (
        <EventContext.Provider value={contextValue}>
            {children}
        </EventContext.Provider>
    );
};

export default EventContextProvider;
