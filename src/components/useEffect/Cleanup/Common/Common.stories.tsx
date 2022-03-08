import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {CommonExample} from "./Common";

export default {
    title: 'useEffect',
    component: CommonExample,
} as ComponentMeta<typeof CommonExample>;

const Template: ComponentStory<typeof CommonExample> = (args) => <CommonExample {...args}/>;
export const CommonCleanUpUseEffectExample = Template.bind({})