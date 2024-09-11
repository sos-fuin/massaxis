import { image } from '@/assets'
import Social from '@/ui/social'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="ms-footer">
      <div className="ms-footer-wrap">
        <div className="ms-footer-logo">
          <Link href="/">
            <Image alt="logo" src={image.logoFooter} />
          </Link>
        </div>
        <ul className="ms-footer-menu">
          <li>
            <Link className="item" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="item" href="/privacy-policy">
              privacy policy
            </Link>
          </li>
          <li>
            <Link className="item" href="/#service">
              Services
            </Link>
          </li>
          <li>
            <Link className="item" href="/#pricing">
              pricing
            </Link>
          </li>
          <li>
            <Link className="item" href="/#why-choose-us">
              Why Chose Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="ms-footer-copyright">
        <p className="copyright">© massaxis 2024. All rights reserved </p>
        <Social />
      </div>
    </footer>
  )
}
