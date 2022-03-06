// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Button } from '../componentsTemp/Button'


// return (
//     <div>

//     <p>Question { questionIndex + 1 }:</p>
//     {
//         <div>
//         <div>{ currentQuestion.question }</div>
//         <div> { currentQuestion.options.map(option =>  <p className={ userAnswers[questionIndex + 1] === option.id ? "question-highlighted" : "" } 
//         key={ option.id } 
//         onClick={ () => handleSelection(option.id) }>{ option.value }</p> ) } </div>
//         </div>
//     }
//     <span className='buttons-inline'>


//       {questionIndex > 0 ? <BackButton questionIndex={ questionIndex - 1 }></BackButton> : null}
//         <NextButton questionIndex={ questionIndex + 1 }></NextButton>
//     </span>
//     </div>
//     )
    