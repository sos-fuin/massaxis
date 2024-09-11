'use client'
import { icon } from '@/assets'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Divider, Modal } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const ViewInvoice = () => {
  const [modal2Open, setModal2Open] = useState(false)
  return (
    <>
      <Button onClick={() => setModal2Open(true)} type="default" className="">
        View
      </Button>
      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        cancelButtonProps={{ style: { display: 'none' } }}
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '600px' }}
        onCancel={() => setModal2Open(false)}>
        <div className="px-56">
          <div className="flex justify-center">
            <Image alt="invoice" src={icon.invoice} className="w-[170px]" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-skin-color-1 mb-2">Premium account is set!</h3>
            <p className="text-sm text-skin-color-2   leading-5 max-w-[336px] mx-auto">
              Lots of people make mistakes while creating paragraphs. Some writers just put whitespace in their text in
              random places
            </p>
          </div>
          <div className="mt-32">
            <h3 className="text-lg font-semibold text-skin-color-1 mb-2">Order summary</h3>

            <ul className="flex flex-col gap-2">
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-sm font-medium text-skin-color-2">Business - Monthly invoice</span>
                  <span className="text-sm font-medium text-skin-color-2">$120,00</span>
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-sm font-medium text-skin-color-2">Business - Monthly invoice</span>
                  <span className="text-sm font-medium text-skin-color-2">$120,00</span>
                </p>
              </li>
              <li>
                <Divider dashed className="!my-0" />
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-sm font-medium text-skin-color-2">Total paid</span>
                  <span className="text-sm font-medium text-skin-color-green">$150,00</span>
                </p>
              </li>
            </ul>
            <div className="text-center mt-24 mb-40">
              <Button type="primary" size="large" className="!bg-skin-green">
                Download Invoice
              </Button>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-skin-color-1 mb-3">It&apos;s all about customers!</h3>
              <p className="text-sm text-skin-color-2   leading-5 max-w-[336px] mx-auto">
                Call our customer care number: +31 6 3344 55 56
              </p>
              <p className="text-sm text-skin-color-2  leading-5 max-w-[336px] mx-auto my-1">
                You may reach us at <Link href={'#'}>info@massaxis.com</Link>
              </p>
              <p className="text-sm text-skin-color-2  leading-5 max-w-[336px] mx-auto">We serve Mon-Fri, 9AM-18AM</p>
            </div>

            <ul className="flex justify-center gap-2 mt-5">
              <li>
                <Link
                  href={'#'}
                  className="w-6 h-6 rounded-full bg-blue-400 text-white inline-flex items-center justify-center text-lg hover:text-blue-500 hover:bg-white border border-transparent hover:border-blue-500">
                  <Icon icon="gg:facebook" />
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className="w-6 h-6 rounded-full bg-blue-400 text-white inline-flex items-center justify-center text-lg hover:text-blue-500 hover:bg-white border border-transparent hover:border-blue-500">
                  <Icon icon="ri:linkedin-fill" />
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className="w-6 h-6 rounded-full bg-blue-400 text-white inline-flex items-center justify-center text-lg hover:text-blue-500 hover:bg-white border border-transparent hover:border-blue-500">
                  <Icon icon="lets-icons:insta" />
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className="w-6 h-6 rounded-full bg-blue-400 text-white inline-flex items-center justify-center text-lg hover:text-blue-500 hover:bg-white border border-transparent hover:border-blue-500">
                  <Icon icon="mdi:twitter" />
                </Link>
              </li>
            </ul>

            <div className="text-center mt-5">
              <Link className="text-sm text-skin-color-2 " href={'#'}>
                © Copyright massaxis.com. All rights reserved
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
