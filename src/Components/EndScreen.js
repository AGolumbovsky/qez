import { process_params } from 'express/lib/router'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

export const EndScreen = () => {

    const allQuestions = useSelector(state => state.questions)
    const userAnswers = useSelector(state => state.userAnswers)

    const dispatch = useDispatch()
    
    const handleReviewQuestion = (qId) => {
        
        console.log("all questions is:", allQuestions)
        console.log("user answers is:", userAnswers)
        console.log("question id is:", qId)

        dispatch({
            type: 'CURRENT_QUESTION',
            questionIndex: qId - 1
        })

        // a kak sdelat' chtob Question imelo 'Back to results' button?

    }

    const handleSubmit = () => {
        alert("Congratulations! You're an idiot!")
    }

    return (<div> { allQuestions.map(qu => <p className={ userAnswers[qu.id] ? "" : "gr" } 
        onClick={ () => handleReviewQuestion(qu.id) }> 
        { qu.id } 
        </p>) 
        }
        
        <Button onClick={ () => handleSubmit()}>Submit</Button>
        
    </div>)
}