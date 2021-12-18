import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    title: string
}

export function UnControlledAccordion(props:UnControlledAccordionPropsType) {
    console.log("Accordion rendering");
    const [collapsedValue, setCollapsedValue] = useState(true)
    return (
        <div>
            <UnControlledAccordionTitle title={props.title}/><button onClick={()=>setCollapsedValue(collapsedValue ? false : true)}>collapse</button>
            {!collapsedValue && <UnControlledAccordionBody/>}
        </div>
    )
}

type UnControlledAccordionTitlePropsType = {
    title: string
}

export function UnControlledAccordionTitle(props:UnControlledAccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (

        <>
            <h3>{props.title}</h3>
        </>

    )
}

export function UnControlledAccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}