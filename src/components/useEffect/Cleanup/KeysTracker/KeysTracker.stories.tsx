import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {KeysTrackerExample} from "./KeysTracker";

export default {
    title: 'useEffect',
    component: KeysTrackerExample,
} as ComponentMeta<typeof KeysTrackerExample>;

const Template: ComponentStory<typeof KeysTrackerExample> = (args) => <KeysTrackerExample {...args}/>;
export const KeysTrackerUseEffectExample = Template.bind({})