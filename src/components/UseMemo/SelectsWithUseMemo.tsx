import React, {useMemo} from "react";
import {NewMessageCounter} from "../ReactMemoExample/ReactMemoExample";
import {Select} from "../Select/Select";

type CityType = {
    id: any,
    title: string,
    country: string,
    citizens: number
}

export type SelectsWithUseMemoType = {
    counter: number
    id_1: any
    id_2: any
    id_3: any
    onChange_1: (id: any) => void
    onChange_2: (id: any) => void
    onChange_3: (id: any) => void
    setCounter: (counter: number) => void
    items: CityType[]
}
export const SelectsWithUseMemo = (props: SelectsWithUseMemoType) => {

    const cities_1 = useMemo(() => {
        return props.items.filter(city => city.title.indexOf('o') > -1)
    }, [props.items])
    const cities_2 = useMemo(() => {
        return props.items.filter(city => city.country === 'Belarus')
    }, [props.items])
    const cities_3 = useMemo(() => {
        return props.items.filter(city => city.citizens > 30000)
    }, [props.items])

    return (
        <div>
            <div>
                <button onClick={() => props.setCounter(props.counter + 1)}>INC</button>
                <button onClick={() => props.setCounter(0)}>RESET</button>
                <NewMessageCounter counter={props.counter}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    Only with letter 'o'
                    <Select id={props.id_1} onChange={props.onChange_1} items={cities_1}/>
                </div>
                <div>
                    Only in country 'Belarus'
                    <Select id={props.id_2} onChange={props.onChange_2} items={cities_2}/>
                </div>
                <div>
                    Only with citizens more then 30000 people
                    <Select id={props.id_3} onChange={props.onChange_3} items={cities_3}/>
                </div>
            </div>
        </div>

    )
}
