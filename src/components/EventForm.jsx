// import React, { useContext, useEffect, useState } from 'react';
// import { EventContext } from '../context/EventContext';

// const EventForm = () => {
//     const { addEvent, editEvent, editingEvent, setEditingEvent } = useContext(EventContext);
//     const [form, setForm] = useState({ title: '', date: '', category: 'Work' });
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');

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
//         <div className="mb-6 p-4 bg-white shadow rounded">
//             <h2 className="text-xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <input name="title" value={form.title} onChange={handleChange} placeholder="Event Title" required className="block w-full p-2 mb-4 border border-gray-300 rounded"/>
//                 <input name="date" type="date" value={form.date} onChange={handleChange} required className="block w-full p-2 mb-4 border border-gray-300 rounded"/>
//                 <select name="category" value={form.category} onChange={handleChange} required className="block w-full p-2 mb-4 border border-gray-300 rounded">
//                     <option value="Work">Work</option>
//                     <option value="Personal">Personal</option>
//                 </select>
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Save</button>
//                 <button type="button" onClick={() => setEditingEvent(null)} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" >  Cancel</button>
//             </form>
//         </div>
//     );
// };

// export default EventForm;


import React, { useContext, useEffect, useState } from 'react';
import { EventContext } from '../context/EventContext';

const EventForm = () => {
    const { addEvent, editEvent, editingEvent, setEditingEvent } = useContext(EventContext);
    const [form, setForm] = useState({ title: '', date: '', category: 'Work' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    useEffect(() => {
        if (editingEvent) {
            setForm(editingEvent);
        } else {
            setForm({ title: '', date: '', category: 'Work' });
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
        setForm({ title: '', date: '', category: 'Work' });
        setEditingEvent(null);
        setError('');
    };

    return (
        <div className="mb-6 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" value={form.title} onChange={handleChange} placeholder="Event Title" required className="block w-full p-2 mb-4 border border-gray-300 rounded"/>
                <input name="date" type="date" value={form.date} min={today} onChange={handleChange} required className="block w-full p-2 mb-4 border border-gray-300 rounded"/>
                <select name="category" value={form.category} onChange={handleChange} required className="block w-full p-2 mb-4 border border-gray-300 rounded">
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{editingEvent ? 'Update' : 'Save'}</button>
                <button type="button" onClick={() => setEditingEvent(null)} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" >  Cancel</button>
            </form>
        </div>
    );
};

export default EventForm;
