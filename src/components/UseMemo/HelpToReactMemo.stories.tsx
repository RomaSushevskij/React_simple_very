import React, {useMemo, useState} from "react";
import {ReactMemoExample} from "../ReactMemoExample/ReactMemoExample";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'useMemo',
    component: ReactMemoExample,
} as ComponentMeta<typeof ReactMemoExample>;


export const HelpToReactMemo: ComponentStory<typeof ReactMemoExample> = (args) => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Roma', 'Lena', 'Ameliya', 'Mira'])
    const filterUsers = useMemo(() => {
       return users.filter(user => user.toLowerCase().indexOf('r') > -1)
    }, [users])
    const addUser = () => {
        setUsers(['user' + new Date().getTime(), ...users])
    }

    return (
        <div>
            <div>
                <button onClick={addUser}>Add user</button>
            </div>
            <br/>
            <ReactMemoExample setCounter={setCounter} counter={counter} users={filterUsers}/>
        </div>
    )
}