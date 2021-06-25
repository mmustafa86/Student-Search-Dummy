import React, { useContext, useEffect, Fragment } from "react";
import { Card } from "react-bootstrap";
import Cards from "../layout/Card";
import StudentsContext from "../../context/studentsContext";

const Student = (props) => {
  const sudentsContext = useContext(StudentsContext);

  const { getStuents, students, searched } = sudentsContext;

  useEffect(() => {
    getStuents();
  }, []);

  return (
    <Fragment>
      {searched !== null
        ? searched.map((student) => <Cards student={student} />)
        : students.students !== undefined &&
          students.students.map((student) => <Cards student={student} />)}
    </Fragment>
  );
};

export default Student;
