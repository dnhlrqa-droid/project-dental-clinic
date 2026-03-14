import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Doctor from './components/Doctor'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import QuickLinks from './components/QuickLinks'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
        <Doctor />
        <Services />
        <BookingForm />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  )
}
