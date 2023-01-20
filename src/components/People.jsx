import React from 'react'
import { Outlet } from 'react-router-dom'

function People() {
  return (
    <div className="card">
      <div className="card-body">
        <h1>People</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default People