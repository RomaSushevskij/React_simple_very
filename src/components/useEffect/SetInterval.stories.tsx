import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {SetInterval} from "./SetInterval";

export default {
    title: 'useEffect',
    component: SetInterval,
} as ComponentMeta<typeof SetInterval>;

const Template: ComponentStory<typeof SetInterval> = (args) => <SetInterval {...args}/>;
export const SetIntervalUseEffectExample = Template.bind({})