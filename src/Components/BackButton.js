import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

export const BackButton = ({ questionIndex }) => {

    const dispatch = useDispatch()
    
    const onGoPrevQuestion = () => {
        dispatch({
            type: 'CURRENT_QUESTION',
            questionIndex: questionIndex
        })
    }

    return <Button onClick={ onGoPrevQuestion }> Previous Question </Button>
}