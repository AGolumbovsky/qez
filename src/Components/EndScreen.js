import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'

export const EndScreen = () => {

    const allQuestions = useSelector(state => state.questions)
    const userAnswers = useSelector(state => state.userAnswers)

    console.log("all questions is:", allQuestions)

    return <div> { allQuestions.map(qu => <p className={ userAnswers[qu.id] ? "" : "gr" }> { qu.id } </p>) }</div>
}