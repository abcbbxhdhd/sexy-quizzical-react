import React from "react"
import StartPage from "./components/start_page/StartPage"
import QuizPage from "./components/quiz_page/QuizPage"

function App() {

  const [page, setPage] = React.useState(0)

  function onStartQuiz() {
    setPage(1)
  }

  function onRestartQuiz() {
    setPage(0)
  }

  console.log(page)

  return (
    <div>
      {page === 0 ? <StartPage onStartQuiz={onStartQuiz}/> : <QuizPage onRestartQuiz={onRestartQuiz}/>}
    </div>
  );
}

export default App;
