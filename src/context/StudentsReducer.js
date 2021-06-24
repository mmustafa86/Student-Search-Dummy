import { SEARCH_STUDENTS, SEARCH_TAGS, GET_STUDENT, ADD_TAG } from "./types";

const StudentsReducer = (state, action) => {

switch (action.type) {
    case GET_STUDENT:
        return{
            ...state,
            students:action.payload
        }
        
    default:
     return state;
}


}




export default StudentsReducer;