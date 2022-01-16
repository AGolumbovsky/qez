import { process_params } from 'express/lib/router'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

export const EndScreen = (props) => {

    console.log("props are:", props)
    const allQuestions = useSelector(state => state.questions)
    const userAnswers = useSelector(state => state.userAnswers)

    const dispatch = useDispatch()
    
    const handleReviewQuestion = (qId) => {
        
        dispatch({
            type: 'CURRENT_QUESTION',
            questionIndex: qId - 1
        })

        dispatch({
            type: 'TOGGLE_REVIEW_QUESTION',
            isFromReview: true
        })

    }

    const handleSubmit = () => {
        console.log("questions is:", allQuestions)

        dispatch({
            type: 'RESULTS',
            
        })
    }

    return (<div> { allQuestions.map(qu => <p className={ userAnswers[qu.id] ? "" : "gr" } 
        onClick={ () => handleReviewQuestion(qu.id) }> 
        { qu.id } 
        </p>) 
        }
        
        <Button onClick={ props.showResults } >Submit</Button>
        
    </div>)
}