import React, {useReducer, useState} from "react";

type UnControlledAccordionPropsType = {
    /**
     * Title of accordion
     */
    title: string
}

export const TOGGLE_COLLAPSE = 'TOGGLE-COLLAPSE';

export type StateType = {
    collapsedValue: boolean
}
export type ActionType = {
    type: string
}

export const accordionReducer = (state: StateType, action:ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSE:
            return (
                {...state, collapsedValue:!state.collapsedValue}
            );
        default:
            throw new Error('Unknown action type')
    }
};

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    console.log("UnControlledAccordion rendering");
    const [state, dispatch] = useReducer(accordionReducer, {collapsedValue:false});
    //const [collapsedValue, setCollapsedValue] = useState<boolean>(false);

    return (
        <div>
            <UnControlledAccordionTitle setCollapsedValue={() => dispatch({type: TOGGLE_COLLAPSE})}
                                        title={props.title}/>
            {!state.collapsedValue && <UnControlledAccordionBody/>}
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