// Defines what information the Sidebar component receives from App.tsx
type SidebarProps = {
  courses: string[]
  onSelectCourse: (course: string) => void
}

function Sidebar({ courses, onSelectCourse }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h1>Clarify</h1>

      <button>+ New Chat</button>

      <h3>My Courses</h3>

{courses.length === 0 ? (
  <p>No courses yet</p>
) : (
  courses.map((course) => (
    <p
      key={course}
      onClick={() => onSelectCourse(course)}
    >
      {course}
    </p>
  ))
)}
      <button>+ Add Course</button>
    </aside>
  )
}

export default Sidebar