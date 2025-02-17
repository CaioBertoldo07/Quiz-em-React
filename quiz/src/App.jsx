import './App.css'
import Welcome from './components/Welcome/Welcome'
import { useContext, useEffect } from 'react'
import Question from './components/Question/Question'
import { QuizContext } from './context/quiz'
import GameOver from './components/GameOver/GameOver'
import PickyCategory from './components/PickCategory/PickyCategory'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <>
      <div className="App">
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickyCategory />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
    </>
  )
}

export default App
