import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Header from './components/Header';
import QuizContent from './components/QuizContent';

function App() {
  return (
    <div className="App" >
      <header className="App-header">

      


      <Header></Header>
      <QuizContent length='3'></QuizContent>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;