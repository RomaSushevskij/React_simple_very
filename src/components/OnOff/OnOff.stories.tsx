import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callback = action('bulbValue value has been changed');

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;


export const OnMode = Template.bind({});
OnMode.args = {
    bulbValue: true,
    setBulbValue: callback
};

export const OffMode = Template.bind({});
OffMode.args = {
    bulbValue: false,
    setBulbValue: callback
};

export const ModeChanging:ComponentStory<typeof OnOff> = (args) => {
    const [bulbValue, setBulbValue] = useState<boolean>(true);

    return <OnOff {...args} bulbValue={bulbValue} setBulbValue={setBulbValue}/>
};



