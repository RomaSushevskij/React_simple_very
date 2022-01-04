import React from "react";

type AccordionPropsType = {
    /**
     * Title of accordion
     */
    title: string
    /**
     * Value that indicates whether the accordion is collapsed or not
     */
    collapsed: boolean
    /**
     * Callback that call when title has been clicked
     */
    setCollapsedValue: () => void
    /**
     * Optional color of header text
     */
    color?: string

}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}
                            setCollapsedValue={props.setCollapsedValue}
                            color={props.color}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsedValue: () => void
    color?: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");

    const onTitleClick = () => {
        props.setCollapsedValue()
    };

    return (
        <h3 style={{color: props.color ? props.color : "black"}}
            onClick={(e) => onTitleClick()}>
            {props.title}
        </h3>

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