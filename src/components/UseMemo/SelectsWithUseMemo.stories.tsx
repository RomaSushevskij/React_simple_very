import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {SelectsWithUseMemo} from "./SelectsWithUseMemo";

export default {
    title: 'useMemo',
    component: SelectsWithUseMemo,
} as ComponentMeta<typeof SelectsWithUseMemo>;

const cities = [
    {id: '1', title: 'Rogachev', country: 'Belarus', citizens: 35000},
    {id: '2', title: 'Gomel', country: 'Belarus', citizens: 1500000},
    {id: '3', title: 'Buda', country: 'Belarus', citizens: 25000},
    {id: '4', title: 'Bryansk', country: 'Russia', citizens: 20000},
    {id: '5', title: 'Chernigov', country: 'Ukraine', citizens: 70000},
    {id: '6', title: 'Moskva', country: 'Russia', citizens: 12000000}
];

export const SelectsWithUseMemoExample: ComponentStory<typeof SelectUseMemo> = (args) => {
    const [counter, setCounter] = useState(0);
    const [id_1, setId_1] = useState('1');
    const [id_2, setId_2] = useState('2');
    const [id_3, setId_3] = useState('6');


    return (
        <SelectsWithUseMemo {...args}
                       counter={counter}
                       id_1={id_1}
                       id_2={id_2}
                       id_3={id_3}
                       onChange_1={setId_1}
                       onChange_2={setId_2}
                       onChange_3={setId_3}
                       setCounter={setCounter}/>
    )
}


SelectsWithUseMemoExample.args = {
    items:cities
}

