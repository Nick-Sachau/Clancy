import React from 'react'
import { About, Error, Home, Services } from '../Pages'

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        page: <Home/>
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
        page: <About/>
    },
    {
        id: 3,
        url: '/services',
        text: 'Services',
        page:<Services/>
    },
    {
        id: 5,
        url: '*',
        text: 'Error',
        page: <Error/>
    }
]