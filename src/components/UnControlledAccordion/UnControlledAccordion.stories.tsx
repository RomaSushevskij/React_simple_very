import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
} as ComponentMeta<typeof UnControlledAccordion>;


const Template: ComponentStory<typeof UnControlledAccordion> = (args) => <UnControlledAccordion {...args} />;


export const ModeChanging = Template.bind({});

ModeChanging.args = {
    title: 'Lessons'
};


