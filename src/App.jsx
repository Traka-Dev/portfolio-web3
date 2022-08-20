import React from "react"
import {Intro} from './components/Intro'
import { Projects } from "./components/projects"
import "./app.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AboutUs } from "./components/AboutUs"

export const App = () => {
    return (
        <div>
            <Intro />
            <AboutUs />
            <Projects />
            <ToastContainer style={{ fontSize: "5rem" }} />
        </div>
    )
}