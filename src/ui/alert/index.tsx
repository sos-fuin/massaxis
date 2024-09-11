'use client'
import { image } from '@/assets'
import Image from 'next/image'
import React from 'react'

export default function Alert() {
  const [show, setShow] = React.useState(true)
  return (
    <div className={`ms-alert ${show ? 'active' : ''}`}>
      <div className="img mb-12">
        <Image src={image.u1} alt="alert" />
      </div>
      <h3 className="title mb-12">Need help?</h3>
      <p className="text">No problem. Chat with our sales experts or call us at 0111111.</p>

      <div className="action">
        <button className="btn-primary">Lets Chat</button>
        <button className="btn-outline" onClick={() => setShow(false)}>
          No Thanks
        </button>
      </div>
    </div>
  )
}
