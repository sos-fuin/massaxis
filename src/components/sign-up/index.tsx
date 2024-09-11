import { image } from '@/assets'
import { Button, Input1 } from '@/ui'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="sign-up-item">
      <div className="first-form">
        <div className="img">
          <Link href="/">
            <Image className="logo" alt="logo" src={image.logo} />
          </Link>
        </div>
        <ul className="s-page-list">
          <li>
            <p className="s-item active">01</p>
          </li>
          <li>
            <p className="s-item">02</p>
          </li>
          <li>
            <p className="s-item">03</p>
          </li>
        </ul>
        <div>
          <h4 className="s-sub-title">Start your free trial now.</h4>
          <p className="s-sub-text">
            Answer a few questions and we&apos;ll get you into your free trial. (8 answers total)
          </p>
        </div>
        <div className="form-box">
          <div className="form-input-group2">
            <Input1 />
            <Input1 />
          </div>
          <div>
            <Input1 />
          </div>
        </div>
        <div className="btn-box">
          <Button.Primary>Next Step</Button.Primary>
        </div>
        <ul className="s-social-login">
          <li>
            <Link href="#" className="s-social">
              <Icon icon="gg:google" />
            </Link>
          </li>
          <li>
            <Link href="#" className="s-social">
              <Icon icon="gg:facebook" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
