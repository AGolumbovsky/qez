import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

export const BackButton = (props) => {

    const dispatch = useDispatch()
    
    const onGoPrevQuestion = () => {
        dispatch({
            type: 'CURRENT_QUESTION',
            questionIndex: props.questionIndex
        })
    }

    return <Button onClick={ onGoPrevQuestion }> Previous Question </Button>
}