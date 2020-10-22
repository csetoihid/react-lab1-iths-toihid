import React from 'react';
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
      </header>
    </div>
  );
}

export default App;
