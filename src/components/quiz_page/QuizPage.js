import React from "react"
import axios from "axios"
import Question from "./Question"
import "./styles.css"
import { nanoid } from "nanoid"

export default function QuizPage(props) {
    const [questions, setQuestions] = React.useState([])

    const [check, setCheck] = React.useState(false)


    React.useEffect(async () => {
        const result = await axios(
            "https://opentdb.com/api.php?amount=5",
        );
        setQuestions(result.data.results.map((question) => {
            let answers = [
                {
                    value: question.correct_answer,
                    id: nanoid(),
                    isCorrect: true,
                    isChosed: false
                }
            ] 

            question.incorrect_answers.forEach(answer => {
                answers.push({
                    value: answer,
                    id: nanoid(),
                    isCorrect: false,
                    isChosed: false
                })
            })

            answers = shuffledAnswers(answers)

            return {
                title: question.question,
                id: nanoid(),
                answers: answers
            }
        }))
    }, [])

    function numberOfCorrectAnswers() {
        let number = 0
        questions.forEach(question => {
            question.answers.forEach(answer => {
                if (answer.isCorrect && answer.isChosed) {
                    number++
                }
            }) 
        })
        return number
    }

    function onCheck() {
        setCheck(true)
    }

    function shuffledAnswers(answers) {
        return answers.sort((a,b) => 0.5 - Math.random())
    }

    function chooseAnswer(id) {
        setQuestions(prevQuestions => prevQuestions.map(question => {
            let updatedAnswers = []
            let tryFindId = question.answers.filter(answer => answer.id === id)
            if (tryFindId.length === 0) {
                updatedAnswers = question.answers
            } else {
                updatedAnswers = question.answers.map(answer => {
                    return answer.id === id ? {...answer, isChosed: true} : {...answer, isChosed: false}
                })
            }
            return {...question, answers: updatedAnswers}
        }))
    }

    const renderedQuestions = questions.map(question => {
        return <Question
                    key={question.id} 
                    title={question.title}
                    answers={question.answers}
                    chooseAnswer={chooseAnswer}
                    onCheck={check}
        />
    })


    return (
        <div className="quiz--page">
            <div className="questions--list">
                {renderedQuestions}
            </div>
            <div className="results--row">
                {check && <p className="p--oncheck">{`You scored ${numberOfCorrectAnswers()}/5 correct answers`}</p>}
                <button className="check--button" onClick={check ? props.onRestartQuiz : onCheck}>{check ? "Play again" : "Check answers"}</button>
            </div>
        </div>
    )
}