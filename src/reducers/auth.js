import { CHANGE_AUTH } from '../actions'

export default function (state = { authenticated: false }, action) {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.payload
        default:
            return state
    }
}