import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from 'react'
import {Counter} from "./smartUseState";

export default {
    title: 'smartUseState',
    component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args}/>;
export const OptimisationUseState = Template.bind({})

