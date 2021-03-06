import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
    /**
     * Value that indicate value of Rating
     */
    value: RatingValueType
    /**
     * Callback that is called when some Star has been clicked
     * @param ratingValue
     */
    setRatingValue: (ratingValue: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");

    return (
        <div>
            <Star selected={props.value > 0} setRatingValue={() => props.setRatingValue(1)}/>
            <Star selected={props.value > 1} setRatingValue={() => props.setRatingValue(2)}/>
            <Star selected={props.value > 2} setRatingValue={() => props.setRatingValue(3)}/>
            <Star selected={props.value > 3} setRatingValue={() => props.setRatingValue(4)}/>
            <Star selected={props.value > 4} setRatingValue={() => props.setRatingValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: true | false
    setRatingValue: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    const onClickStar = () => {
        props.setRatingValue()
    };
    return (
        <>
            <span onClick={onClickStar}>{props.selected ? <b>star </b> : 'star '}</span>
        </>
    )
}