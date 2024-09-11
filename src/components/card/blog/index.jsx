import { image } from '@/assets'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

export function BLog() {
  return (
    <div className="ms-blog-item">
      <div className="img">
        <Link href="/blog-details">
          <Image src={image.b1} alt="blog" />
        </Link>
      </div>
      <div className="content">
        <div className="u-times">
          <div className="u-icon-box">
            <span className="icon">
              <Icon icon="heroicons:user-plus" />
            </span>
            <span className="text">Admin</span>
          </div>
          <div className="u-icon-box">
            <span className="icon">
              <Icon icon="heroicons:clock" />
            </span>
            <span className="text">21 Jan 2024</span>
          </div>
        </div>
        <Link className="title" href="/blog-details">
          Work while you work, play while you play
        </Link>
        <p className="desc">
          We make daily use products more affordable & accessible for a billion Indians by using our...
        </p>

        <Link className="link" href="/blog-details">
          <span>Read Story</span>
          <span className="icon-right">
            <Icon icon="heroicons:chevron-right" />
          </span>
        </Link>
      </div>
    </div>
  )
}
