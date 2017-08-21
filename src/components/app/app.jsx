import React from 'react'
import { Route } from 'react-router-dom'

import requireAuth from '../../containers/requireAuth'
import Ticket from '../ticket/ticket'

export default () => {
    return (
        <div>
            <Route path="/ticket/:id" component={requireAuth(Ticket)} />
        </div>
    )
}
