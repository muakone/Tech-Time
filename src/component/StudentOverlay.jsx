import { Student1, Student2, Student3, Student4, Student5 } from "../assets"

const StudentOverlay = () => {
  return (
    <div className="student-overlay">
        <img src={Student1} alt="student1" className="student-1" />
        <img src={Student2} alt="student2" className="student-2" />
        <img src={Student3} alt="student3" className="student-3" />
        <img src={Student4} alt="student4" className="student-4" />
        <img src={Student5} alt="student5" className="student-5" />
    </div>
  )
}

export default StudentOverlay;