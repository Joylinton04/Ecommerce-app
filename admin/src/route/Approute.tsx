import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Listitems from '@/pages/Listitems';
import Layout from '@/pages/Layout';

const Approute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/list-items',
                element: <Listitems/>
            }
        ]
    },
])

export default Approute;