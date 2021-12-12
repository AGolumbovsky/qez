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
  const questionsCount = useSelector(state => state.questionsCount)

  const dispatch = useDispatch()

  const handleSelection = (id) => {
    // console.log("current question id:", currentQuestion.id, id)
    dispatch({
      type: 'SELECTED_ANSWER',
      questionId: currentQuestion.id,
      selectedAnswerId: id
    })
  }

  console.log("logging currentQuestion: \n", currentQuestion)

  console.log(typeof currentQuestion)
  console.log("questionIndex:", questionIndex, " questionsCount:", questionsCount)
  if (questionIndex == questionsCount - 1) return <div>End of the quiz!</div>
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
        <div> { currentQuestion.options.map(option =>  <p onClick={ () => handleSelection(option.id) }>{ option.value }</p> ) } </div>
      </div>
    }
      <NextButton questionIndex={ questionIndex + 1 }></NextButton>
    </div>
  )
}
export default Question