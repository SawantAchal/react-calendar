// // import React, { useContext } from 'react';
// // import { EventContext } from '../context/EventContext';

// // const Calendar = ({ filter }) => {
// //     const { events, deleteEvent, setEditingEvent } = useContext(EventContext);

// //     const filteredEvents = filter === 'All'
// //         ? events
// //         : events.filter(event => event.category === filter);

// //     return (
// //         <div className="mt-4">
// //             <h2 className="text-xl font-bold mb-4">EVENTS : </h2>
// //             <ul>
// //                 {
// //                     filteredEvents.length > 0 ? (
// //                         filteredEvents.map((event) => (
// //                             <>
// //                             <main className='flex justify-center items-center'>
// //                             <li key={event.id} className="mb-2 p-4 border border-gray-300 rounded">
// //                                 <h3 className="text-lg font-semibold">{event.title}</h3>
// //                                 <p className="text-sm text-gray-600">{event.date}</p>
// //                                 <p className="text-sm text-gray-600">{event.category}</p>
// //                                 <div className="mt-2">
// //                                     <button onClick={() => setEditingEvent(event)} className="mr-2 text-blue-500">Edit</button>
// //                                     <button onClick={() => deleteEvent(event.id)} className="text-red-500">Delete</button>
// //                                 </div>
// //                             </li>
// //                             </main>

// //                             </>

// //                         ))
// //                     ) : (
// //                     <p>No events found.</p>
// //                 )}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default Calendar;


// import React, { useContext } from 'react';
// import { EventContext } from '../context/EventContext';

// const Calendar = ({ filter }) => {
//     const { events, deleteEvent, setEditingEvent } = useContext(EventContext);

//     const filteredEvents = filter === 'All'
//         ? events
//         : events.filter(event => event.category === filter);

//     return (
//         <div className="mt-8">
//             <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">EVENTS</h2>
//             <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
//                 {
//                     filteredEvents.length > 0 ? (
//                         filteredEvents.map((event) => (
//                             <li key={event.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//                                 <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
//                                 <p className="text-sm text-gray-600 mt-2">📅 {event.date}</p>
//                                 <p className="text-sm text-gray-600 mt-1">🏷️ {event.category}</p>
//                                 <div className="mt-4 flex justify-between">
//                                     <button onClick={() => setEditingEvent(event)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
//                                         Edit
//                                     </button>
//                                     <button onClick={() => deleteEvent(event.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
//                                         Delete
//                                     </button>
//                                 </div>
//                             </li>
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-500">No events found.</p>
//                     )
//                 }
//             </ul>
//         </div>
//     );
// };

// export default Calendar;
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
