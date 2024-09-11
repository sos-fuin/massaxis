'use client'
import { image } from '@/assets'
import { countryFlags } from '@/assets/country-data'
import Image from 'next/image'

const UserInfo = () => {
  return (
    <div className="db-user-info">
      <div className="db-user-info-image">
        <Image src={image.u1} alt="user" />
      </div>
      <div className="db-user-info-text">
        <h3 className="name">John Doe</h3>
        <p className="dc">UX Designer</p>
      </div>
    </div>
  )
}

const CountryFlag = () => {
  return (
    <div className="db-country-flag">
      <div className="img">
        <Image src={countryFlags.ukraine} alt="flag" />
      </div>
      <p className="name">ukraine</p>
    </div>
  )
}

export { CountryFlag, UserInfo }
