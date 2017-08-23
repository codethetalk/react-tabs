import { TICKETDTOS_RECIEVED, TICKET_UPDATED } from '../actions'

export default function (state = { ticketDTOs: [], tickets: [] }, action) {
    switch (action.type) {
        case TICKETDTOS_RECIEVED:
            return action.payload
        case TICKET_UPDATED:
            state.ticketDTOs.map(t => {
                if (t.id === action.payload.id) {
                    Object.assign(t, action.payload)
                }
            })
            debugger
            return state
        default:
            return state
    }
}