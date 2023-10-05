



import {

    GET_BLOG_LIST_FAIL,
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_LIST_SEARCH_FAIL,
    GET_BLOG_LIST_SEARCH_SUCCESS
} from '../actions/types'

const initialState = {
    count: null,
    next: null,
    previous: null,
    blog_list: null,
    post: null,
    posts: null

}

export default function Blog(state=initialState, action) {

    const {type, payload} = action;

    switch(type) {
        case GET_BLOG_LIST_SUCCESS:
            return {
                ...state,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
                blog_list: payload.results.posts

            }
        
        case GET_BLOG_LIST_FAIL:
            return {
                ...state,
                count: null,
                next: null,
                previous: null,
                blog_list: null
            }
        case GET_BLOG_SUCCESS:
            return {
                ...state,
                post: payload.post
            }
        case GET_BLOG_FAIL:
            return {
                ...state,
                post: null
            }
        case GET_BLOG_LIST_SEARCH_FAIL:
            return {
                ...state,
                posts: null
            }
        case GET_BLOG_LIST_SEARCH_SUCCESS:
            return {
                ...state,
                count: payload.count,
                next: payload.next, 
                previous: payload.previous,
                posts: payload.results.filtered_posts
            }

        default: 
            return state
    }


}