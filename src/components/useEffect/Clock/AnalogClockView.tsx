import style from "./AnalogClock.module.css";

type AnalogClockViewPropsType = {
    date: Date
}
export const AnalogClockView = ({date}: AnalogClockViewPropsType) => {
    const degForSeconds = date.getSeconds() * 6
    const degForMinutes = date.getMinutes() * 6
    const isMeddle = date.getMinutes() > 30 ? 15 : 0
    const degForHours = date.getHours() * 30 + isMeddle

    return (
        <div className={style.clockFace}>
            <div className={style.numbers}>
                <div className={style.row}>
                    <div className={style.col}></div>
                    <div className={`${style.col} ${style.nine}`}>9</div>
                    <div className={style.col}></div>
                </div>
                <div className={style.row}>
                    <div className={`${style.col} ${style.twelve}`}>12</div>
                    <div className={style.col}></div>
                    <div className={`${style.col} ${style.six}`}>6</div>
                </div>
                <div className={style.row}>
                    <div className={style.col}></div>
                    <div className={`${style.col} ${style.three}`}>3</div>
                    <div className={style.col}></div>
                </div>
            </div>
            <div className={style.center}></div>
            <div style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${degForHours}deg)`
            }} className={style.hours}>
            </div>
            <div style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${degForMinutes}deg)`
            }} className={style.minutes}>
            </div>
            <div style={{
                transformOrigin: '50% 100%',
                transform: `rotate(${degForSeconds}deg)`
            }} className={style.seconds}>
            </div>
        </div>
    )
}