'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import CreatePowerDialer from '@/components/dashboard-ui/user/power-dialer/create-dialer'
import { DBCard } from '@/components/dashboard/cards'
import { DbInput2 } from '@/components/dashboard/from/input2'
import { DBTable14 } from '@/components/dashboard/table/14'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Divider, Input } from 'antd'
import React from 'react'

export default function Home() {
  const { TextArea } = Input
  return (
    <>
      <DbBreadCrumb
        title="Power dialer"
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Power dialer', path: '' },
        ]}>
        <CreatePowerDialer />
      </DbBreadCrumb>

      <div>
        <DBCard>
          <div className="grid grid-cols-12 gap-[18px] p-5">
            <div className="p-5 rounded-xl border border-skin-color-1 col-span-3 bg-skin-color-1">
              <p className="text-sm">
                <span className="text-skin-color-2 font-medium">Power Dealer in progress ... </span>
                <span className="text-skin-color-1 font-semibold">01/100</span>
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-skin-bg-green rounded-full">
                  <Icon icon="ion:call" className="text-skin-color-green text-xl" />
                </div>
                <div>
                  <p className="text-skin-color-1 text-sm font-semibold mb-1">Joy AG </p>
                  <p className="text-skin-color-2 font-semibold text-xs ">Created on 24 Dec 21 </p>
                </div>
              </div>
              <div>
                <p className="flex justify-between items-center mt-4 ">
                  <span className="text-sm font-semibold text-skin-color-1">Total Call Duration</span>
                  <span className="text-sm font-semibold text-skin-color-blue-light">00.01</span>
                </p>
              </div>
              <Divider />
              <div>
                <p className="text-skin-color-1 text-lg font-semibold ">Contact Details </p>
              </div>

              <div className="flex flex-col gap-7 mt-5">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type Person  name',
                  }}
                  label="Person  name"
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type Email',
                  }}
                  label="Email ID"
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type Phone number',
                  }}
                  label="Phone number"
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type County',
                  }}
                  label="County"
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type zip',
                  }}
                  label="Zip"
                />
              </div>
            </div>
            <div className="col-span-9 p-5 rounded-xl border border-skin-color-1   bg-skin-color-1 flex flex-col justify-between">
              <div>
                <div>
                  <Button type="primary" className="me-3">
                    Call Note
                  </Button>
                  <Button type="default">My Script</Button>
                </div>
                <div className="my-5">
                  <TextArea rows={6} placeholder="Jason Tatum" />
                  <div className="flex justify-end mt-3">
                    <Button type="primary">Save Note</Button>
                  </div>
                </div>
                <div className=" ">
                  <DBTable14 />
                </div>
              </div>
              <div>
                <ul className="flex justify-end items-center gap-4">
                  <li>
                    <button className="w-[40px] h-[40px] flex justify-center items-center bg-skin-green rounded-full">
                      <Icon icon="ion:call" className="text-white text-xl" />
                    </button>
                  </li>
                  <li>
                    <button className="w-[40px] h-[40px] flex justify-center items-center bg-sky-100 rounded-full">
                      <Icon icon="mdi:settings-voice" className="text-gray-500  text-xl" />
                    </button>
                  </li>
                  <li>
                    <button className="w-[40px] h-[40px] flex justify-center items-center bg-sky-100 rounded-full">
                      <Icon icon="prime:pause" className="text-gray-500 text-xl" />
                    </button>
                  </li>
                  <li>
                    <button className="w-[40px] h-[40px] flex justify-center items-center bg-skin-red rounded-full">
                      <Icon icon="ion:call" className="text-white text-xl" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </DBCard>
      </div>
    </>
  )
}
