import {ComponentStory} from "@storybook/react";
import {ReactMemoExample} from "../ReactMemoExample/ReactMemoExample";
import React, {ChangeEvent, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingUseMemo = () => {
    const [value_1, setValue_1] = useState(0)
    const [value_2, setValue_2] = useState(0)

        let factorial_1 = 1
        let factorial_2 = 1
        for (let i = 1; i <= value_1; i++) {
            factorial_1 *= i
        }
        //Difficult counting - нужно использовать useMemo -> запомнит результат для текущего value_2, и пока оно не изменится, не будет запускать цикл повторно.
        factorial_2 = useMemo(() => {
            for (let i = 1; i <= value_2; i++) {
                let a = 1;
                while (a < 1000000000) {
                    a++
                }
                factorial_2 *= i
            }
            return factorial_2
        }, [value_2])


    const onChangeHandler_1 = (e:ChangeEvent<HTMLInputElement>) => {
        setValue_1(Number(e.currentTarget.value))
    }
    const onChangeHandler_2 = (e:ChangeEvent<HTMLInputElement>) => {
        setValue_2(Number(e.currentTarget.value))
    }

    return (
        <div>
            <div>
                Input 1
                <input value={value_1} type='number' onChange={onChangeHandler_1}/>
                <p></p>
                Input 2
                <input value={value_2} type='number' onChange={onChangeHandler_2}/>
            </div>
            <br/>
            <div>
                Factorial for input 1: <b>{factorial_1}</b>
                <hr/>
                Factorial for input 2 (difficult counting): <b>{factorial_2}</b>
            </div>
        </div>
    )
};

export const HelpToReactMemo = () => {

}