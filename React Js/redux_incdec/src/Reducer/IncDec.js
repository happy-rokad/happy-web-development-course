const initialState = { count: 0 }

const IncDec = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload };
        case 'DECREMENT':
            return { count: state.count - action.payload };
        default:
            return state;
    }
}

export default IncDec;