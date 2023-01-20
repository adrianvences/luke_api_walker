import React from 'react'
import NavBar from './components/NavBar';
import { Navigate,Routes,Route } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import StarWars from './components/StarWars';
import './bootstrap.min-2.css'
import OnePerson from './components/OnePerson';
import OnePlanet from './components/OnePlanet';


function App() {
  return (

    <>
    <NavBar /> 
    <div className='container'>
      <Routes>
        <Route path='/' element={<StarWars />} >
        <Route path='People/' element={<People />}>
          <Route path= ':id' element={<OnePerson />} />
        </Route>
        <Route path='Planets/' element={<Planets />}>
          <Route path= ':id' element={<OnePlanet />} />
        </Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
