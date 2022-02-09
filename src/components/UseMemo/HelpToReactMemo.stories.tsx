import React, {useMemo, useState} from "react";
import {ReactMemoExample} from "../ReactMemoExample/ReactMemoExample";

export default {
    title: 'useMemo'
}


export const HelpToReactMemo = () => {
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