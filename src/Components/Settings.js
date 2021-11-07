import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StartTestButton from './StartTestButton'
import { NextButton } from './NextButton'

function Settings() {
  // const [options, setOptions] = useState(null)
  //
  // const loading = useSelector((state) => state.options.loading)
  //
  //
  // const lessonSelection = useSelector(
  //   (state) => state.options.lessonSelection
  // )
  //
  // const dispatch = useDispatch()
  //
  // useEffect(() => {
  //   const apiUrl = `https://opentdb.com/api_category.php`
  //
  //   const handleLoadingChange = (value) => {
  //     dispatch({
  //       type: 'CHANGE_LOADING',
  //       loading: value,
  //     })
  //   }
  //
  //   handleLoadingChange(true)
  //
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       handleLoadingChange(false)
  //       setOptions(response.trivia_categories)
  //     })
  // }, [setOptions, dispatch])
  //
  //
  //
  // const handleLessonSelection = (event) => {
  //   dispatch({
  //     type: 'CHANGE_LESSON',
  //     lesson_selection: event.target.value,
  //   })
  // }

  if (true) {
    return (
      <div>
        {/*<h1>Quiz App</h1>*/}

        {/*<div>*/}
        {/*  <h2>Select Lesson:</h2>*/}
        {/*  <select value={lessonSelection} onChange={handleLessonSelection}>*/}
        {/*    <option value="" key="difficulty-0">*/}
        {/*      All*/}
        {/*    </option>*/}
        {/*    <option value="lesson_1" key="lesson-1">*/}
        {/*      Lesson 1*/}
        {/*    </option>*/}
        {/*    <option value="lesson_2" key="lesson-2">*/}
        {/*      Lesson 2*/}
        {/*    </option>*/}
        {/*    <option value="lesson_3" key="lesson-3">*/}
        {/*      Lesson 3*/}
        {/*    </option>*/}
        {/*  </select>*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <h2>Select Question Type:</h2>*/}
        {/*</div>*/}



        {<StartTestButton text="Get started!" />}
       
      </div>
    )
  }

  return <p>LOADING...</p>
}
export default Settings
