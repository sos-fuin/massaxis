'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { KTIcon } from '@/helper/icon'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title={`Manage Subscription`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Manage Subscription', path: '' },
        ]}
      />

      <div className="!mt-20 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 2xl:gap-[30px]">
          <div className="p-5 2xl:p-[50px] rounded-xl bg-skin-color-1 dark:border dark:border-skin-color-1">
            <div className="text-center">
              <h3 className="text-4xl text-skin-color-1 font-semibold">Startup</h3>
              <p className="text-lg text-skin-color-3 font-semibold max-w-[56] mx-auto leading-4 mt-[30px]">
                Optimal for 10+ team size and new startup
              </p>
              <p className="text-lg text-skin-color-blue-light font-semibold !mt-10">
                $<span className="text-[38px] text-skin-color-blue-light font-semibold">39 </span>
                <span className="text-lg text-skin-color-3 font-semibold">/ Mon</span>
              </p>
            </div>

            <ul className="flex flex-col gap-5 !mt-10">
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>

              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>

              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>
            </ul>
            <div className="!mt-10 text-center">
              <Link href={'/admin/manage-subscription/id'} className="db-button-primary !px-6 !py-4">
                Edit
              </Link>
            </div>
          </div>
          <div className="p-5 2xl:p-[50px] rounded-xl bg-skin-color-1 dark:border dark:border-skin-color-1 ">
            <div className="text-center">
              <h3 className="text-4xl text-skin-color-1 font-semibold">Advanced</h3>
              <p className="text-lg text-skin-color-3 font-semibold max-w-[56] mx-auto leading-4 mt-[30px]">
                Optimal for 10+ team size and new startup
              </p>
              <p className="text-lg text-skin-color-blue-light font-semibold !mt-10">
                $<span className="text-[38px] text-skin-color-blue-light font-semibold">39 </span>
                <span className="text-lg text-skin-color-3 font-semibold">/ Mon</span>
              </p>
            </div>

            <ul className="flex flex-col gap-5 !mt-10">
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>

              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>

              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>
            </ul>
            <div className="!mt-10 text-center">
              <Link href={'/admin/manage-subscription/id'} className="db-button-primary !px-6 !py-4">
                Edit
              </Link>
            </div>
          </div>
          <div className="p-5 2xl:p-[50px] rounded-xl bg-skin-color-1 dark:border dark:border-skin-color-1">
            <div className="text-center">
              <h3 className="text-4xl text-skin-color-1 font-semibold">Enterprise</h3>
              <p className="text-lg text-skin-color-3 font-semibold max-w-[56] mx-auto leading-4 mt-[30px]">
                Optimal for 10+ team size and new startup
              </p>
              <p className="text-lg text-skin-color-blue-light font-semibold !mt-10">
                $<span className="text-[38px] text-skin-color-blue-light font-semibold">39 </span>
                <span className="text-lg text-skin-color-3 font-semibold">/ Mon</span>
              </p>
            </div>

            <ul className="flex flex-col gap-5 !mt-10">
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-1 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="check-circle" className="text-[28px] text-skin-color-green" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>

              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>

              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>
              <li>
                <p className="flex justify-between items-center">
                  <span className="text-base text-skin-color-3 font-semibold">Up to 10 Active Users</span>
                  <KTIcon iconName="cross-circle" className="text-[28px] text-skin-color-3" />
                </p>
              </li>
            </ul>
            <div className="!mt-10 text-center">
              <Link href={'/admin/manage-subscription/id'} className="db-button-primary !px-6 !py-4">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
