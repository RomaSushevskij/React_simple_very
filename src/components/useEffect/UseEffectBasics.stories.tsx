import {ComponentMeta, ComponentStory} from "@storybook/react";

import React from "react";
import {CounterWithUseEffect} from './UseEffectBasics'

export default {
    title: 'useEffect',
    component: CounterWithUseEffect,
} as ComponentMeta<typeof CounterWithUseEffect>;

const Template: ComponentStory<typeof CounterWithUseEffect> = (args) => <CounterWithUseEffect {...args}/>;
export const BasictUseEffectExample = Template.bind({})