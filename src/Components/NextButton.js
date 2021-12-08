import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'



export const NextButton = (props) => {

    const dispatch = useDispatch()
    
    const handleNextQuestion = (value) => {
        dispatch({
            type: 'CURRENT_QUESTION',
            currentQuestion: value,
        })
    }
    const nextQuestion = async () => {

        let levelOne = "/level-one"


        // setLoading(true);

        await fetch(levelOne)
        .then(() => {console.log("next button clicked")})
        // .then(() => {setLoading(false)})

        //NEED TO:
        // go to the next question
        // change question index
        // record current index
    }

    return <Button onClick={ handleNextQuestion }> Next Question </Button>
}