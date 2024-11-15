# Features

1. To-Do List Management
   
Add tasks with details such as:

Due Date

Priority (High, Medium, Low)

Task Description

Responsible Person

Track task progress with "In Progress" and "Done" checkboxes.

Save and retrieve tasks using localStorage.

3. Mood Tracker
   
Select daily moods using icons (😊, 😐, 😢).

Persist mood selection in localStorage.

5. Dynamic Weather and Time Display
   
Displays the current date, time, and weather.

7. Notes Section
   
A resizable text area for general notes or thoughts.

9. Responsive Design
    
Optimized for desktop and mobile devices.

Technologies Used

Frontend

HTML

CSS (with custom styles)

JavaScript (DOM Manipulation, Event Listeners, and localStorage)

Backend

Node.js with Express.js

File Structure

csharp
Copy code
project/
├── public/
│   ├── styles.css  # Custom styles
│   ├── images/     # Background images (add your own)
├── index.html      # Main HTML file
├── server.js       # Backend server file
Setup and Installation
Prerequisites
Ensure you have the following installed:

Node.js
npm (Node Package Manager)
Steps
Clone the repository:
bash
Copy code
git clone <repository-url>
cd project
Install dependencies:
bash
Copy code
npm install
Run the server:
bash
Copy code
node server.js
Open your browser and navigate to:
arduino
Copy code
http://localhost:3001

# Deployment link:
https://asandan8106.github.io/Asanda-s-to-do-list/public

https://asanda-s-to-do-list.onrender.com

How to Use

Adding a Task

Fill in the "Due Date," "Priority," "Task," and "Who" fields in the form.

Click the Add Task button to save the task.

Managing Tasks

Mark tasks as "In Progress" or "Done" using the checkboxes.

Delete tasks using the Delete button.

Selecting Mood

Click on a mood icon (😊, 😐, 😢) to indicate your current mood.

The selected mood is highlighted and saved for future reference.

Notes
Use the Notes section to jot down any extra information.

The notes section is purely for writing and does not persist data.

Local Storage

What is Saved?

Tasks

Selected Mood

How it Works

Tasks and mood data are stored in localStorage and automatically loaded when the page is revisited.

Future Improvements:
Integrate a weather API for real-time weather updates.

Add authentication to allow users to save data across devices.

Include drag-and-drop task reordering.

# Contact
For questions or contributions, contact:

Name: Asanda Ngwenya

Email: Asanda.Ngwenya@capaciti.org.za





