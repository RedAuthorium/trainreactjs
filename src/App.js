import React from 'react';
import logo from './logo.svg';
import './App.css';

function Biodata(props) {
  return <span>umurnya {props.age}</span>
}

function Greeting(props){
  return <h1>Namanya {props.name} <Biodata age={ props.age }/></h1> 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Greeting name="rifky" age="20"/>
      </header>
    </div>
  );
}

export default App;
