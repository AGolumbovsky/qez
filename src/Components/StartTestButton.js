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
        })
    }
    
    const handleQuery = async () => {
        
        setLoading(true)
        
        getQuestions()
       
    }

    return <Button onClick={ handleQuery }>Pehali!</Button>
}

export default StartTestButton