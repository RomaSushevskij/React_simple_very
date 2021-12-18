import React, {useState} from "react";


export function UnControlledRating(props:any) {
    console.log("Rating rendering")
    type RatingValueType = 0 | 1 |2 | 3 | 4 | 5;
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
        return (
            <div>
                <button onClick={()=>setRatingValue(0)}>0</button><Star selected={ratingValue > 0}/><button onClick={()=>setRatingValue(1)}>1</button>
                <Star selected={ratingValue > 1}/><button onClick={()=>setRatingValue(2)}>2</button>
                <Star selected={ratingValue > 2}/><button onClick={()=>setRatingValue(3)}>3</button>
                <Star selected={ratingValue > 3}/><button onClick={()=>setRatingValue(4)}>4</button>
                <Star selected={ratingValue > 4}/><button onClick={()=>setRatingValue(5)}>5</button>
            </div>
        )
}

type StarPropsType = {
    selected: true | false
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return (
        <>
            {props.selected && <span><b>star</b> </span>}
            {!props.selected && <span>star </span>}
        </>

    )
}