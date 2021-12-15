import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'
import { BackButton } from './BackButton'
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

  const userAnswers = useSelector(state => state.userAnswers)
  console.log("userAnswers is:", userAnswers)

  const dispatch = useDispatch()

  const handleSelection = (id) => {
    // console.log("current question id:", currentQuestion.id, id)
    dispatch({
      type: 'SELECTED_ANSWER',
      questionId: currentQuestion.id,
      selectedAnswerId: id
    })
  }

  if (questionIndex == questionsCount) return <div>End of the quiz!</div>
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
        <div> { currentQuestion.options.map(option =>  <p key={ option.id } onClick={ () => handleSelection(option.id) }>{ option.value }</p> ) } </div>
      </div>
    }

    {questionIndex > 0 ? <BackButton questionIndex={ questionIndex - 1 }></BackButton> : null}
      <NextButton questionIndex={ questionIndex + 1 }></NextButton>
    </div>
  )
}
export default Question