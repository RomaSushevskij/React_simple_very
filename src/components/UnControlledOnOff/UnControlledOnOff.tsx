import {useState} from "react";

type  UnControlledOnOffPropsType = {
    setBulbValueApp: (bulbValue: boolean) => void
}
export const UnControlledOnOff: React.FC<UnControlledOnOffPropsType> = ({setBulbValueApp}) => {
    const [bulbValue, setBulbValue] = useState<boolean>(true);
    const onChangeBulbValue = (bulbValue: boolean)=> {
        setBulbValue(bulbValue);
        setBulbValueApp(bulbValue)
    };

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
        backgroundColor: bulbValue ? 'lightgreen' : 'transparent'
    };
    let styleOff = {
        width: '100px',
        height: '30px',
        border: '1px solid black',
        padding: '5px',
        marginLeft: '3px',
        fontWeight: 'bold',
        backgroundColor: !bulbValue ? 'tomato' : 'transparent'
    };
    let styleBulb = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        borderRadius: '50%',
        marginLeft: '10px',
        backgroundColor: bulbValue ? 'lightgreen' : 'tomato'
    };
    debugger
    return (
        <div style={wrapper}>
            <div onClick={() => onChangeBulbValue(true)} style={styleOn}>On</div>
            <div onClick={() => onChangeBulbValue(false)} style={styleOff}>Off</div>
            <div style={styleBulb}></div>
        </div>
    )
}