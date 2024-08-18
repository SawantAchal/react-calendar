import React from 'react';

const Modal = ({ isOpen, onClose, event }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                <p className="text-gray-700 mb-2"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-700 mb-4"><strong>Category:</strong> {event.category}</p>
                <p className="text-gray-700">{event.description || "No description available."}</p>
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
