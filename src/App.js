import { useSelector } from 'react-redux'

import Settings from './Components/Settings'
import Question from './Components/Question'
import FinalScreen from './Components/FinalScreen'

import './App.css'
import { useEffect } from 'react'
import { getQuestions } from './api/routes/getQuestions'
import StartTestButton from './Components/StartTestButton'
import StartPage from './Components/StartPage'

function App() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)


  // return (
  //   <div className="App">
  //     <div className="app-container">{ (questions.length != 0 ? <Question /> : <StartTestButton />)}</div>
  //   </div>
  // )

  return (
    <div className="App">
      <div className="app-container"> { (questions.length != 0 ? <Question /> : <StartPage />)}</div>
    </div>
  )
}

export default App
