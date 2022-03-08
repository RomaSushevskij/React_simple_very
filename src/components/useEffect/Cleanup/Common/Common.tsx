import {useEffect, useState} from "react";

export const CommonExample = (props: any) => {
    const [counter, setCounter] = useState(0)
    console.log(`Component rendered with ${counter}` )
    useEffect(()=> {
        console.log(`Effect occurred with ${counter}`)
        return ()=> {
            console.log(`Reset effect with ${counter}`)
        }
    }, [counter])
    return (
        <div>
            Counter: {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}