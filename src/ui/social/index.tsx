import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

export default function Social() {
  return (
    <ul className="ms-social">
      <li>
        <Link className="item" href="/contact">
          <Icon icon="mdi:twitter" />
        </Link>
      </li>
      <li>
        <Link className="item" href="/contact">
          <Icon icon="mdi:instagram" />
        </Link>
      </li>
      <li>
        <Link className="item" href="/contact">
          <Icon icon="mdi:telegram" />
        </Link>
      </li>
      <li>
        <Link className="item" href="/contact">
          <Icon icon="gg:facebook" />
        </Link>
      </li>
    </ul>
  )
}
