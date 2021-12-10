import React from "react";

type AccordionPropsTitle = {
    title: string,
    collapsed: true | false
}

export function Accordion(props:AccordionPropsTitle) {
    console.log("Accordion rendering")
    return (
        <div>
            {props.collapsed && <AccordionTitle title={props.title}/>}
            {!props.collapsed && <AccordionTitle title={props.title}/>}
            {!props.collapsed &&<AccordionBody/>}
        </div>
    )
}

type AccordionPropsTitlePropsType = {
    title: string
}

export function AccordionTitle(props:any) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{ props.title }</h3>

    )
}

export function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}