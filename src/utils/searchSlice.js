import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {},
    reducers: {
        cacheResult: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }
});
export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer; 