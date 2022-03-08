import {useEffect, useState} from "react";

export const KeysTrackerExample = (props: any) => {
    const [text, setText] = useState('start value')
    console.log(`Component rendered with ${text}` )
    useEffect(()=> {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
            //если не указываем в зависисости useEffect text, то в setText
            // используем функцию-преобразователь
        }
        window.addEventListener('keypress', handler)
        return ()=> {
            window.removeEventListener('keypress', handler)
        }
    }, [text])
    return (
        <div>
            <b>Text</b>: {text}
        </div>
    )
}