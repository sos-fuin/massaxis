'use client'
import React from 'react'

export default function Tost() {
  const [show, setShow] = React.useState(true)
  return (
    <div className={`ms-tost ${show ? 'active' : ''}`} onClick={() => setShow(false)}>
      <div className="ms-tost-title">
        <h4 className="title">Arman Alif Somoy</h4>
        <p className="text">Recently Signed Up From Bangladesh</p>
      </div>
      <p className="ms-tost-time">5 Mins ago</p>
    </div>
  )
}
