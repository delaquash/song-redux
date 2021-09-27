/* eslint-disable import/no-anonymous-default-export */
export default (state=[], action) => {
    const { payload, type} = action
    switch (type) {
        case 'FETCH_USERS':
            return [...state, payload]
        default:
            return state;
    }
}