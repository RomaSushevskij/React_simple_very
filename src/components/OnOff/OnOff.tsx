type OnOffPropsType = {
    /**
     * Value that indicates whether on bulb (true or false)
     */
    bulbValue: boolean
    /**
     * Callback that is called when On or Off has been clicked
     * @param bulbValue
     */
    setBulbValue: (bulbValue: boolean) => void
}
export const OnOff: React.FC<OnOffPropsType> = ({bulbValue, setBulbValue}) => {
    const onChangeBulbValue = (bulbValue: boolean)=> {
        setBulbValue(bulbValue)
    };
    let commonStyle = {
        width: '100px',
        height: '30px',
        border: '1px solid black',
        padding: '5px',
        fontWeight: 'bold',
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    };
    const wrapper = {
        margin: '20px',
        display: 'flex',
        alignItems: 'center'
    };
    let styleOn = {
        ...commonStyle,
        backgroundColor: bulbValue ? 'lightgreen' : 'transparent'
    };
    let styleOff = {
        ...commonStyle,
        marginLeft: '3px',
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