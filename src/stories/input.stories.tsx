import React, {useRef, useState} from "react";

export default {
    title: 'Input',
    //component: UnControlledRating,
}


export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState<string>('');
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    };

    return (
        <>
            <input onChange={onChangeHandler}/> {value}
        </>
    )
};

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    };

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}>
                Get value
            </button>
            {value}
        </>

    )
};

export const ControlledInputWithFixedValue = () => <input value={'React'}/>;
