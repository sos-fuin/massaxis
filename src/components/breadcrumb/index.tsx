import Image from 'next/image'
import Link from 'next/link'
import { Motion } from '../motion'
import bg from './bg.svg'

export default function BreadCrumb({ title }: { title: string }) {
  return (
    <Motion>
      <div className="ms-breadcrumb">
        <div className="ms-breadcrumb-bg">
          <Image className="bg" alt="banner" src={bg} />
        </div>
        <h1 className="ms-breadcrumb-title">{title}</h1>
        <ul className="ms-breadcrumb-menu">
          <li>
            <Link className="item" href="/">
              Home
            </Link>
          </li>
          <li>
            <span className="item">{title}</span>
          </li>
        </ul>
      </div>
    </Motion>
  )
}
