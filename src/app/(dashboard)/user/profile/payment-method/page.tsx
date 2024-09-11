'use client'
import { icon } from '@/assets'
import PaymentCard from '@/components/dashboard/profile/payment-card'
import { KTIcon } from '@/helper/icon'
import { Button } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Page() {
  const [tab, setTab] = useState<'c-card' | 'paypal'>('c-card')
  return (
    <div className="max-w-[1120px] px-30 py-40 rounded-xl border border-skin-color-1 bg-skin-color-1">
      <div className="flex items-center gap-4 shadow-sm border border-dashed bg-yellow-50 border-yellow-500 p-[10px] rounded-xl">
        <div>
          <KTIcon iconName="information" className="text-5xl text-skin-color-yellow" />
        </div>
        <div>
          <h3 className="text-[15px] text-skin-color-1 font-semibold leading-normal">
            This ticket is closed. You may reply to this ticket to reopen it.
          </h3>
          <p className="text-[13px] text-skin-color-2 font-medium leading-normal">
            Your Payment was declined. To start using tools, please{' '}
            <Link href="/user/profile/payment-method" className="text-skin-color-blue-light font-semibold text-base">
              Add Payment Method
            </Link>
          </p>
        </div>
      </div>

      <div className="min-h-[212px] max-w-[515px] px-30 py-30 rounded-xl border border-skin-color-1 bg-skin-color-1 mt-30">
        <p>
          <span className="text-skin-color-1 text-xl">Active Package- </span>
          <span className="text-skin-color-1 text-2xl font-bold">Business Plan</span>
        </p>
        <ul className="mt-5 flex flex-col gap-[10px]">
          <li>
            <p className="text-skin-color-1 text-base">Membership Date- 07/30/24</p>
          </li>
          <li>
            <p className="text-skin-color-1 text-base">Expire Date- 08/30/24</p>
          </li>
          <li>
            <p className="text-skin-color-1 text-base">New Payment Date- 08/30/24</p>
          </li>
        </ul>
      </div>

      <div className="my-40 flex justify-between items-center flex-col sm:flex-row gap-2">
        <div>
          <h3 className="text-base text-skin-color-1 font-semibold leading-normal text-center sm:text-left">
            Bob Marley{' '}
          </h3>
          <p className="text-base text-skin-color-3 font-medium leading-normal text-center sm:text-left">
            your next payment date is 08-07-20424- Renew Now
          </p>
        </div>
        <div className="flex flex-end gap-2 flex-wrap justify-center ">
          <Button size="large" type="default">
            Cancel Subscription
          </Button>
          <Button size="large" type="primary">
            Renew Now
          </Button>
        </div>
      </div>
      <div className=" rounded-xl border border-skin-color-1">
        <div className="flex  items-center justify-between w-full border-b border-skin-color-1 px-30 ">
          <h3 className="text-base text-skin-color-1 font-semibold">Payment Methods</h3>
          <ul className="flex gap-4">
            <li className={`inline-block py-30 border-b-2 ${tab === 'c-card' ? 'border-blue-500' : ''}`}>
              <button onClick={() => setTab('c-card')} className="text-base font-semibold ">
                Credit/Debit Card
              </button>
            </li>
            <li className={`inline-block py-30 border-b-2 ${tab === 'paypal' ? 'border-blue-500' : ''}`}>
              <button onClick={() => setTab('paypal')} className="text-base font-semibold ">
                Paypal
              </button>
            </li>
          </ul>
        </div>
        <div className="px-30 py-30">
          {tab === 'c-card' && (
            <div className="flex flex-col gap-7">
              <PaymentCard isActive={true} iconName={icon.visaCard} />
              <PaymentCard iconName={icon.masterCard} />
              <p className="text-end">
                <span className="text-lg font-semibold text-skin-color-1 mr-2">Total: </span>
                <span className="text-3xl font-semibold text-skin-color-1"> $50.00</span>
              </p>
              <div className="flex justify-between items-center flex-wrap gap-3">
                <p>
                  <span className="text-base font-semibold text-skin-color-1 mr-2">You have 2 active cards. </span>
                  <span className="text-base font-semibold text-skin-color-2">Another 3 are inactive</span>
                </p>
                <div className="flex gap-2">
                  <Button>Action</Button>
                  <Button type="primary">Pay Now</Button>
                </div>
              </div>
            </div>
          )}

          {tab === 'paypal' && (
            <div>
              <PaymentCard iconName={icon.masterCard} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
