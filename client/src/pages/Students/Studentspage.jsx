import classes from "./Students.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Students = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = async () => {
        try {
            const response = await axios.get("http://localhost:8080/students");
            setStudents(response.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    const deleteStudent = async (studentId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/students?studentId=${studentId}`);
            const students = await axios.get('http://localhost:8080/students')
            setStudents(students.data)
            console.log(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.studentsBox}>
            {students.map(student => (
                <div key={student.studentId} className={classes.studentBox}>
                    <div>{student.name + " " + student.surname + ", age: " + student.age}</div>
                    <button className={classes.deleteButton} onClick={() => deleteStudent(student.studentId)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Students