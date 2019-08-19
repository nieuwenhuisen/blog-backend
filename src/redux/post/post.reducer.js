import PostActionTypes from './post.types';

const INITIAL_STATE = {
    posts: null,
    isFetching: false,
    errorMessage: '',
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS_START:
            return {
                ...state,
                isFetching: true
            };
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.payload['hydra:member'],
            };
        case PostActionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
