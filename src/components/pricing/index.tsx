'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'

export function PricingCard() {
  const [active, setActive] = useState<'monthly' | 'yearly'>('monthly')
  return (
    <div className="ms-pricing">
      <div className="ms-pricing-action">
        <button onClick={() => setActive('monthly')} className={`ms-p-btn ${active === 'monthly' ? 'active' : ''}`}>
          Monthly
        </button>
        <button onClick={() => setActive('yearly')} className={`ms-p-btn ${active === 'yearly' ? 'active' : ''}`}>
          Yearly
        </button>
      </div>
      <div className="ms-pricing-cards">
        <div className="ms-pricing-card">
          <div className="top-plan">
            <h4 className="p-title">Trial Plan</h4>
            <p className="p-text">7 days trial </p>
            <p className="p-price">
              <span className="p-sign">$</span>
              <span>0</span>
            </p>
            <button className="p-btn ms-btn-outline">Get Started</button>
          </div>
          <ul className="p-lists">
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">
                  App connections to socials like FB, Instagram, Google Calender, Outlook Calendar, Google Meet and
                  Zoom.
                </span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="ms-pricing-card">
          <div className="top-plan">
            <h4 className="p-title">Trial Plan</h4>
            <p className="p-text">7 days trial </p>
            <p className="p-price">
              <span className="p-sign">$</span>
              <span>0</span>
            </p>
            <button className="p-btn ms-btn-outline active">Get Started</button>
          </div>
          <ul className="p-lists">
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span>
                  App connections to socials like FB, Instagram, Google Calender, Outlook Calendar, Google Meet and
                  Zoom.
                </span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="ms-pricing-card">
          <div className="top-plan">
            <h4 className="p-title">Trial Plan</h4>
            <p className="p-text">7 days trial </p>
            <p className="p-price">
              <span className="p-sign">$</span>
              <span>0</span>
            </p>
            <button className="p-btn ms-btn-outline">Get Started</button>
          </div>
          <ul className="p-lists">
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">
                  App connections to socials like FB, Instagram, Google Calender, Outlook Calendar, Google Meet and
                  Zoom.
                </span>
              </p>
            </li>
            <li>
              <p className="p-list">
                <span className="l-list-icon blue">
                  <Icon icon="octicon:check-circle-fill-16" />
                </span>
                <span className="list-text">Streamlined lead routing and account access controls for teams</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
