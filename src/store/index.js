import {configureStore, createSlice} from "@reduxjs/toolkit";


const songsSlice = createSlice({
    name: 'song',
    initialState: [], //defines initial state
    reducers: {     //mini-reducers
        // 'song' from name: + '/' + 'addSong' = 'song/addSong' becomes function call from .dispatch 'type' parameter

        //state is only state managed by this reducer, not overall state
        addSong(state, action){
            state.push(action.payload)
        },
        removeSong(state, action){
            //
        }
    }
})

//determines what keys state object has
const store = configureStore({
    reducer: {
        songs: songsSlice.reducer //.reducer combines reducers from slice
    }
});

//get state of store
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

//adds song to state array
// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New song'
// });

store.dispatch(songsSlice.actions.addSong('A new song'));

export {store};
