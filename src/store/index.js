import {configureStore, createSlice} from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'movie',
    initialState: [],
    reducers: { //actions
        addMovie(state, action){
            state.push(action.payload)
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        reset(state, action){
            return []; //cannot do state = [];
        }
    }
})

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
            //action.payload === 'string' of song to remove
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        }
    },
    extraReducers: (builder) => {
        //watches for movie/reset action to reset state of song array
        builder.addCase(moviesSlice.actions.reset, (state, action) => {
            return []; //sets state to empty
        })
    }
})

//determines what keys state object has
const store = configureStore({
    reducer: {
        songs: songsSlice.reducer, //.reducer combines reducers from slice
        movies: moviesSlice.reducer
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
// store.dispatch(songsSlice.actions.addSong('A new song'));


export {store};

//export action creator -> SongPlaylist component
export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie, reset} = moviesSlice.actions;