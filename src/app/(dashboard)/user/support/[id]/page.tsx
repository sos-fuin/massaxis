'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import SupportCreate from '@/components/dashboard-ui/user/support/support-create'
import { DBCard } from '@/components/dashboard/cards'
import { DbTextarea } from '@/components/dashboard/from/textarea'
import { KTIcon } from '@/helper/icon'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Image, Space, Upload } from 'antd'
import Link from 'next/link'
import React from 'react'
export default function Home() {
  return (
    <>
      <DbBreadCrumb
        title={`Support Details`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/user' },
          { title: 'Support', path: '' },
        ]}>
        <div className="flex items-center gap-2">
          <Link href="/user/support">
            <Button type="default">All ticket</Button>
          </Link>
          <SupportCreate />
        </div>
      </DbBreadCrumb>

      <div>
        <DBCard>
          <div className="p-[30px]">
            <h4 className="text-[22px] text-skin-color-1 font-semibold leading-normal">
              <span className="text-skin-color-blue-light">#45478 - </span>
              <span>Complete the transfer Process</span>
            </h4>
            <div className="flex items-center gap-4 shadow-sm border border-dashed border-blue-500 p-[10px] rounded-xl max-w-[768px] mt-[30px]">
              <div>
                <KTIcon iconName="shield-tick" className="text-5xl text-skin-color-blue-light" />
              </div>
              <div>
                <h3 className="text-[15px] text-skin-color-1 font-semibold leading-normal">
                  This ticket is closed. You may reply to this ticket to reopen it.
                </h3>
                <p className="text-[13px] text-skin-color-2 font-medium leading-normal">
                  This ticket is closed. You may reply to this ticket to reopen it.
                </p>
              </div>
            </div>
          </div>
        </DBCard>

        <div className="my-5">
          <DBCard>
            <div className="p-[30px]">
              <div>
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      alt="user"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={50}
                      height={50}
                      className="rounded-full object-cover  border-green-500 border-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl text-skin-color-1 font-semibold leading-normal">
                      How to use Metronic with Django Framework?
                    </h3>
                    <p className="text-skin-color-3 font-semibold  text-xs flex items-center gap-3 ">
                      <span>Product: Metronic </span>
                      <span>By: Jerry Johnson </span>
                      <span>Created 3 Hours ago </span>
                      <span>(24.06.2020 at 5:03 PM)</span>
                    </p>
                  </div>
                </div>
                <p className="text-skin-color-2 text-[15px] font-medium leading-normal mt-[30px]">
                  Hello, When you&apos;re done bundling, you should decide on the order of the topics your article. In
                  most cases, you can decide to order thematically. For instance, if you want to discuss various aspects
                  or angles of the main topic of your blog post. But you can also order your text chronologically or
                  didactically.
                </p>
              </div>
              <div className="p-5 bg-skin-color-3 rounded-xl mt-5 border border-gray-300">
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      alt="user"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={50}
                      height={50}
                      className="rounded-full object-cover  border-green-500 border-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl text-skin-color-1 font-semibold leading-normal">
                      How to use Metronic with Django Framework?
                    </h3>
                    <p className="text-skin-color-3 font-semibold  text-xs flex items-center gap-3 ">
                      <span>Product: Metronic </span>
                      <span>By: Jerry Johnson </span>
                      <span>Created 3 Hours ago </span>
                      <span>(24.06.2020 at 5:03 PM)</span>
                    </p>
                  </div>
                </div>
                <p className="text-skin-color-2 text-[15px] font-medium leading-normal mt-5">
                  Hello, When you&apos;re done bundling, you should decide on the order of the topics your article. In
                  most cases, you can decide to order thematically. For instance, if you want to discuss various aspects
                  or angles of the main topic of your blog post. But you can also order your text chronologically or
                  didactically.
                </p>
              </div>
            </div>
          </DBCard>
        </div>

        <DBCard>
          <div className="p-5">
            <DbTextarea inputProps={{ placeholder: 'Details', rows: 6 }} label="Type your Message" />
            <div className="flex justify-between items-center mt-5">
              <div className="w-full">
                <Space direction="vertical" style={{ width: '100%' }} size="large">
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture"
                    maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload </Button>
                  </Upload>
                </Space>
              </div>
              <div className="flex items-center gap-2">
                <Button type="default">Cancel</Button>
                <Button type="primary">Submit</Button>
              </div>
            </div>
          </div>
        </DBCard>
      </div>
    </>
  )
}
