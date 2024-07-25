import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  console.log("reached this component")
  return (
    <div>
      <Link to="/mnm/" className='flexbox'>student</Link>
      <Link to="/mnm/faculty" className='flexbox'>teacher</Link>
    </div>
  )
}
