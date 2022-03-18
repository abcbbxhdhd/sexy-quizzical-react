import React from "react"
import "./styles.css"

export default function Answer(props) {
    
    let className = props.isChosed ? "answer--tab_chosed" : "answer--tab"

    if (props.onCheck) {
        if ((props.isChosed && props.isCorrect) || (!props.isChosed && props.isCorrect)) {
            className = "answer--tab_correct"
        } else if (props.isChosed && !props.isCorrect) {
            className = "answer--tab_incorrect"
        } else {
            className = "answer--tab_default"
        }
    }
    return (
        <div onClick={props.onChoose} className={className}>
            <p className={className === "answer--tab" || "answer--tab_choser" ? "answer--title" : "answer--tile_almost_transparent"}>{props.title}</p>
        </div>
    )
}