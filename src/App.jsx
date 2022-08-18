import React from "react"
import {Intro} from './components/Intro'
import "./app.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
    return (
        <div>
            <Intro />
            <ToastContainer style={{ fontSize: "5rem" }} />
        </div>
    )
}