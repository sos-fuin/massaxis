import { image } from '@/assets'
import { Button, Input1 } from '@/ui'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export const metadata: Metadata = {
  title: 'Sign In',
  description: 'MassAxis is a web application for managing your business.',
}
export default function page() {
  return (
    <div className="sign-up">
      <div className="sign-up-item">
        <div className="first-form">
          <div className="img mb-12">
            <Link href="/">
              <Image className="logo" alt="logo" src={image.logo} />
            </Link>
          </div>

          <div>
            <h4 className="s-sub-title">Welcome to MASS AXIS ✨ !</h4>
            <p className="s-sub-text">
              Credentials are only used to authenticate in PrrofHub. All saved data will be stored in your database.
            </p>
          </div>
          <div className="form-box mb-12">
            <div>
              <Input1 placeholder="Email" type="email" />
            </div>
            <div className="mt-12">
              <Input1 placeholder="Password" type="password" />
            </div>
          </div>
          <div className="forgot-password-text mb-22">
            <Link href="#">Forgot Password</Link>
          </div>
          <div className="btn-box mb-32">
            <Button.Primary>Sign In</Button.Primary>
          </div>
          <div className="create-account mb-5 lg:mb-10">
            <p>Don&apos;t have an account?</p>
            <Link href="/sign-up" className="marked">
              Create one
            </Link>
          </div>
          <ul className="s-social-login ">
            <li>
              <Link href="#" className="s-social">
                <Icon icon="hugeicons:new-twitter" />
              </Link>
            </li>
            <li>
              <Link href="#" className="s-social">
                <Icon icon="gg:instagram" />
              </Link>
            </li>
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
    </div>
  )
}
