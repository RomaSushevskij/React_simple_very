import {accordionReducer, StateType, TOGGLE_COLLAPSE} from "./UnControlledAccordion";

test('after reducing state.collapsed should be true', () => {
    const state: StateType = {
        collapsedValue: false
    };
    const newState = accordionReducer(state, {type: TOGGLE_COLLAPSE});
    expect(newState.collapsedValue).toBe(true)
});
test('after reducing state.collapsed should be false', () => {
    const state: StateType = {
        collapsedValue: true
    };
    const newState = accordionReducer(state, {type: TOGGLE_COLLAPSE});
    expect(newState.collapsedValue).toBe(false)
});
test('after reducing should be error', () => {
    const state: StateType = {
        collapsedValue: true
    };
    expect(()=>{
        accordionReducer(state, {type: 'blabla'})
    }).toThrowError()
});
