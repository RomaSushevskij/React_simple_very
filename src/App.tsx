import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [collapsedValue, setCollapsedValue] = useState<boolean>(false);
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [bulbValue, setBulbValue] = useState<boolean>(true);

    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <Accordion collapsed={collapsedValue}
                       title={"---Controlled---"}
                       setCollapsedValue={() => setCollapsedValue(!collapsedValue)}/>
            Article 1
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <hr/>
            <OnOff bulbValue={bulbValue} setBulbValue={setBulbValue}/>
            <UnControlledAccordion title={"---Uncontrolled---"}/>
            Article 2
            <UnControlledRating/>
            <hr/>
            <UnControlledOnOff setBulbValueApp={setBulbValue}/>{bulbValue.toString()}
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
