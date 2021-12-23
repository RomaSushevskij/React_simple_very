import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";



export function UnControlledRating() {
    console.log("Rating rendering");
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    return (
        <div>
            <Star setRatingValue={()=> setRatingValue(1)} selected={ratingValue > 0}/>
            <Star setRatingValue={()=> setRatingValue(2)} selected={ratingValue > 1}/>
            <Star setRatingValue={()=> setRatingValue(3)} selected={ratingValue > 2}/>
            <Star setRatingValue={()=> setRatingValue(4)} selected={ratingValue > 3}/>
            <Star setRatingValue={()=> setRatingValue(5)} selected={ratingValue > 4}/>
        </div>
    )
}

export type StarPropsType = {
    selected: true | false
    setRatingValue: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return (
        <>
            <span onClick={props.setRatingValue}>{props.selected ? <b>star </b> : 'star '}</span>
        </>

    )
}