import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'
import { NextButton } from './NextButton'

const decodeHTML = function (html) {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

function Question() {
  
  // const questions = useSelector(state => state.questions)
  const currentQuestion = useSelector(state => state.currentQuestion)
  const questionIndex = useSelector(state => state.questionIndex)
  console.log("logging currentQuestion:", currentQuestion)

  console.log(typeof currentQuestion)
  return (
    <div>
      {/* <p>Question {questionIndex + 1}</p>
      <h3>{question.question}</h3>
      <ul>
        {options.map((option, i) => (
          <li key={i} onClick={handleListItemClick} className={getClass(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        Score: {score} / {questions.length}
      </div>

      <div>
        <Button onClick={ onNextQuesiton }>Next Question</Button>
      </div>
 */}

    <p>Question { questionIndex + 1 }:</p>
    {
      <div>
        <div>{ currentQuestion.question }</div>
      </div>
      
    }
      <NextButton></NextButton>
    </div>
  )
}
export default Question
// <div> { currentQuestion.options.map(option =>  <p>{ option.value }</p> ) } </div>