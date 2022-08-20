import React from "react"
import profile from "../../../public/assets/profile.png"
import "./intro.css"

export const Intro = () => {
  return (
    <div className="intro__container">
      <div className="intro-profile__container">
        <div className="profile_wrapper">
          <img
            className="intro-profile__img"
            src={profile}
            alt="Jorge Luis Jaime Sánchez"
          />
        </div>
        <div className="intro-title__container">
          <h1 className="intro-title__title">Jorge Luis Jaime Sánchez</h1>
          <h2 className="intro-title__subtitle">Web3 Developer</h2>
        </div>
      </div>
      <div className="intro-social__container">
        <h2 className="section-title">Social Media</h2>
        <div className="intro-social__container--links">
          <a href="#" target="_blank">
            Github
          </a>
          <a href="#" target="_blank">
            Discord
          </a>
          <a href="#" target="_blank">
            Linkin
          </a>
        </div>
      </div>
    </div>
  )
}
