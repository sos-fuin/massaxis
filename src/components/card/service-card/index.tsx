import { icon } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

export function ServiceCard() {
  return (
    <div className="ms-service-card">
      <div className="card-content">
        <div className="c-image">
          <Image className="c-image-icon" width={32} height={32} alt="icon" src={icon.cardIcon} />
        </div>
        <div>
          <h4 className="c-h4">Effortlessly Manage Your Sales Pipeline</h4>
          <p className="c-p">
            Track deals with unlimited pipelines, customizable stages, real-time analytics, and advanced filtering.
            Admin control ensures data integrity.
          </p>
        </div>
        <Link href="/" className="c-link">
          <span>Explore More</span>
          <Image className="c-icon" width={28} height={28} alt="icon" src={icon.arrowRight01} />
        </Link>
      </div>
    </div>
  )
}
