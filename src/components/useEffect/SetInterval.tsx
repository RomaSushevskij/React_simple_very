import {useEffect, useState} from "react";

export const SetInterval = (props: any) => {
    console.log('Component render')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    /*useEffect(()=>{
        setInterval(()=> {
            console.log('Counter render. Value of counter: ' + counter)
            setCounter(counter + 1)
            }, 1000
        )
    }, [])*/

    //здесь при первом запуске setCounter создается замыкание и каждый раз counter берется со значением 1.
    // Вместо 'counter + 1' здесь нужно в setCounter передавать функцию-преобразователь, которая будет принимать
    //state, преобразовывать его по определенному фиксированному правилу и возвразать измененный state. Таким образом
    // setCounter всегда будет работать с актуальной версией state.

    const changeCounterValue = (state:number) => {
        return state + 1
    }
    useEffect(()=>{
        setInterval(()=> {
                console.log('Counter render. Value of counter: ' + counter)
                setCounter(changeCounterValue)
            }, 1000
        )
    }, [])


    return (
        <div>
            <h3>Counter:</h3>{counter}
            <h3>Fake:</h3>{fake}
        </div>
    )
}