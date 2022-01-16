import { process_params } from 'express/lib/router'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

export const ResultsScreen = () => {

    const allQuestions = useSelector(state => state.questions)
    const userAnswers = useSelector(state => state.userAnswers)

    const dispatch = useDispatch()
    
    const handleGrading = (qId) => {
        
        
    }


    return (<div> { allQuestions.map(qu => <p className={ userAnswers[qu.id] ? "" : "gr" }> 
    { qu.question }
    </p>) 
    }
    
    <Button >Go Back to Main</Button>
    
</div>)

}