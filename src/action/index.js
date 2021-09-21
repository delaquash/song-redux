import jsonPlaceHolder from "../api/jsonPlaceHolder";


// Action Creators
// This action creator is for the select song redux tutorial
// export const selectSong = (song) => {

// //  Return an action 
// return {
//     type: 'SONG_SELECTED',
//     payload: song
//     };
// };



// This action creator is for the axios and jsonplaceholder tutorial

// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceHlder.get('/post')
//         dispatch ({
//             type: 'FETCH_POSTS',
//             payload: response
//         });
//     }
// };

// from redux thunk source code on github, we can see that a function was called inside another function...
// The above examplke can be broken down to this below

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch ({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}


// Action creator to fetch a single user
export const fetchUsers = (id) => async dispatch =>  {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type : 'FETCH_USERS',
        payload: response.data
    })
}