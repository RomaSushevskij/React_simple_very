import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
} as ComponentMeta<typeof UnControlledOnOff>;

const callback = action('bulbValue value has been changed');

const Template: ComponentStory<typeof UnControlledOnOff> = (args) => <UnControlledOnOff {...args} />;


export const OnMode = Template.bind({});
OnMode.args = {
    setBulbValueApp: callback,
    defaultOn: true
};

export const OffMode = Template.bind({});
OffMode.args = {
    setBulbValueApp: callback,
    defaultOn: false
};




