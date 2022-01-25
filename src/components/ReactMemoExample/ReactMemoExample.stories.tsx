import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {ReactMemoExample} from "./ReactMemoExample";

export default {
    title: 'ReactMemoExample',
    component: ReactMemoExample,
} as ComponentMeta<typeof ReactMemoExample>;


const Template: ComponentStory<typeof ReactMemoExample> = (args) => <ReactMemoExample {...args} />;


export const UsersWithMemo:ComponentStory<typeof ReactMemoExample> = (args) => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Roma', 'Lena', 'Ameliya', 'Mira'])

    return <ReactMemoExample counter={counter} users={users}/>
};








