import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
        return (
            <div>
                <Star selected={props.value > 0}/>
                <Star selected={props.value > 1}/>
                <Star selected={props.value > 2}/>
                <Star selected={props.value > 3}/>
                <Star selected={props.value > 4}/>
            </div>
        )
}

type StarPropsType = {
    selected: true | false
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    debugger
    return (
        <>
            {props.selected && <span><b>star</b> </span>}
            {!props.selected && <span>star </span>}
        </>

    )
}