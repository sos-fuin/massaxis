import { icon, image } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
export default function Banner() {
  return (
    <section className="ms-banner" id="ms-banner">
      <div className="b-content">
        <h1 className="b-title">
          The easy and effective CRM
          <span className="b-highlight">for closing deals</span>
          <span className="b-line-bg">
            <Image className="icon-bg" alt="banner" src={icon.line} />
          </span>
        </h1>
        <p className="b-description">
          Experience the power of Mass Axis CRM – crafted by users, for users. Our intuitive platform transforms your
          customer relationship management with user-friendly features, real-time insights, and seamless integrations.
          Simplify your workflow, boost your productivity, and achieve more with Mass Axis CRM.
        </p>
        <div className="b-actions mb-70">
          <Link className="ms-btn-outline" href="/sign-up">
            Start Free Trial
          </Link>
          {/* <button className="ms-nav-btn ">Start Free Trial</button> */}
          <Link className="ms-btn-primary" href="/sign-in">
            Use it Now
          </Link>
        </div>
      </div>

      <div>
        <div className="banner-image">
          <div className="img">
            <Image className="b-image" alt="banner" src={image.banner} />
          </div>
        </div>
      </div>
    </section>
  )
}
