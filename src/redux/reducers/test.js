let initState = {test: true}

export default (state = initState, action) => {
    switch (action.type) {
        case "TEST":
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}