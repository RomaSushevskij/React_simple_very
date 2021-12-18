import {useState} from "react";

export const OnOff:React.FC = (props) => {
    const [bulbValue, setBulbValue] = useState<'on' | 'off'>('on')

    const wrapper = {
        margin: '20px',
        display: 'flex',
        alignItems: 'center'
    };
    let styleOn = {
        width: '100px',
        height: '30px',
        border: '1px solid black',
        padding: '5px',
        fontWeight: 'bold',
        backgroundColor: bulbValue === 'on' ? 'lightgreen' : 'transparent'
    };
    let styleOff = {
        width: '100px',
        height: '30px',
        border: '1px solid black',
        padding: '5px',
        marginLeft: '3px',
        fontWeight: 'bold',
        backgroundColor: bulbValue === 'off' ? 'tomato' : 'transparent'
    };
    let styleBulb = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        borderRadius: '50%',
        marginLeft: '10px',
        backgroundColor: bulbValue === 'on' ? 'lightgreen' : 'tomato'
    };
    debugger
    return (
        <div style={wrapper}>
            <div onClick={() => setBulbValue('on')} style={styleOn}>On</div>
            <div onClick={()=> setBulbValue('off')} style={styleOff}>Off</div>
            <div style={styleBulb}></div>
        </div>
    )
}