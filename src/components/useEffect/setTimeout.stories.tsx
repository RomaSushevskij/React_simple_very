import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {SetTimeout} from "./setTimeout";

export default {
    title: 'useEffect',
    component: SetTimeout,
} as ComponentMeta<typeof SetTimeout>;

const Template: ComponentStory<typeof SetTimeout> = (args) => <SetTimeout {...args}/>;
export const SetTimeoutUseEffectExample = Template.bind({})