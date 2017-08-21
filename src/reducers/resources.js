import { TICKETDTOS_RECIEVED } from '../actions'

export default function (state = { ticketDTOs: [], tickets: [] }, action) {
    switch (action.type) {
        case TICKETDTOS_RECIEVED:
            return action.payload
        default:
            return state
    }
}