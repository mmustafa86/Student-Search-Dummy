import React ,{Fragment}from 'react'
import Home from './components/pages/Home'
import StudentsState from './context/StudentsState'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <StudentsState>
    <Fragment >
 <Home/>
    </Fragment>
    </StudentsState>
  );
}

export default App;
