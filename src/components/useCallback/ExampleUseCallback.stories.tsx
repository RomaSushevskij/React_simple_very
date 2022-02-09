import {SelectsWithUseMemo} from "../UseMemo/SelectsWithUseMemo";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {BooksWithCounter} from "./ExampleUseCallback";
import {UnControlledAccordion} from "../UnControlledAccordion/UnControlledAccordion";
import React, {useState} from "react";

export default {
    title: 'useCallback',
    component: BooksWithCounter,
} as ComponentMeta<typeof BooksWithCounter>;

const Template: ComponentStory<typeof BooksWithCounter> = (args) => <BooksWithCounter {...args} />;

export const ExampleUseCallbackBooks: ComponentStory<typeof BooksWithCounter> = (args) => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'CSS', 'JS', 'React'])
    return (
        <BooksWithCounter {...args} counter={counter} books={books} setCounter={setCounter} setBooks={setBooks}/>
    )
}