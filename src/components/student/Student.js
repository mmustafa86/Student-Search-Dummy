import React ,{useContext,useEffect}from 'react';
import StudentsContext from '../../context/studentsContext'


const Student = props => {

const sudentsContext =useContext(StudentsContext);

const {getStuents,students}=sudentsContext;

useEffect(() => {
    getStuents()
}, [])

console.log(students);


    return (
        <div>
           Student 
        </div>
    )
}



export default Student;
