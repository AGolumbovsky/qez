import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from '../componentsTemp/Button'



export const GoToReviewButton = (props) => {

    const questionsCount = useSelector(state => state.questionsCount)

    const dispatch = useDispatch()
    
    const handleGoToReview = () => {
        dispatch({
            type: 'CURRENT_QUESTION',
            questionIndex: questionsCount
        })
    }

        return <Button onClick={ () => handleGoToReview() }> Go back to review </Button>
}