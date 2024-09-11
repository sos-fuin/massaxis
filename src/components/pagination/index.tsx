import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import './pagination.scss'

export default function Pagination() {
  return (
    <ul className="ms-pagination">
      <li>
        <Link className="p-item icon " href="/">
          <Icon icon="iconamoon:arrow-left-2" />
        </Link>
      </li>
      <li>
        <Link className="p-item active" href="/">
          1
        </Link>
      </li>
      <li>
        <Link className="p-item" href="/">
          2
        </Link>
      </li>
      <li>
        <Link className="p-item" href="/">
          3
        </Link>
      </li>
      <li>
        <Link className="p-item  icon " href="/">
          <Icon icon="iconamoon:arrow-right-2" />
        </Link>
      </li>
    </ul>
  )
}
