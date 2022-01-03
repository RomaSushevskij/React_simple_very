import {UnControlledRating, RatingValueType} from "./UnControlledRating";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
} as ComponentMeta<typeof UnControlledRating>;

const callback = action('value of rating has been changed inside component');

const Template: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating {...args} />;

export const EmptyUnControlledRating = Template.bind({});
EmptyUnControlledRating.args = {
    defaultValue: 0,
    setRatingValueApp: callback
};

export const UnControlledRating1 = Template.bind({});
UnControlledRating1.args = {
    defaultValue: 1,
    setRatingValueApp: callback
};

export const UnControlledRating2 = Template.bind({});
UnControlledRating2.args = {
    defaultValue: 2,
    setRatingValueApp: callback
};

export const UnControlledRating3 = Template.bind({});
UnControlledRating3.args = {
    defaultValue: 3,
    setRatingValueApp: callback
};

export const UnControlledRating4 = Template.bind({});
UnControlledRating4.args = {
    defaultValue: 4,
    setRatingValueApp: callback
};

export const UnControlledRating5 = Template.bind({});
UnControlledRating5.args = {
    defaultValue: 5,
    setRatingValueApp: callback
};

export const UnControlledRatingChanging = Template.bind({});

