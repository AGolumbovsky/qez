import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

const decodeHTML = function (html) {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

function Question() {
  
  const questions = useSelector(state => state.questions)
  // const quesions = useSelector(state => state.reducer.quesions)
  console.log(questions)
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

<p>Question:</p>
  {questions.map(x => <div>{x.question}</div>)}
    </div>
  )
}
export default Question