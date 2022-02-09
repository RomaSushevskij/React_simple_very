import React, {useCallback, useMemo} from "react";


export type BooksWithCounterType = {
    counter: number
    books: string []
    setCounter: (counter: number) => void
    setBooks: (books: Array<string>) => void
}

export const BooksWithCounter = ({counter, books, setCounter, setBooks}: BooksWithCounterType) => {
    console.log('BooksWithCounterRender')
    // alternative example with useMemo
    // const addBook = useMemo(() => {
    //     return (
    //         () => {
    //             setBooks(['Redux' + new Date().getTime(), ...books])
    //         }
    //     )
    // }, [books])

    //example with useCallback
    const addBook = useCallback(() => {
        setBooks(['Redux' + new Date().getTime(), ...books])
    }, [books])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>INC</button>
            <button onClick={() => setCounter(0)}>RESET</button>
            <Counter counter={counter}/>
            <Books books={books} addBook={addBook}/>
        </div>
    )
}

type CounterPropsType = {
    counter: number
}

const Counter = React.memo((props: CounterPropsType) => {
    console.log('CounterRender')
    return (
        <div>
            <h3>{props.counter}</h3>
        </div>
    )
})


type UsersPropsType = {
    books: string[]
    addBook: () => void
}

export const Books = React.memo(({books, addBook, ...props}: UsersPropsType) => {
    console.log('BooksRender')
    return (
        <div>
            <button onClick={addBook}>Add book</button>
            {books.map(u => <div key={u}>{u}</div>)}
        </div>
    )
})
