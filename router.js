import React from "react"
import {HashRouter, Route, Routes} from "react-router-dom"

import {Container} from "react-bootstrap"

import {Footer} from "./compontents/Footer"

import {Home} from "./pages/Home"
import {About} from "./pages/Contact"


const defaultRoutes = [
    {
        element: <Home/>,
        path: '/',
        exact: true
    },
    {
        element: <About/>,
        path: '/about',
    },
    {
        element: <NotFound/>,
        path: '*'
    }
]

const Router = () => {
    return (
        <HashRouter>
            <Header/>
            <Container as='content'>
                <Routes>
                    {defaultRoutes.map((route, i) => {
                        return (
                            <Route key={i} {...route}/>
                        )
                    })}
                </Routes>
            </Container>
            <Footer/>
        </HashRouter>
    )
}

export default Router