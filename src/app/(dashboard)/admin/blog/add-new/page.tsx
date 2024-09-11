'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import { DbInput2 } from '@/components/dashboard/from/input2'
import Label from '@/components/dashboard/from/label'
import { DbSelect } from '@/components/dashboard/from/select'
import { DbTextarea } from '@/components/dashboard/from/textarea'
import { Button, Space, Upload } from 'antd'
import React from 'react'

export default function Page() {
  return (
    <>
      <DbBreadCrumb
        title={`Blog Create`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'Blog Create', path: '/admin/blog/add-new' },
        ]}></DbBreadCrumb>

      <div>
        <DBCard>
          <div className="wrap flex flex-col gap-3 md:gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <DbInput2
                inputProps={{
                  placeholder: 'Type...',
                }}
                label="Title Name"
              />

              <DbSelect
                inputProps={{
                  placeholder: 'Select',
                }}
                label="Category"
              />

              <DbInput2
                inputProps={{
                  placeholder: 'Type...',
                }}
                label="Slug"
              />
              <DbSelect
                inputProps={{
                  placeholder: 'Select',
                  mode: 'multiple',
                }}
                label="Tags"
              />
            </div>
            <div>
              <DbTextarea inputProps={{ placeholder: 'Type...', rows: 5 }} label="Description" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div>
                <Label label="Upload thumbnail" />

                <Space direction="vertical" style={{ width: '100%' }} size="large" className="mt-3">
                  <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" listType="text" maxCount={1}>
                    <Button>Upload (Max: 1)</Button>
                  </Upload>
                </Space>
              </div>
              <DbInput2
                inputProps={{
                  placeholder: 'Type...',
                }}
                label="Thumbnail Alt text"
              />

              <DbSelect
                inputProps={{
                  placeholder: ' ',
                }}
                label="Popular"
              />
              <DbSelect
                inputProps={{
                  placeholder: ' ',
                }}
                label="Featured"
              />
              <DbSelect
                inputProps={{
                  placeholder: 'Select',
                  mode: 'multiple',
                }}
                label="Meta Tag"
              />
              <DbTextarea inputProps={{ placeholder: 'Type...', rows: 4 }} label="Meta Description" />
              <div></div>
              <div className="flex justify-end items-center gap-2">
                <Button>Cancel</Button>
                <Button type="primary">Submit</Button>
              </div>
            </div>
          </div>
        </DBCard>
      </div>
    </>
  )
}
