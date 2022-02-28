import {useEffect, useState} from "react";

export const CounterWithUseEffect = (props: any) => {
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(()=>{
        //API requests (запросы на сервер)
        //setInterval (асинхронные операции)
        //работа с базами данных (в браузере например indexedDB)
        //обращение напрямую к DOM элементам
        console.log('After every component render')
        document.title = counter.toString()
    })

    useEffect(()=>{
        console.log('Only after first component mounting')
    },[])

    useEffect(()=>{
        console.log('After first component mounting and after every changing counter value')
    },[counter])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>INC</button>
            <button onClick={() => setFake(fake + 1)}>FAKE</button>
            <h3>{counter}</h3>
        </div>
    )
}