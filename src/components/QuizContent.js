import React from 'react';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import signInstruction from '../images/road-signs-instruction.png';
import signDirection from '../images/signDirection.svg';
import signWarning from '../images/signWarning.svg';

const QuizContent = (props) => {
    const ran = Math.floor(Math.random() * props.length);


const quizes = [
 {
    "name": "Road sign",
    "id": 1,
    "question": signInstruction,
    "answers": ['Mandatory Sign', 'Direction Sign', 'Instruction Sign', 'Prohibitory Sign'],
    "correct": 2,
  },
  {
    "name": 'Road sign',
    "id": 2,
    "question": signDirection,
    "answers": [ 'Direction Sign', 'Instruction Sign', 'Mandatory Sign', 'Prohibitory Sign'],
    "correct": 0
  },
  {
    "name": 'Road sign',
    "id": 3,
    "question": signWarning,
    "answers": [ 'Warning sign', 'Instruction Sign', 'Mandatory Sign', 'Prohibitory Sign'],
    "correct": 0,
  }

];

const givenAnswer = (event) => {
    var clickedAnswer = event.target.getAttribute('index');
    if(clickedAnswer == quizes[ran].correct){
        alert('correct');
    } else {
        alert('wrong');
    } 

}

    return (
        <div className="quiz-content container">
            <div className= 'row'>
                <div className='col-4'>
                    <img classname='img-responsive' src={quizes[ran].question} className="App-logo" alt="logo" />
                </div>
                <div className= "col-8">
                <ul>
                    {quizes[ran].answers.map((value, index) => {
                        return <li onClick={givenAnswer} index={index}>  {value}  {index} </li>
                    })}
                </ul>

            
                </div>
            </div>
            
        </div>
    );
};

QuizContent.propTypes = {};

export default QuizContent;