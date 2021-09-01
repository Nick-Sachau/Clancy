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
        url: '/products',
        text: 'Products',
        page:<Services/>
    },
    {
        id: 5,
        url: '*',
        text: 'Error',
        page: <Error/>
    }
]

export const slides = [
    {
        src: "../images/slide1.jpeg",
        name: "slide1",
    },
    {
        src: "../images/slide2.jpeg",
        name: "slide2",
    },
    {
        src: "../images/slide3.jpeg",
        name: "slide3",
    },
]