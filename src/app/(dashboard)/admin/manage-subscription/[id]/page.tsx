'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DbInput2 } from '@/components/dashboard/from/input2'
import { DbSelect } from '@/components/dashboard/from/select'
import { DbTextarea } from '@/components/dashboard/from/textarea'
import { KTIcon } from '@/helper/icon'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Main() {
  const [value, setValue] = useState<string>('')

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
      <div className="mt-0 lg:!mt-20">
        <form action="">
          <div className="max-w-[830px] bg-skin-color-1 mx-auto dark:border dark:border-skin-color-1">
            <div className="px-40 py-40">
              <div className="text-center">
                <h3 className="text-xl text-skin-color-1 font-semibold">Update Subscription</h3>
                <p className="text-skin-color-3 text-sm font-medium mt-1">
                  If you need more info, please check Support Guidelines. Subject
                </p>
              </div>

              <div className="!mt-10 flex flex-col gap-3 md:gap-5">
                <DbSelect inputProps={{ options: [{ value: 'lucy', label: 'Lucy' }] }} label="Subscription Time" />
                <DbSelect inputProps={{ options: [{ value: 'lucy', label: 'Lucy' }] }} label="Card Heading" />
                <DbTextarea
                  label="Short Description"
                  inputProps={{
                    value,
                    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value),
                    placeholder: 'Controlled autosize',
                    autoSize: { minRows: 3, maxRows: 5 },
                  }}
                />
                <DbInput2 label="Subscription Amount $" inputProps={{ placeholder: 'Controlled autosize' }} />
              </div>

              <div className="mt-3 md:mt-5">
                <h3 className="text-lg text-skin-color-1 font-semibold">Features Lists</h3>

                <div className="flex flex-col gap-3 md:gap-5 mt-2 md:mt-4">
                  <div className="flex items-end gap-5">
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <DbSelect
                        inputProps={{ options: [{ value: 'lucy', label: 'Lucy' }] }}
                        label="Subscription Time"
                      />
                      <DbSelect inputProps={{ options: [{ value: 'lucy', label: 'Lucy' }] }} label="Card Heading" />
                    </div>
                    <button className="inline-flex w-8 h-8 items-center justify-center bg-skin-red rounded-full flex-shrink-0 mb-1">
                      <KTIcon iconName="trash" className="text-[18px] text-white" />
                    </button>
                  </div>
                  <div className="flex items-end gap-5">
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <DbSelect
                        inputProps={{ options: [{ value: 'lucy', label: 'Lucy' }] }}
                        label="Subscription Time"
                      />
                      <DbSelect inputProps={{ options: [{ value: 'lucy', label: 'Lucy' }] }} label="Card Heading" />
                    </div>
                    <button className="inline-flex w-8 h-8 items-center justify-center bg-skin-red rounded-full flex-shrink-0 mb-1">
                      <KTIcon iconName="trash" className="text-[18px] text-white" />
                    </button>
                  </div>

                  <div className="flex items-end justify-end mt-4">
                    <button className="inline-flex w-8 h-8 items-center justify-center bg-skin-bg-blue rounded-full flex-shrink-0 mb-1">
                      <Icon icon="carbon:add" className="text-[20px] text-skin-color-blue" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="!py-8 gap-3 flex justify-center items-center border-t border-skin-color-1">
              <Link href={'/admin/manage-subscription'} className="db-button-sec">
                Cancel
              </Link>
              <button type="submit" className="db-button-pri">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
