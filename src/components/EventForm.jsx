// import React, { useContext, useEffect, useState } from 'react';
// import { EventContext } from '../context/EventContext';

// const EventForm = () => {
//     const { addEvent, editEvent, editingEvent, setEditingEvent } = useContext(EventContext);
//     const [form, setForm] = useState({ title: '', date: '', category: 'Work' });
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');
//     // Get today's date in YYYY-MM-DD format
//     const today = new Date().toISOString().split('T')[0];
//     useEffect(() => {
//         if (editingEvent) {
//             setForm(editingEvent);
//         } else {
//             setForm({ title: '', date: '', category: 'Work' });
//         }
//     }, [editingEvent]);

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!form.title || !form.date) {
//             setError('Please fill in all fields.');
//             return;
//         }
//         if (editingEvent) {
//             editEvent(form);
//             setMessage('Event updated successfully!');
//         } else {
//             addEvent(form);
//         }
//         setForm({ title: '', date: '', category: 'Work' });
//         setEditingEvent(null);
//         setError('');
//     };

//     return (
//         <>
//             <main className='flex justify-center items-center'>
//                 <div className="mb-6 p-4 bg-white shadow rounded">
//                     <h2 className="text-xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
//                     <form onSubmit={handleSubmit}>
//                         <input name="title" value={form.title} onChange={handleChange} placeholder="Event Title" required className="block w-full p-2 mb-4 border border-gray-300 rounded"/>
//                         <input name="date" type="date" value={form.date} min={today} onChange={handleChange} required className="block w-full p-2 mb-4 border border-gray-300 rounded"/>
//                         <select name="category" value={form.category} onChange={handleChange} required className="block w-full p-2 mb-4 border border-gray-300 rounded">
//                             <option value="Work">Work</option>
//                             <option value="Personal">Personal</option>
//                         </select>
//                         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{editingEvent ? 'Update' : 'Save'}</button>
//                         <button type="button" onClick={() => setEditingEvent(null)} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" >  Cancel</button>
//                     </form>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default EventForm;


// import React, { useContext, useEffect, useState } from 'react';
// import { EventContext } from '../context/EventContext';

// const EventForm = () => {
//     const { addEvent, editEvent, editingEvent, setEditingEvent } = useContext(EventContext);
//     const [form, setForm] = useState({ title: '', date: '', category: 'Work' });
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');
    
//     // Get today's date in YYYY-MM-DD format
//     const today = new Date().toISOString().split('T')[0];
    
//     useEffect(() => {
//         if (editingEvent) {
//             setForm(editingEvent);
//         } else {
//             setForm({ title: '', date: '', category: 'Work' });
//         }
//     }, [editingEvent]);

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!form.title || !form.date) {
//             setError('Please fill in all fields.');
//             return;
//         }
//         if (editingEvent) {
//             editEvent(form);
//             setMessage('Event updated successfully!');
//         } else {
//             addEvent(form);
//         }
//         setForm({ title: '', date: '', category: 'Work' });
//         setEditingEvent(null);
//         setError('');
//     };

//     return (
//         <>
//             <main className="flex justify-center items-center mt-6">
//                 <div className="mb-6 p-6 bg-white shadow-lg rounded-lg max-w-md w-full">
//                     <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             name="title"
//                             value={form.title}
//                             onChange={handleChange}
//                             placeholder="Event Title"
//                             required
//                             className="block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             name="date"
//                             type="date"
//                             value={form.date}
//                             min={today}
//                             onChange={handleChange}
//                             required
//                             className="block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <select
//                             name="category"
//                             value={form.category}
//                             onChange={handleChange}
//                             required
//                             className="block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="Work">Work</option>
//                             <option value="Personal">Personal</option>
//                         </select>
//                         <div className="flex justify-between">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
//                             >
//                                 {editingEvent ? 'Update' : 'Save'}
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={() => setEditingEvent(null)}
//                                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-200"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default EventForm;


import React, { useContext, useEffect, useState } from 'react';
import { EventContext } from '../context/EventContext';

const EventForm = () => {
    const { addEvent, editEvent, editingEvent, setEditingEvent } = useContext(EventContext);
    const [form, setForm] = useState({ title: '', date: '', category: 'Work', description: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        if (editingEvent) {
            setForm(editingEvent);
        } else {
            setForm({ title: '', date: '', category: 'Work', description: '' });
        }
    }, [editingEvent]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.date) {
            setError('Please fill in all fields.');
            return;
        }
        if (editingEvent) {
            editEvent(form);
            setMessage('Event updated successfully!');
        } else {
            addEvent(form);
        }
        setForm({ title: '', date: '', category: 'Work', description: '' });
        setEditingEvent(null);
        setError('');
    };

    return (
        <>
            <main className="flex justify-center items-center">
                <div className="mb-6 p-4 bg-white shadow rounded">
                    <h2 className="text-xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
                    <form onSubmit={handleSubmit}>
                        <input name="title" value={form.title} onChange={handleChange} placeholder="Event Title" required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
                        <input name="date" type="date" value={form.date} min={today} onChange={handleChange} required className="block w-full p-2 mb-4 border border-gray-300 rounded" />
                        <select name="category" value={form.category} onChange={handleChange} required className="block w-full p-2 mb-4 border border-gray-300 rounded">
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                        </select>
                        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Event Description" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{editingEvent ? 'Update' : 'Save'}</button>
                        <button type="button" onClick={() => setEditingEvent(null)} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                            Cancel
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default EventForm;
