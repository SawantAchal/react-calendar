# Event Management App

This is a simple React-based event management application that allows users to create, edit, delete, and filter events. The application also provides a calendar view to display all events.
Live : https://react-calendar-indol.vercel.app/

## Features

- **Add Events**: Create new events with a title, date, category (Work/Personal), and description.
- **Edit Events**: Update existing events with new details.
- **Delete Events**: Remove events that are no longer needed.
- **Filter Events**: Filter events by category (Work/Personal/All).
- **View Event Details**: Click on an event to view its details in a modal.

## Installation and Setup Instructions

1. **Clone the repository:**

   \`\`\`
   git clone https://github.com/SawantAchal/react-calendar.git
   \`\`\`

2. **Navigate to the project directory:**

   \`\`\`
   cd event-management-app
   \`\`\`

3. **Install dependencies:**

   \`\`\`
   npm install
   \`\`\`

4. **Start the development server:**

   \`\`\`
   npm start
   \`\`\`

5. **Open the app in your browser:**

   The application will be running on \`http://localhost:3000\`.

## Components

### 1. EventForm.js
This component is used to create and edit events. The form includes fields for the event title, date, category, and description. Depending on whether an event is being edited or a new one is being added, the submit button will display \"Update\" or \"Save.\"

### 2. Calendar.js
This component displays the list of events and allows users to filter them by category. Users can also delete events or click to edit them.

### 3. EventContext.js
This file contains the context for managing the global state of events. It provides methods to add, edit, delete, and retrieve events.

### 4. AppContent.js
This is the main component that ties everything together, rendering the \`EventForm\` and \`Calendar\` components and managing the event filter.

### 5. App.js
This file sets up the routes for the application, rendering \`AppContent\` as the main route.

## Future Improvements

- **Enhanced Calendar View**: Add a calendar view that displays events on specific dates.
- **Event Reminders**: Implement a feature to set reminders for upcoming events.
- **Event Sharing**: Allow users to share event details with others via email or social media.
