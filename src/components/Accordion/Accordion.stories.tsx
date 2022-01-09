import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


const getCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => {
    return ({
        table: {
            category: categoryName
        }
    })
};

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            ...getCategoryObj('Colors'),
            control: 'color',
            defaultValue: 'black',
        },
        setCollapsedValue: {
            ...getCategoryObj('Events')
        },
        collapsed: {
            ...getCategoryObj('Main'),
            defaultValue: true
        },
        title: {
            ...getCategoryObj('Main')
        },
        items: {
            ...getCategoryObj('Main')
        }
    },
} as ComponentMeta<typeof Accordion>;

const Items = [
    {title: 'HTML', value: 1},
    {title: 'CSS', value: 2},
    {title: 'JS', value: 3},
    {title: 'React', value: 4},
    {title: 'Redux', value: 5},
];

const callback = action('collapsed value has been changed');
const onClickCallback = (value:string) => {
    alert(`Item with value ${value} was clicked`)
};

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;


export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    items: Items,
    setCollapsedValue: callback,
    onClick: onClickCallback
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    title: 'Menu',
    collapsed: false,
    items: Items,
    setCollapsedValue: callback,
    onClick: onClickCallback
};

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(false);

    return <Accordion {...args} collapsed={value} setCollapsedValue={() => setValue(!value)}/>
};
ModeChanging.args = {
    title: 'Technologies',
    items: Items,
    onClick: onClickCallback
};


