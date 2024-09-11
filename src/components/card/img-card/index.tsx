import { image } from '@/assets'
import Image from 'next/image'
import './img-card.scss'

export default function ImageCard() {
  return (
    <div className="ms-img-card">
      <Image src={image.imgCard} alt="image" />
    </div>
  )
}
