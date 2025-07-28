'use client'

import { Provider } from 'react-redux'
import React from 'react'
import store from './redux/store'


export default function Storeprovider({ children }) {
    return (
        <Provider store={store}>
            {children}

        </Provider>
    )
}
