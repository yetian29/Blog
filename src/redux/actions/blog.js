
import {

    GET_BLOG_LIST_FAIL,
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_LIST_SEARCH_FAIL,
    GET_BLOG_LIST_SEARCH_SUCCESS
} from './types'
import axios from 'axios';

export const get_blog_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }

    }
    catch (error) {
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
  

}

export const get_blog_list_page = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/?p=${page}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }

    }
    catch (error) {
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
  

}


export const get_blog = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_SUCCESS,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: GET_BLOG_FAIL
            })
        }

    }
    catch (error) {
        dispatch({
            type: GET_BLOG_FAIL
        })
    }
  

}

export const get_blog_list_category = (category_id) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/category/${category_id}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }

    }
    catch (error) {
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
  

}

export const get_blog_list_category_page = (category_id, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/category/${category_id}?p=${page}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }

    }
    catch (error) {
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
  

}


export const blog_search = (search_term) => async dispatch => {


    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/${search_term}`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SEARCH_SUCCESS,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: GET_BLOG_LIST_SEARCH_FAIL
            })
        }
    }
    catch(error) {
        dispatch({
            type: GET_BLOG_LIST_SEARCH_FAIL
        })
    }
}

export const blog_search_page = (search_term, page) => async dispatch => {


    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/${search_term}?p=${page}`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SEARCH_SUCCESS,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: GET_BLOG_LIST_SEARCH_FAIL
            })
        }
    }
    catch(error) {
        dispatch({
            type: GET_BLOG_LIST_SEARCH_FAIL
        })
    }
}
