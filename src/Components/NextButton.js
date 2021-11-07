import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../componentsTemp/Button'



export const NextButton = (props) => {

    const nextQuestion = async () => {

        let levelOne = "/level-one"


        // setLoading(true);

        await fetch(levelOne)
        .then(() => {console.log("levelOne reached, don't be scared to try levelTwo")})
        // .then(() => {setLoading(false)})
    

    }

    return <Button onClick={ nextQuestion }> Next Question </Button>

}