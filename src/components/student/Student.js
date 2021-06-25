import React, { useContext, useEffect, Fragment } from "react";
import { Card } from "react-bootstrap";
import StudentsContext from "../../context/studentsContext";

const Student = (props) => {
  const sudentsContext = useContext(StudentsContext);

  const { getStuents, students, searched } = sudentsContext;

  useEffect(() => {
    getStuents();
  }, []);

  const average = (array) => {
    let sum = array.reduce((a, b) => a + b);
    let avg = sum / array.length;
    return avg;
  };

  return (
    <Fragment>
      {searched !== null
        ? searched.map((student) => (
            <Card style={{ width: "18rem" }} key={student.id}>
              <Card.Img
                variant="top"
                src={student.pic}
                style={{ width: "7rem" }}
              />
              <Card.Body>
                <Card.Title>
                  <span>{student.firstName}</span>{" "}
                  <span>{student.lastName}</span>
                </Card.Title>

                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {average(student.grades)}%</p>
              </Card.Body>
            </Card>
          ))
        : students.students !== undefined &&
          students.students.map((student) => (
            <Card style={{ width: "18rem" }} key={student.id}>
              <Card.Img
                variant="top"
                src={student.pic}
                style={{ width: "7rem" }}
              />
              <Card.Body>
                <Card.Title>
                  <span>{student.firstName}</span>{" "}
                  <span>{student.lastName}</span>
                </Card.Title>

                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {average(student.grades)}%</p>
              </Card.Body>
            </Card>
          ))}
    </Fragment>
  );
};

export default Student;
