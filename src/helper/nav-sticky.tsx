'use client'

import React from 'react'

export function NavSticky({ children }: { children: React.ReactNode }) {
  /* this is for sticky 
    ## client requirement is changed
    ## this will be fixed 
    ## example sticky full  code
    ## className={`msxis-nav ${isSticky ? 'sticky' : ''}`}

      import React, { useEffect, useState } from 'react'
      
      const [, setSticky] = useState(false)

      const handleScroll = () => {
        if (window.scrollY > 140) {
          setSticky(true)
        } else {
          setSticky(false)
        }
      }

      useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])
      
   */

  return <nav className={`msxis-nav  sticky for-fixed`}>{children}</nav>
}
