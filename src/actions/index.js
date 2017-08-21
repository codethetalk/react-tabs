export const CHANGE_AUTH = 'change_auth'
export const REQUEST_LOGIN = 'request_login'
export const TICKETDTOS_GET = 'ticketdtos_get'
export const TICKETDTOS_RECIEVED = 'ticketdtos_recieved'
export const TICKET_GET = 'ticket_get'
export const TICKET_RECIEVED = 'ticket_recieved'

export const authenticate = payload => {
    return {
        type: CHANGE_AUTH,
        payload
    }
}

export const requestLogin = payload => ({
    type: REQUEST_LOGIN,
    payload,
})

export const getTicketDtos = payload => ({
    type: TICKETDTOS_GET,
    payload,
})

export const recievedTicketDtos = payload => ({
    type: TICKETDTOS_RECIEVED,
    payload,
})

export const getTicket = payload => ({
    type: TICKET_GET,
    payload,
})

export const recievedTicket = payload => ({
    type: TICKET_RECIEVED,
    payload,
})