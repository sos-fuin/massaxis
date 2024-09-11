import { image } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function RecentPost() {
  return (
    <li>
      <Link className="sc-card-lists-items" href="/blog-details">
        <div className="sc-card-lists-items-image">
          <Image src={image.blog1} alt="blog-1" />
        </div>
        <div className="sc-card-lists-items-content">
          <h1 className="sc-card-lists-items-title">Seamlessly monetize centa material bleeding.</h1>
          <p className="sc-card-lists-items-date">21 Jan 2023</p>
        </div>
      </Link>
    </li>
  )
}
