import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    const [collapsedValue, setCollapsedValue] = useState<boolean>(false);
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <Accordion collapsed={collapsedValue}
                       title={"---Menu 1---"}
                       setCollapsedValue={() => setCollapsedValue(!collapsedValue)}/>
            Article 1
             <Rating value={ratingValue} setRatingValue={setRatingValue}/>

            <UnControlledAccordion title={"---Menu 2---"}/>
            Article 2
            <UnControlledRating />
            <hr/>
            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("Title rendering")
    return (
        <h1>
            {props.title}
        </h1>
    )
}


export default App;
