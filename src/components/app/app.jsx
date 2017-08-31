import React from 'react'
import { Route } from 'react-router-dom'
import Ticket from '../ticket/ticket'
import Header from '../header/header'

export default () => {
    return (
        <div>
            <Header />
            <Route path="/ticket/:id" component={Ticket} />
        </div>
    )
}
