// main component of the frontend, organizes and renders the main components of the front end. 
import { useState } from 'react'
import './App.css' 
import Sidebar from './components/Sidebar' // this means go to components folder and find the sidebar.tsx

function App() {
   const [selectedCourse, setSelectedCourse] = useState<string | null>(null) // creates a variable called selected course
const [courses, setCourses] = useState<string[]>([])  // Stores all courses added by the user
  return ( // what the App component will render on the screen 
    // the Sidebar is where the component for sidebar will be rendered 
    <div className="app">
    
    <Sidebar
  courses={courses}
  onSelectCourse={setSelectedCourse}
/>
      <main className="main-content"> 
          {selectedCourse === null ? (
            // No course is selected so you will only see the homepage
        <div className="welcome">
          <h1> What do you need help learning today?</h1>
          <p> Ask questions based on any of your course materials</p>
        </div>
          ) : (
    // A course was selected so now you will see the page of that course 
  <div className="course-page">

  {/* Course heading */}
  <div className="course-header">
    <h1>{selectedCourse}</h1>
    <p>Ask questions about your {selectedCourse} course materials.</p>
  </div>

  {/* Course materials */}
  <div className="materials-section">

    <div className="materials-header">
      <h2>Course Materials</h2>
      <button className="upload-button">
        + Upload Material
      </button>
    </div>

    {/* Empty state */}
    <div className="materials-empty">
      <p>No materials uploaded yet.</p>
      <span>Upload your notes, slides, or PDFs to get started.</span>
    </div>

  </div>

</div>

  )}
        <div className="chat-input-container">
          <div className="chat-input">
            <button className="attach-button">+</button>

      <input
        type="text"
        placeholder="Ask Clarify..."
      />

      <button className="send-button">↑</button>

          </div>
        </div>
      </main>
    </div>
  )
}

export default App
