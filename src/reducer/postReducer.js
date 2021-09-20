/* eslint-disable import/no-anonymous-default-export */
export default (state=[], action)=> {
    // if(action.type === 'FETCH_POSTS') {
    //     return action.payload;
    // }
    // return state;

    // Rewriting the above code syntax in switch statement
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload
        default:
            return state;
    }
};