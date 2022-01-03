import {Rating, RatingValueType} from "./Rating";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const setRatingValue = action('value of rating has been changed ');

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    setRatingValue: setRatingValue
};

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    setRatingValue: setRatingValue
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    setRatingValue: setRatingValue
};

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    setRatingValue: setRatingValue
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    setRatingValue: setRatingValue
};

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    setRatingValue: setRatingValue
};

export const RatingChanging:ComponentStory<typeof Rating> = (args) => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    return <Rating {...args} value={ratingValue} setRatingValue={setRatingValue}/>
};

