import { call, takeLatest, put } from 'redux-saga/effects'
import { REQUEST_LOGIN, CHANGE_AUTH, TICKETDTOS_GET, TICKETDTOS_RECIEVED, TICKET_GET, TICKET_RECIEVED } from '../actions'
import { authenticate } from '../actions'

const login = async (payload) => {
    try {
        const endpoint = payload.email ? '' : '/authenticate'
        const response = await fetch(`http://localhost:8080/api/users${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        localStorage.setItem('react-tabs-auth', JSON.stringify(data))
        return {
            isError: false,
            response: data
        }
    } catch (e) {
        return {
            isError: true,
            response: undefined
        }
    }
}

const fetchResources = async () => {
    try {
        const storedAccess = JSON.parse(localStorage.getItem('react-tabs-auth'))
        const response = await fetch('http://localhost:8080/api/tickets', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${storedAccess.access_token || storedAccess.id_token}`
            }
        })
        const data = await response.json()
        return {
            isError: false,
            response: data,
        }
    } catch (e) {
        return {
            isError: true,
            response: undefined
        }
    }
}


function* loginSaga({ payload: { fields, callback } }) {
    const { isError } = yield call(login, fields)
    if (!isError) {
        yield put({ type: CHANGE_AUTH, payload: { authenticated: true } })
        yield put({ type: TICKETDTOS_GET })
        callback()
    }
}

function* fetchTicketDtosSaga(payload) {
    const { isError, response } = yield call(fetchResources)
    if (!isError) {
        yield put({
            type: TICKETDTOS_RECIEVED, payload: {
                ticketDTOs: response
            }
        })
    }
}

function* fetchTicketSaga(payload) {
    const { isError, response } = yield call(fetchResources)
    if (!isError) {
        yield put({
            type: TICKET_RECIEVED, payload: {
                ticketDTOs: response
            }
        })
    }
}

export default function* root() {
    yield takeLatest(REQUEST_LOGIN, loginSaga)
    yield takeLatest(TICKETDTOS_GET, fetchTicketDtosSaga)
    yield takeLatest(TICKET_GET, fetchTicketSaga)

}