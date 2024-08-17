import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import EventContextProvider, { EventProvider } from './context/EventContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EventContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EventContextProvider>
);
