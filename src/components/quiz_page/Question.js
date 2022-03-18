import React from "react"
import Answer from "./Answer"
import "./styles.css"

export default function Question(props) {


    const answers = props.answers.map((answer) => {

        return <Answer 
                    key={answer.id} 
                    title={answer.value} 
                    onChoose={() => props.chooseAnswer(answer.id)} 
                    isChosed={answer.isChosed} 
                    isCorrect={answer.isCorrect}
                    onCheck={props.onCheck}  />
    })

    return (
        <div className="question--one">
           <h1 className="question--title">{props.title}</h1>
           <div className="question--answers_row">
                {answers}
            </div>
            <hr/> 
        </div>
    )
}