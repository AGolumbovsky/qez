import { useSelector } from 'react-redux'

import { Question } from './Components/Question'

import './App.css'
import { StartPage } from './Components/StartPage'

export function App() {
  const questions = useSelector((state) => state.questions)

  return (
    <div className="App">
      {/* PUT NAVBAR HERE. At least for now */}
      <div className="app-container"> { (questions.length != 0 ? <Question /> : <StartPage />)}</div>
    </div>
  )
}