import { process_params } from 'express/lib/router'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'
import { Modal } from './Modal'

export const ResultsScreen = () => {

    const allQuestions = useSelector(state => state.questions)
    const userAnswers = useSelector(state => state.userAnswers)

    const [state, setState] = useState(false)
    const [savedCorrectAnswer, setCorrectAnswer] = useState(null)
    const [shownQuestion, setShownQuestion] = useState(null)    

    const dispatch = useDispatch()
    
    console.log("allQuestions is:", allQuestions)
    console.log("userAnswers is:", userAnswers)

    const handleOpenModal = (question) => {
        
        console.log("question is:", question)
        setState(true)

        // call the other local state
        const correctAnswer = question.options.find(element => question.correctAnswerId == element.id)
        setCorrectAnswer(correctAnswer)
        setShownQuestion(question.question)
 
    }

    const handleCloseModal = () => {
        setState(false)
    }

    const goToStart = () => {
        console.log("Congratulations! You've clicked the Go To Main Page button!")
       
        dispatch ({
            type: 'RESET_QUESTIONS',
        })
        // dispatch({
        //     type: 'SET_QUESTIONS',
        //     questions: [],
        //     questionsCount: 0,

        // })

        // dispatch({
        //     type: 'CURRENT_QUESTION',
        //     currentQuesion: {},

        // })

        // dispatch({
        //     type: 'SELECTED_ANSWER',
        //     userAnswers: {},

        // })

    }

    
    return (<div> { allQuestions.map(qu => <p className={ 
        userAnswers[qu.id] === qu.correctAnswerId ? "correct-answer" : "wrong-answer"}
        onClick={ () => handleOpenModal(qu) }
        > 
        {console.log(state)}
    { qu.question }
    </p>) 
    }
    { state && <Modal correctAnswer={ savedCorrectAnswer.value } shownQuestion={ shownQuestion } closeModal={ handleCloseModal }></Modal> }
    <Button onClick={ goToStart }>Back to Main</Button>
    
    </div>)

}

//show={showInfo1} onClickOutside={() => {setShowInfo1(false)}} message="Click outside to close this"/>