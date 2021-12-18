import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <UnControlledAccordion title={"---Menu---"}/>
            Article 1
            <UnControlledRating />
            <UnControlledAccordion title={"---Menu---"}/>
            Article 2
            <UnControlledRating />
            <hr/>
            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title:string
}

function PageTitle(props:PageTitlePropsType) {
    console.log("Title rendering")
    return (
        <h1>
            {props.title}
        </h1>
    )
}


export default App;
