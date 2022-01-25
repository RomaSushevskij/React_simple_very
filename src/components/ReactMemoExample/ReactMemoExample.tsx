import React, {useState} from "react";

export type ReactMemoExampleType = {
    counter: number
    users: string []
}

export const ReactMemoExample = (props:ReactMemoExampleType) => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Roma', 'Lena', 'Ameliya', 'Mira'])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>INC</button>
            <button onClick={() => setCounter(0)}>RESET</button>
            <NewMessageCounter counter={counter}/>
            <Users users={users}/>
        </div>
    )
}

type CounterPropsType = {
    counter: number
}

const NewMessageCounter = (props: CounterPropsType) => {
    console.log('CounterRender')
    return (
        <div>
            <h3>{props.counter}</h3>
        </div>
    )
}


type UsersPropsType = {
    users: string[]
}

const Users = React.memo((props: UsersPropsType) => {
    console.log('UsersRender')
    return (
        <div>
            {props.users.map(u => <div key={u}>{u}</div>)}
        </div>
    )
})
