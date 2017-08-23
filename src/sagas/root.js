import { call, takeLatest, put } from 'redux-saga/effects'
import { REQUEST_LOGIN, CHANGE_AUTH, TICKETDTOS_GET, TICKETDTOS_RECIEVED, TICKET_GET, TICKET_RECIEVED } from '../actions'
import { authenticate } from '../actions'

const login = async (payload) => {
    try {
        const response = await fetch('http://localhost:3030/auth', {
            method: 'POST',
            body: payload,
        })
        const data = await response.json()
        return {
            isError: true,
            response: data
        };
    } catch (e) {
        return {
            isError: false,
            response: undefined
        };
    }
}

const fetchResources = async () => {
    try {
        const response = await fetch('http://localhost:3001/resources', { method: 'GET' })
        const data = await response.json()
        return {
            isError: false,
            response: data,
        };
    } catch (e) {
        return {
            isError: true,
            response: undefined
        };
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