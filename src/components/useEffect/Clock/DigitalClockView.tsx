type DigitalClockViewPropsType = {
    date: Date
}

export const DigitalClockView = ({date}: DigitalClockViewPropsType) => {
    const digitalStyle = {
        width: 'max-content',
        padding: '0 20px',
        border: '2px solid #FF4785',
        borderRadius: '15px',
        fontSize: '20px'
    }
    return (
        <div style={digitalStyle}>
            <h2 style={{color: '#FF4785'}}>{date.toLocaleTimeString()}</h2>
        </div>
    )
}