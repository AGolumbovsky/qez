import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from '../api/routes/getQuestions'
import { Button } from '../componentsTemp/Button'

function StartTestButton (props) {

    const dispatch = useDispatch()

    const setLoading = (value) => {
        dispatch({
            type: 'CHANGE_LOADING',
            loading: value,
        })
    }

    const handleQuestions = (value) => {
        dispatch({
            type: 'SET_QUESTIONS',
            questions: value,
            questionsCount: value.length
        })
    }
    
    const handleQuery = async () => {
        
        setLoading(true)
        
        getQuestions()
        .then((res) => res.json())
        .then((response) => {
            handleQuestions(response.questions)
            setLoading(false)
        })

    // if (questionIndex > 0) {
    //   dispatch({
    //     type: 'SET_INDEX',
    //     index: 0,
    //   })

    //   dispatch({
    //     type: 'SET_SCORE',
    //     score: 0,
    //   })
    // }
       
    }

    return <Button onClick={ handleQuery }>Let's Go!</Button>
}

export default StartTestButton