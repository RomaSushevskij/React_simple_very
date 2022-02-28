import {Counter} from "../smartUseState/smartUseState";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {CounterWithUseEffect} from "./useEffectBasics";
import React from "react";

export default {
    title: 'useEffect',
    component: CounterWithUseEffect,
} as ComponentMeta<typeof CounterWithUseEffect>;

const Template: ComponentStory<typeof CounterWithUseEffect> = (args) => <CounterWithUseEffect {...args}/>;
export const BasictUseEffectExample = Template.bind({})