import {useCallback, useState} from "react";

const difficultCounting = () => {
    console.log('difficult counting')
    let a = 1000000000
    while (a > 1) {
        a--
    }
    return a
}

export const Counter = (props: any) => {
    // каждый раз при вызове компоненту будет вызываться функция со сложными вычислениями
    //const initState = difficultCounting()

    // можно использ. useMemo или useCallback
    //const initState = useCallback(difficultCounting, [])

    //const [counter, setCounter] = useState(initState)
    //а можно сразу передать difficultCounting как callback в useState и он сам опитимизирует работу с ним
    const [counter, setCounter] = useState(difficultCounting)

    //в setCounter вместо конкретного значения можно передавать как callback функцию, которая изменяет state каждый раз по определенному фиксированному правилу и возвращает измененный state, например для этого случая:
    const incrementStateValue = (state: number) => {
        return state + 1
    }

    return (
        <div>
            {/*<button onClick={() => setCounter(counter + 1)}>INC</button>*/}
            <button onClick={() => setCounter(incrementStateValue)}>INC</button>
            <h3>{counter}</h3>
        </div>
    )
}