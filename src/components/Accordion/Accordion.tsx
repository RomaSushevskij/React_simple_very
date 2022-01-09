import React from "react";

export type ItemType = {
    title: string
    value: any
}

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
    items: ItemType[]
    onClick: (value:string) => void

}


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}
                            setCollapsedValue={props.setCollapsedValue}
                            color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

export type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyType) {
    console.log("AccordionBody rendering");
    const onClickHandler = (value: any) => {
        props.onClick(value)
    };
    return (
        <ul>
            {props.items.map((item, ind) => {
                return (
                    <li key={ind} onClick={() => onClickHandler(item.value)}>{item.title}</li>
                )
            })}
        </ul>
    )
}