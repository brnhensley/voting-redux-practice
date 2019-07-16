export default (state = [], action) {
    switch (action.type) {
        case 'ADD_LINK':
            return [...state, action.value];
        default:
            return state
    }
}
