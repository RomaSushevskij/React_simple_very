import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    title: string
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    console.log("Accordion rendering");
    const [collapsedValue, setCollapsedValue] = useState<boolean>(false);

    return (
        <div>
            <UnControlledAccordionTitle setCollapsedValue={() => setCollapsedValue(!collapsedValue)}
                                        title={props.title}/>
            {!collapsedValue && <UnControlledAccordionBody/>}
        </div>
    )
}

type UnControlledAccordionTitlePropsType = {
    title: string
    setCollapsedValue: () => void
}

export function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
    console.log("AccordionTitle rendering");

    const onTitleClick = () => {
        props.setCollapsedValue()
    };

    return (
        <>
            <h3 onClick={onTitleClick}>{props.title}</h3>
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