import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


const getCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => {
    return ({
        table: {
            category: categoryName
        }
    })
};

export default {
    title: 'Select',
    component: Select,
    argTypes: {
       id: {
           ...getCategoryObj('Main')
       },
        onChange: {
            ...getCategoryObj('Events')
        },
        items: {
            ...getCategoryObj('Main')
        }
    },
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                {name: 'white', value: '#ffffff'},
                {name: 'twitter', value: '#00aced'},
                {name: 'facebook', value: '#3b5998'},
                {name: 'socialNetwork', value: '#ff6347'},
            ],
        },
    },
} as ComponentMeta<typeof Select>;

const onChangeHandler = action('Select value was changed');

const Items = [
    {title: 'HTML', id: '1'},
    {title: 'CSS', id: '2'},
    {title: 'JS', id: '3'},
    {title: 'React', id: '4'},
    {title: 'Redux', id: '5'},
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;


export const SelectWithValueFromProps: ComponentStory<typeof Select> = (args) => {
    const [id, setId] = useState('2');

    return <Select {...args} id={id} onChange={setId}/>
};

SelectWithValueFromProps.args = {
    items: Items,
};
export const SelectWithoutValueFromProps: ComponentStory<typeof Select> = (args) => {
    const [id, setId] = useState(null);

    return <Select {...args} id={id} onChange={setId}/>
};

SelectWithoutValueFromProps.args = {
    items: Items
};
