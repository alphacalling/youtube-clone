import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
            state.messages.splice(20, 2);
        },
    },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
