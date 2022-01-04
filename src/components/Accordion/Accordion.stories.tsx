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
        }
    },
} as ComponentMeta<typeof Accordion>;

const callback = action('collapsed value has been changed')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;


export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    setCollapsedValue: callback
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    title: 'Menu',
    collapsed: false,
    setCollapsedValue: callback
};

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(false);

    return <Accordion {...args} collapsed={value} setCollapsedValue={() => setValue(!value)}/>
};
ModeChanging.args = {
    title: 'Citizens'
};


