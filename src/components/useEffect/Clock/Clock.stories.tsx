import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'useEffect',
    component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => {
    const [mode, setMode] = useState<'digital' | 'analog'>('digital')
    const setClockMode = () => {
        setMode(mode === 'analog' ? 'digital' : 'analog')
    }
    return <Clock mode={mode} setMode={setClockMode}/>
}
export const ClockUseEffectExample = Template.bind({})