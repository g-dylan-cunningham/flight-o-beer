let initState = {}

export default (state = initState, action) => {
    switch (action.type) {
        case "FETCH_ALL_SYMBOLS_FULFILLED":
            return {
                ...state,
                symbols: action.payload.data
            };
        case "FETCH_ALL_SYMBOLS_PENDING":
            return {
                ...state
            };
        case "FETCH_ALL_SYMBOLS_REJECTED":
            return {
                ...state
            };
        default:
            return {
                ...state
            }
    }
}