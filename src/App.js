import { useSelector } from 'react-redux'

import Settings from './Components/Settings'
import Question from './Components/Question'
import FinalScreen from './Components/FinalScreen'

import './App.css'
import { useEffect } from 'react'
import { getQuestions } from './api/routes/getQuestions'

function App() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }

  useEffect(() => {

    getQuestions()
      .then((res) => res.json())
      .then((data) => { console.log(data) })

  }, [])

  return (
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
  )
}

export default App
