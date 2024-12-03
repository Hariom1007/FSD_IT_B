import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Quiz from './quiz'

export const Home = () => {
  return (
    <div>
        My Quiz App
        <Header/>
        <Quiz/>
        <Footer/>
        
    </div>
  )
}