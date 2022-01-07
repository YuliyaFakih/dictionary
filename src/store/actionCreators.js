import axios from 'axios'

export const fetchWord = (word, lang) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_WORD'})
            const response = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/'+ lang.toLowerCase() +'/' + word)
            setTimeout(() => {
                dispatch({type: 'FETCH_WORD_SUCCESS', payload: response.data})
            }, 500)
        }catch(e) {
            dispatch({type: 'FETCH_WORD_ERROR', payload: 'Not found'})
        }
    
    }
}