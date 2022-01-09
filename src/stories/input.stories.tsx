import React, {ChangeEvent, MouseEvent, useRef, useState} from "react";

export default {
    title: 'Input',
    //component: UnControlledRating,
}


export const UncontrolledInput = () => <input/>;

export const ControlledInputWithFixedValue = () => <input value={'React'}/>;

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState<string>('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return (

        <input value={parentValue} onChange={onChangeHandler}/>

    )
};
export const ControlledCheckbox = () => {
    const [parentChecked, setParentChecked] = useState(true);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentChecked(e.currentTarget.checked)
    };
    return (
        <input type="checkbox" checked={parentChecked} onChange={onChangeHandler}/>
    )
};
export const ControlledSellect = () => {

    //onChange вешаем на select, поэтому e.currentTarget - select и мы у него берем value. Если option изменилась, то значение select будет равно значению той option, которая выбрана.

    const [parentValue, setParentValue] = useState<string | undefined>("3");
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JS</option>
            <option value="4">React</option>
            <option value="5">Redux</option>
        </select>
    )
};
