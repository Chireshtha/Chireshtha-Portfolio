import React from 'react'
import HomePage from './HomePage'
import AboutMePage from './AboutMePage'
import MyProjectsPage from './MyProjectsPage'
import MyResumePage from './MyResumePage'
import MyContactPage from './MyContactPage'

const SinglePagePortfolio = () => {
  return (
    <div>
      <section id='home'><HomePage /></section>
      <section id='about-me'><AboutMePage /></section>
      <section id='my-projects'><MyProjectsPage /></section>
      <section id='my-resume'><MyResumePage /></section>
      <section id='my-contacts'><MyContactPage /></section>
    </div>
  )
}

export default SinglePagePortfolio
