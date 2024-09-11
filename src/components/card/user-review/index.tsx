//  import Image from 'next/image'
import { image } from '@/assets'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'

export function UserReview({ desc }: { desc: string }) {
  return (
    <div className="us-line">
      <div className="us-item">
        <div className="user-info">
          <div className="u-image">
            <Image src={image.u1} alt="user" />
          </div>
          <div className="u-dt">
            <h3 className="u-name">Mark T.</h3>
            <div className="u-des-box">
              <p className="u-des">Real Estate Wholesaler</p>
              <div className="star">
                <span className="str-icon">
                  <Icon icon="material-symbols:star" />
                </span>
                <span>(5.0)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="u-text">
          <p className="u-p">{desc}</p>
        </div>
      </div>
    </div>
  )
}
