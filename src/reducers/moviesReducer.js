export default function moviesReducer(state = {
    loading : false,
    done    : false,
    movies  : [],
    error   : null
}, action) {

    switch(action.type) {

        case "FETCH_MOVIES_PENDING" : {
            return { state, loading: true }
            break;
        }

        case "FETCH_MOVIES_REJECTED" : {
            return { state, loading: false, error: action.payload }
            break;
        }

        case "FETCH_MOVIES_FULFILLED" : {
            return { state, loading: false, done: true, movies: action.payload.data.results }
            break;
        }
    }

    return state

}