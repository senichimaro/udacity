import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS =   'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

function addTweet(tweet){
    return {
        type: ADD_TWEET,
        tweet,
    }
}

export function receiveTweets(tweets){
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function toggleTweet({id, authedUser, hasLiked}){
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

/**
 * Async Actions
 */
export function handleToggleTweet(info){
    return (dispatch) => {
        // optimistic update
        dispatch(toggleTweet(info))
        
        return saveLikeToggle(info)
        .catch((e) => {
            console.warn('Error in handleToogleTweet:', e)
                dispatch(toggleTweet(info))
                alert('Error liking the Tweet. Please try again.')
            })
    }
}

export function handleAddTweet(text, replyingTo){
    // As second parameter is possible to receive getState
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())
        return saveTweet({
            text,
            author: authedUser,
            replyingTo
        })
            .then((tweet) => dispatch(addTweet(tweet)))
            .then(() => dispatch(hideLoading()))
    }
}