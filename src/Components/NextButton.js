import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

export const NextButton = ({ questionIndex }) => {
    const dispatch = useDispatch()
    
    const handleNextQuestion = () => {
        dispatch({
            type: 'CURRENT_QUESTION',
            questionIndex: questionIndex
        })
    }

    return <Button onClick={ handleNextQuestion }> Next Question </Button>
}