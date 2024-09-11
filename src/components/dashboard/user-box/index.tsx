import { image } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Props {
  tide?: 's-1' | 's-2' | 'default'
}

export function UserList({ tide }: Props) {
  return (
    <ul className={`db-u-group ${tide}`}>
      <li>
        <Link href="#" className="u-item">
          <Image alt="user" src={image.u1} />
        </Link>
      </li>
      <li>
        <Link href="#" className="u-item">
          <Image alt="user" src={image.u1} />
        </Link>
      </li>
      <li>
        <Link href="#" className="u-item">
          <Image alt="user" src={image.u1} />
        </Link>
      </li>

      <li>
        <div className="u-item lst">
          <span>+10</span>
        </div>
      </li>
    </ul>
  )
}
