import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import { AboutPage, AdBlockerPage, ContactPage, FoodAppPage, HomePage, RideEasePage, WorkPage } from './Pages';

export default function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route exact path='/' element={ <HomePage /> }></Route>
        <Route exact path='/about' element={ <AboutPage /> }></Route>
        <Route exact path='/works' element={ <WorkPage /> }></Route>
        <Route exact path='/contact' element={ <ContactPage /> }></Route>
        <Route exact path='/works/rideEase' element={ <RideEasePage /> }></Route>
        <Route exact path='/works/adBlocker' element={ <AdBlockerPage /> }></Route>
        <Route exact path='/works/foodApp' element={ <FoodAppPage /> }></Route>
      </Routes>
    </Router>
  </>
  )
}


