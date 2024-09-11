'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { Note, PersonalInfo, Tags } from '@/components/dashboard/message'
import AddTask from '@/components/dashboard/task/add-task'
import { KTIcon } from '@/helper/icon'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Avatar, Badge, Button, Checkbox, Divider, Input, Select, Space } from 'antd'
import React, { useState } from 'react'

export default function Home() {
  const [tabUser, setUserTab] = useState<'personal_info' | 'note' | 'add_tag'>('personal_info')
  return (
    <>
      <DbBreadCrumb
        title="Message"
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Message', path: '' },
        ]}></DbBreadCrumb>

      <div>
        <div className="flex justify-between gap-4">
          <div className="hidden sm:block w-[270px] lg:w-auto lg:min-w-[330px] bg-skin-color-1 border-skin-color-1 rounded-xl border p-6">
            <Space.Compact size="large" className="!flex">
              <Input
                addonBefore={
                  <span className="search-icon">
                    <KTIcon iconName="magnifier" iconType="solid" />
                  </span>
                }
                placeholder="large size"
              />
            </Space.Compact>

            <ul className="lg:flex items-center gap-2 mt-5 hidden ">
              <li className="">
                <Button type="primary">All Message</Button>
              </li>
              <li>
                <Button type="default">Unread</Button>
              </li>
              <li>
                <Button type="default">Resend</Button>
              </li>
            </ul>
            <div className="lg:hidden mt-2">
              <Select
                className="w-full"
                placeholder="Select.."
                options={[
                  { label: 'All', value: 'all' },
                  { label: 'Unread', value: 'unread' },
                  { label: 'Resend', value: 'resend' },
                ]}
              />
            </div>

            <ul className="flex flex-col gap-5 mt-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index}>
                  <div className="flex items-center gap-4">
                    <div>
                      <Badge dot color="green">
                        <Avatar
                          shape="circle"
                          size={50}
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                      </Badge>
                    </div>
                    <div className="flex items-end justify-between flex-1 ">
                      <div>
                        <h3 className="text-sm font-semibold text-skin-color-1">John Doe</h3>
                        <p className="text-xs font-semibold text-skin-color-3 mt-1">tisexo1312@sablecc.com</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-skin-color-3">3hr</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 col-span-2 bg-skin-color-1 border-skin-color-1 rounded-xl border min-h-[737px] flex-col flex justify-between">
            <div>
              <div className="pt-6 px-6 ">
                <h3 className="text-skin-color-1 text-sm font-semibold">John Doe</h3>
                <p className=" flex items-center gap-1 ">
                  <Icon icon="icon-park-outline:dot" className="text-skin-color-green text-base" />
                  <span className="text-skin-color-3 text-xs font-medium">Active</span>
                </p>
              </div>
              <Divider />
              <div className="px-6">
                <ul className="flex flex-col gap-5 ">
                  <li>
                    <div>
                      <div className="flex items-center gap-3">
                        <Avatar
                          shape="circle"
                          size={50}
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />

                        <p>
                          <span className="text-skin-color-1 text-sm font-semibold">John Doe </span>
                          <span className="text-skin-color-3 text-xs font-medium ms-2">3hr</span>
                        </p>
                      </div>
                      <div className="max-w-[374px] mt-2">
                        <p className="p-4 rounded-md bg-skin-bg-blue text-sm  font-normal leading-4">
                          How likely are you to recommend our company to your friends and family ?
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="flex items-center gap-3 flex-row-reverse">
                        <Avatar
                          shape="circle"
                          size={50}
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />

                        <p>
                          <span className="text-skin-color-1 text-sm font-semibold">John Doe </span>
                          <span className="text-skin-color-3 text-xs font-medium ms-2">3hr</span>
                        </p>
                      </div>
                      <div className="max-w-[374px] mt-2 ms-auto">
                        <p className="p-4 rounded-md bg-skin-bg-yellow text-sm  font-normal leading-4">
                          How likely are you to recommend our company to your friends and family ?
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-skin-color-1 rounded-md mx-6 px-[10px] py-3 flex justify-between items-center mb-6">
              <div className="w-full flex gap-2">
                <Avatar
                  shape="circle"
                  size={30}
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />

                <input
                  type="text"
                  placeholder="Write a message..."
                  className="w-full focus-within:outline-none text-skin-color-1 text-sm font-medium"
                />
              </div>
              <Button type="primary">Send</Button>
            </div>
          </div>
          <div className="hidden 2xl:flex min-w-[300px] max-w-[384px] bg-skin-color-1 border-skin-color-1 rounded-xl border p-6   flex-col">
            <div className="text-center">
              <Avatar
                shape="circle"
                size={77}
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <h3 className="text-skin-color-1 text-sm font-semibold mt-2">John Doe</h3>
            </div>

            <div className="text-center">
              <ul className="inline-flex items-center gap-2 mt-5 justify-center border border-skin-color-1 rounded-md p-1">
                <li className="">
                  <Button
                    onClick={() => setUserTab('personal_info')}
                    type={tabUser === 'personal_info' ? 'primary' : 'text'}>
                    Personal Info
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setUserTab('note')} type={tabUser === 'note' ? 'primary' : 'text'}>
                    Note
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setUserTab('add_tag')} type={tabUser === 'add_tag' ? 'primary' : 'text'}>
                    Tag&apos;s
                  </Button>
                </li>
              </ul>
            </div>
            <div className="border border-skin-color-1 rounded-xl mt-5 shadow  flex flex-col justify-between flex-1">
              {tabUser === 'personal_info' && <PersonalInfo />}
              {tabUser === 'note' && <Note />}
              {tabUser === 'add_tag' && <Tags />}

              <div className="flex justify-between py-5 px-3 border-top border-skin-color-1 border">
                <div>
                  <Checkbox className="!text-skin-color-red">Hot</Checkbox>
                  <Checkbox className="!text-skin-color-yellow">Warm</Checkbox>
                  <Checkbox className="!text-skin-color-blue-light">Cold</Checkbox>
                </div>
                <div>
                  <AddTask />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
