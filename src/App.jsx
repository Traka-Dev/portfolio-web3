import React from "react"
import "./app.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
    return (
        <div>
            <h1>Hola :D!</h1>
            <ToastContainer style={{ fontSize: "5rem" }} />
        </div>
    )
}