import React from "react"
import "./styles.css"

export default function StartPage(props) {
    return (
        <div className="start--page"> 
            <h1 className="app--title">Quizzical</h1>
            <h2 className="app--description">Some description is needed</h2>
            <button className="start--button" onClick={props.onStartQuiz}>Start quiz</button> 
        </div>
    )
}