import {useEffect, useState} from "react";

export const SetTimeout = (props: any) => {
    console.log('Component render')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(0)


    /*setTimeout(() => {
        console.log('setTimeout called')
        document.title = counter.toString()
    }, 1500)*/

    // при вызове setTimeout прямо из компоненты, он будет вызываться всякий раз, когда перерисовывается
    // компонента, и даже когда при этом не изменится counter, а это не целесообразно. Например мы изменим
    // значение fake --> компонента перерисуется и setTimeout вызовется. Нам нужно, чтобы он вызывался
    // только при изменении значения counter. Поэтому используем useEffect с зависимостью counter:
    useEffect(()=>{
        setTimeout(() => {
        console.log('setTimeout called')
        document.title = counter.toString()
    }, 1500)
    }, [counter])


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>INC</button>
            <button onClick={() => setFake(fake + 1)}>FAKE</button>
            <h3>{counter}</h3>
        </div>
    )
}