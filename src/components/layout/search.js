import React, { useContext, useRef, useEffect } from "react";
import { Form, FormControl, Row } from "react-bootstrap";
import StudentsContext from "../../context/studentsContext";

const Search = () => {
  const studentsContext = useContext(StudentsContext);
  const text = useRef('');

const {searchStudet,searched}=studentsContext

useEffect(() => {
if(searched===null){
    text.current.value='';
}
}, [])

  const onChange = (e) => {
      if(text.current.value !==''){
        searchStudet(e.target.value);
      }
  
    console.log(text.current.value);
  };

  return (
    <Row className="justify-content-md-center my-3">
      <Form className="search-loaction" style={{ width: "18rem" }}>
        <FormControl
          ref={text}
          type="text"
          placeholder="Search By name"
          autoComplete="off"
          className="text-muted p-4 shadow-sm"
          onChange={onChange}
        />
      </Form>
    </Row>
  );
};

export default Search;
