// main component of the frontend, organizes and renders the main components of the front end. 
import './App.css' 
import Sidebar from './components/Sidebar' // this means go to components folder and find the sidebar.tsx

function App() {
  return ( // what the App component will render on the screen 
    // the Sidebar is where the component for sidebar will be rendered 
    <div className="app">
      
      <Sidebar /> 
      <main className="main-content">
        <h1>Clarify</h1>
        <p>Your AI-powered study assistant.</p>
      </main>
    </div>
  )
}

export default App