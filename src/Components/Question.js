import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'
import { BackButton } from './BackButton'
import { EndScreen } from './EndScreen'
import { NextButton } from './NextButton'
import { GoToReviewButton } from './GoToReviewButton'
import { ResultsScreen } from './ResultsScreen'

const decodeHTML = function (html) {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

function Question() {

  const [state, setState] = useState(false)
  
  // const questions = useSelector(state => state.questions)
  const currentQuestion = useSelector(state => state.currentQuestion)
  const questionIndex = useSelector(state => state.questionIndex)
  const questionsCount = useSelector(state => state.questionsCount)
  const isFromReview = useSelector(state => state.isFromReview)

  const userAnswers = useSelector(state => state.userAnswers)
  console.log("userAnswers is:", userAnswers)

  const dispatch = useDispatch()

  const handleSelection = (id) => {

    dispatch({
      type: 'SELECTED_ANSWER',
      questionId: currentQuestion.id,
      selectedAnswerId: id
    })

  }

  const showResults = () => {

    setState(true)
    console.log("some test")
    
    
  }
  console.log("state is", state)

  if (state == true) return <ResultsScreen />

  if (questionIndex == questionsCount) return <EndScreen showResults={ showResults } />
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
        <div> { currentQuestion.options.map(option =>  <p className={ userAnswers[questionIndex + 1] === option.id ? "question-highlighted" : "" } 
          key={ option.id } 
          onClick={ () => handleSelection(option.id) }>{ option.value }</p> ) } </div>
      </div>
    }
    <span className='buttons-inline'>

    { isFromReview ? <GoToReviewButton /> :
    
    questionIndex > 0 && <BackButton questionIndex={ questionIndex - 1 }></BackButton> }
    { !isFromReview && <NextButton questionIndex={ questionIndex + 1 }></NextButton> }
    
    </span>
    </div>
  )
}
export default Question