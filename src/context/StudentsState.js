import React, { useReducer } from "react";

import studentsContext from "./studentsContext";
import StudentsReducer from "./StudentsReducer";
import { SEARCH_STUDENTS, SEARCH_TAGS, GET_STUDENT, ADD_TAG } from "./types";

const StudentsState = (props) => {
  const initialState = {
    students: [],
    searched:null
  };
  const [state, dispatch] = useReducer(StudentsReducer, initialState);


  //get stuents 
  const getStuents = async () => {
    const res = await fetch(" https://api.hatchways.io/assessment/students");
    const responseData = await res.json();

    dispatch({
      type: GET_STUDENT,
      payload: responseData,
    });
  };


//filter stuents

const searchStudet= (text)=>{
    console.log(text)
    dispatch({type:SEARCH_STUDENTS ,payload:text})
}


  return (
    <studentsContext.Provider
      value={{
        students: state.students,
        searched:state.searched,
        getStuents,
        searchStudet
      }}
    >
      {props.children}
    </studentsContext.Provider>
  );
};

export default StudentsState;
