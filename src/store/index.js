import {configureStore} from "@reduxjs/toolkit";
import {songsReducer, addSong, removeSong} from "./slices/songsSlice";
import {moviesReducer, addMovie, removeMovie} from "./slices/moviesSlice";



//determines what keys state object has
const store = configureStore({
    reducer: {
        songs: songsReducer, //.reducer combines reducers from slice
        movies: moviesReducer
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

//export action creator -> SongPlaylist component
export {store, addSong, removeSong, addMovie, removeMovie};