import { SEARCH_STUDENTS, SEARCH_TAGS, GET_STUDENT, ADD_TAG } from "./types";

const StudentsReducer = (state, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return {
        ...state,
        students: action.payload,
      };
    case SEARCH_STUDENTS:
        const regex = new RegExp(`${action.payload}`, "gi");
      return {
        ...state,
        
        searched: state.students.students.filter((student) => {
         
          return student.firstName.match(regex) || student.lastName.match(regex);
        })
      };

    default:
      return state;
  }
};

export default StudentsReducer;
