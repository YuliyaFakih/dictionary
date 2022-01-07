const FETCH_WORD = 'FETCH_WORD';
const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS';
const FETCH_WORD_ERROR = 'FETCH_WORD_ERROR';

const initialState = {
    word: [],
    loading: false,
    error: null
}

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_WORD: 
            return {word: [], loading: true, error: null}
        case FETCH_WORD_SUCCESS:
            return {word: action.payload, loading: false, error: null}
        case FETCH_WORD_ERROR:
            return {word: [], loading: false, error: action.payload}
        default: return state;
    }
}