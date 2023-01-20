import React from 'react'
import {Outlet} from 'react-router-dom'
import Form from './Form'


function StarWars() {
  return (
    <>
    <Form />
    <Outlet />
    </>
  )
}

export default StarWars