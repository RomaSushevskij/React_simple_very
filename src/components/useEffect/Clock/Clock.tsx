import {useEffect, useState} from "react";
import style from './AnalogClock.module.css'
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type ClockPropsType = {
    mode: 'digital' | 'analog'
    setMode: () => void
}

export const Clock = ({mode, setMode}: ClockPropsType) => {

    console.log('Clock component render')
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        console.log('useEffect called')
        const intervalID = setInterval(() => {
            console.log('setInterval called')
            const date = new Date()
            setDate(date)
        }, 1000)
        return () => {
            console.log('setInterval cleared')
            clearInterval(intervalID)
        }
    }, [])


    return (
        <div className={style.wrapper}>
            <button onClick={setMode}>
                Switch mode
            </button>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {mode === 'digital' && <DigitalClockView date={date}/>}
                {mode === 'analog' && <AnalogClockView date={date}/>}
            </div>
        </div>
    )
}




