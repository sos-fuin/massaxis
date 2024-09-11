import { image } from '@/assets'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'

export type iListIcon = 'blue' | 'blue2' | 'green'

export function List1({ colorIcon, list1 }: { colorIcon: iListIcon; list1: any }) {
  return (
    <div className={`ms-list-1 ${colorIcon}`}>
      <div className="l-left">
        <div className="l-bar-line">
          {/* <Image src={icon.arrowWhite} alt="icon" /> */}
          <span className={`l-icon ${colorIcon}`}>
            <Icon icon="hugeicons:arrow-down-double" />
          </span>
        </div>
        <div className="l-tittle-content">
          <h5 className="l-tittle">Unmatched User Experience</h5>
          <ul className="l-list">
            <li>
              <p className="l-list-item">
                <span className={`l-list-icon ${colorIcon}`}>
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span>Intuitive Interface: Clean, user-friendly design with light and dark modes.</span>
              </p>
            </li>
            <li>
              <p className="l-list-item">
                <span className={`l-list-icon ${colorIcon}`}>
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span>Intuitive Interface: Clean, user-friendly design with light and dark modes.</span>
              </p>
            </li>
            <li>
              <p className="l-list-item">
                <span className={`l-list-icon ${colorIcon}`}>
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span>Intuitive Interface: Clean, user-friendly design with light and dark modes.</span>
              </p>
            </li>
            <li>
              <p className="l-list-item">
                <span className={`l-list-icon ${colorIcon}`}>
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span>Intuitive Interface: Clean, user-friendly design with light and dark modes.</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="l-right">
        <Image src={image[list1 as keyof typeof image]} alt="image" />
      </div>
    </div>
  )
}
