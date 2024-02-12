import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import { AboutPage, ContactPage, HomePage, ProjectDetailPage, WorkPage } from './Pages';

export default function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route exact path='/' element={ <HomePage /> }></Route>
        <Route exact path='/about' element={ <AboutPage /> }></Route>
        <Route exact path='/works' element={ <WorkPage /> }></Route>
        <Route exact path='/contact' element={ <ContactPage /> }></Route>
        <Route exact path='/:id' element={ <ProjectDetailPage /> }></Route>
      </Routes>
    </Router>
  </>
  )
}


