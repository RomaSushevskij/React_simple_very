import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type UnControlledRatingPropsType = {
    defaultValue?: RatingValueType
    setRatingValueApp: (ratingValue: RatingValueType) => void
}

export function UnControlledRating({
                                       defaultValue,
                                       setRatingValueApp,
                                       ...restProps
                                   }: UnControlledRatingPropsType) {
    console.log("UnControlledRating rendering");
    const [ratingValue, setRatingValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0);
    return (
        <div>
            <Star setRatingValue={() => {setRatingValue(1); setRatingValueApp(1);}} selected={ratingValue > 0}/>
            <Star setRatingValue={() => {setRatingValue(2); setRatingValueApp(2);}} selected={ratingValue > 1}/>
            <Star setRatingValue={() => {setRatingValue(3); setRatingValueApp(3);}} selected={ratingValue > 2}/>
            <Star setRatingValue={() => {setRatingValue(4); setRatingValueApp(4);}} selected={ratingValue > 3}/>
            <Star setRatingValue={() => {setRatingValue(5); setRatingValueApp(5);}} selected={ratingValue > 4}/>

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