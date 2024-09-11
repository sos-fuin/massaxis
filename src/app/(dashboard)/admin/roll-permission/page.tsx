'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { CreateRoleModal } from '@/components/dashboard/modal/create-role-modal'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title={`Role Permission`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Manage Role', path: '' },
        ]}>
        <CreateRoleModal btnType="primary" btnText="Create Role" btnSize="middle" step="Create" />
      </DbBreadCrumb>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 2xl:gap-x-10 2xl:gap-y-12">
          {Array.from({ length: 7 }).map((_, index) => (
            <li
              key={index}
              className="px-30 py-30 bg-skin-color-1 dark:border dark:border-skin-color-1 rounded-xl shadow">
              <h3 className="text-base font-semibold text-skin-color-1">Manage Role</h3>
              <p className="text-sm font-semibold text-skin-color-2 mt-[10px]">Total users with this role: 5</p>
              <ul className="ms-6 flex flex-col gap-4 mt-5">
                <li className="marker:text-skin-color-3 list-disc">
                  <p className="text-sm font-semibold text-skin-color-3 ">All Admin Controls</p>
                </li>
                <li className="marker:text-skin-color-3 list-disc">
                  <p className="text-sm font-semibold text-skin-color-3 ">All Admin Controls</p>
                </li>
                <li className="marker:text-skin-color-3 list-disc">
                  <p className="text-sm font-semibold text-skin-color-3 ">All Admin Controls</p>
                </li>
                <li className="marker:text-skin-color-3 list-disc">
                  <p className="text-sm font-semibold text-skin-color-3 ">All Admin Controls</p>
                </li>
                <li className="marker:text-skin-color-3 list-disc">
                  <p className="text-sm font-semibold text-skin-color-3 ">All Admin Controls</p>
                </li>
              </ul>
              <div className="flex gap-2 mt-5">
                <CreateRoleModal btnType="default" btnText="View" btnSize="large" step="View" />
                <CreateRoleModal btnType="default" btnText="Edit" btnSize="large" step="Edit" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
