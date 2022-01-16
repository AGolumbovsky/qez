import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

export const NextButton = (props) => {

    const dispatch = useDispatch()
    
    const handleNextQuestion = () => {
        dispatch({
            type: 'CURRENT_QUESTION',
            questionIndex: props.questionIndex
        })
    }

    return <Button onClick={ handleNextQuestion }> Next Question </Button>
}