import { combineReducers } from 'redux';

const songsReducer = ()=> {
    return [
        {title: "Lie", duration: "4:03"},
        {title: "Happiness",  duration:"3:45"},
        {title: "Go Slow", duration: "5:17"},
        {title: "Rush", duration: "3:41"},
        {title: "Songs of angels", duration:"5:01"}
    ];
};
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})