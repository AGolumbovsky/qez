import { process_params } from 'express/lib/router'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'
import { Modal } from './Modal'

export const ResultsScreen = () => {

    const allQuestions = useSelector(state => state.questions)
    const userAnswers = useSelector(state => state.userAnswers)
    const [state, setState] = useState(false)
    // create another local state where you keep the correct answer

    const dispatch = useDispatch()
    
    console.log("allQuestions is:", allQuestions)
    console.log("userAnswers is:", userAnswers)

    const handleOpenModal = (question) => {
        
        setState(true)
        // call the other local state

        
    }
    
    
    return (<div> { allQuestions.map(qu => <p className={ 
        userAnswers[qu.id] === qu.correctAnswerId ? "correct-answer" : "wrong-answer"}
        onClick={ handleOpenModal }
        > 
        {console.log(state)}
    { qu.question }
    </p>) 
    }
    { state && <Modal ></Modal> }
    <Button >Back to Main</Button>
    
    </div>)

}