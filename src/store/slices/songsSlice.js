import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../actions";


const songsSlice = createSlice({
    name: 'song',
    initialState: [], //defines initial state
    reducers: {     //mini-reducers/actions
        // 'song' from name: + '/' + 'addSong' = 'song/addSong' becomes function call from .dispatch 'type' parameter
        //state is only state managed by this reducer, not overall state
        addSong(state, action){
            state.push(action.payload)
        },
        removeSong(state, action){
            //action.payload === 'string' of song to remove
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        }
    },
    extraReducers: (builder) => {
        //watches for reset action to reset state of song array
        builder.addCase(reset, (state, action) => {
            return []; //sets state to empty
        })
    }
})

export const {addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;