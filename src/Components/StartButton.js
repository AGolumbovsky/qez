import React from 'react'
import { useDispatch } from 'react-redux'
import { getQuestions } from '../api/routes/getQuestions'
import { Button } from '../componentsTemp/Button'

export function StartButton ({ level }) {

    const dispatch = useDispatch()

    const handleQuestions = (value) => {
        dispatch({
            type: 'SET_QUESTIONS',
            questions: value,
            questionsCount: value.length
        })
    }
    
    const handleQuery = async () => {
        getQuestions(level)
        .then((res) => res.json())
        .then(({ questions }) => {
            handleQuestions(questions)
        })
    }

    return <Button onClick={ handleQuery }>Start Test!</Button>
}
