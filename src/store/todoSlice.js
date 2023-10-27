import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        add(state, action) {},
        remove(state, action) {},
        toggle(state, action) {},
    },
})