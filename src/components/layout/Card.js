import React from 'react'
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types'

const Cards = ({student}) => {
    
    const average = (array) => {
        let sum = array.reduce((a, b) => a + b);
        let avg = sum / array.length;
        return avg;
      };
    return (
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
    )
}

Cards.propTypes = {

}

export default Cards;
