import React, { useReducer } from "react";

import studentsContext from "./studentsContext";
import StudentsReducer from "./StudentsReducer";
import { SEARCH_STUDENTS, SEARCH_TAGS, GET_STUDENT, ADD_TAG } from "./types";

const StudentsState = (props) => {
  const initialState = {
    students: [],
  };
  const [state, dispatch] = useReducer(StudentsReducer, initialState);

  const getStuents = async () => {
    const res = await fetch(" https://api.hatchways.io/assessment/students");
    const responseData = await res.json();

    dispatch({
      type: GET_STUDENT,
      payload: responseData,
    });
  };

  return (
    <studentsContext.Provider
      value={{
        students: state.students,
        getStuents,
      }}
    >
      {props.children}
    </studentsContext.Provider>
  );
};

export default StudentsState;
