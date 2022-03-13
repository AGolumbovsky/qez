import { useSelector } from 'react-redux'

import { Question } from './Components/Question'
import { Navbar } from './Components/Navbar'

import './App.css'
import { StartPage } from './Components/StartPage'

export function App() {
  const questions = useSelector((state) => state.questions)

  return (
    <div className="App">
      <Navbar />      
      <div className="app-container"> { (questions.length != 0 ? <Question /> : <StartPage />)}</div>
    </div>
  )
}