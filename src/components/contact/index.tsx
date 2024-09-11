import { Input1 } from '@/ui'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <div className="ms-container">
        <div className="ms-contact-wrap">
          <div className="left">
            <div>
              <h5 className="ct-title">Contact Information</h5>
              <p className="ct-pra">Say something to start a live chat!</p>
            </div>
            <ul className="item-lists">
              <li>
                <p className="ct-item">
                  <span className="ct-icon">
                    <Icon icon="bxs:phone-call" />
                  </span>
                  <span>+1012 3456 789</span>
                </p>
              </li>
              <li>
                <p className="ct-item">
                  <span className="ct-icon">
                    <Icon icon="ic:sharp-email" />
                  </span>
                  <span>rarra1968@gmail.com</span>
                </p>
              </li>
              <li>
                <p className="ct-item">
                  <span className="ct-icon">
                    <Icon icon="carbon:location-filled" />
                  </span>
                  <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                </p>
              </li>
            </ul>

            <ul className="social-items">
              <li>
                <Link className="item" href={'#'}>
                  <Icon icon="mdi:twitter" />
                </Link>
              </li>
              <li>
                <Link className="item" href={'#'}>
                  <Icon icon="mdi:instagram" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <form action="#" className="contact-form">
              <div className="form-item-warp">
                <div className="form-group">
                  <Input1 variant="gradient" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <Input1 variant="gradient" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-group">
                <Input1 variant="gradient" placeholder="Job Title" />
              </div>
              <div>
                <Input1 variant="gradient" placeholder="Email" />
              </div>
              <div>
                <Input1 variant="gradient" placeholder="Phone" />
              </div>

              <div className="form-box1 ">
                <select name="" id="" className="form-input1 gradient ">
                  <option value="">Employees</option>
                  <option value="">Service 1</option>
                </select>
              </div>

              <div className="form-box1 ">
                <select name="" id="" className="form-input1 gradient ">
                  <option value="">Country / Region</option>
                  <option value="">Service 1</option>
                </select>
              </div>
              <div className="form-box1 ">
                <textarea placeholder="Description" rows={5} className="form-input1 gradient "></textarea>
              </div>

              <button className="form-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
