import React, {useState} from "react";

//React.memo - HOC - принимает компоненту и возвращает эту компоненту, которая обернута контейнерной компонентой. Эта контейнерная компонента реализует процесс мемоизации: если входные пропсы для компоненты не изменились, то и нет смысла вызывать эту компоненту, т.к. другую разметку/ркзультат она не вернет; но если входные пропсы отличаются от предыдущих -> есть смысл вызвать эту компоненту заново, т.к. вернется др.рузультат/разметка.


export type ReactMemoExampleType = {
    counter: number
    users: string []
    setCounter:(counter: number)=> void
}

export const ReactMemoExample = ({counter, users, setCounter}:ReactMemoExampleType) => {
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

export const NewMessageCounter = React.memo((props: CounterPropsType) => {
    console.log('CounterRender')
    return (
        <div>
            <h3>{props.counter}</h3>
        </div>
    )
})


type UsersPropsType = {
    users: string[]
}

export const Users = React.memo((props: UsersPropsType) => {
    console.log('UsersRender')
    return (
        <div>
            {props.users.map(u => <div key={u}>{u}</div>)}
        </div>
    )
})
