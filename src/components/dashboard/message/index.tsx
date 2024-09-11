import { KTIcon } from '@/helper/icon'
import { Button, Input, Modal, Select } from 'antd'
import { useState } from 'react'
import { DbBadge } from '../badge'
import { DbList } from '../list/first'
const { TextArea } = Input
export const PersonalInfo = () => {
  return (
    <DbList>
      <>
        <tr>
          <td>
            <span className="text-skin-color-3 text-sm font-medium">Name</span>
          </td>
          <td>
            <span className="text-skin-color-1 text-sm font-medium">Jason Tatum</span>
          </td>
          <td className="text-right">
            <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
          </td>
        </tr>
        <tr>
          <td>
            <span className="text-skin-color-3 text-sm font-medium">Availability</span>
          </td>
          <td>
            <DbBadge className="success" variant="v2">
              Available now
            </DbBadge>
          </td>
          <td className="text-right">
            <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
          </td>
        </tr>
        <tr>
          <td>
            <span className="text-skin-color-3 text-sm font-medium">Birthday</span>
          </td>
          <td>
            <span className="text-skin-color-1 text-sm font-medium">28 May 1996</span>
          </td>
          <td className="text-right">
            <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
          </td>
        </tr>
        <tr>
          <td>
            <span className="text-skin-color-3 text-sm font-medium">Gender</span>
          </td>
          <td>
            <span className="text-skin-color-1 text-sm font-medium">Male</span>
          </td>
          <td className="text-right">
            <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
          </td>
        </tr>
        <tr>
          <td>
            <span className="text-skin-color-3 text-sm font-medium">Address</span>
          </td>
          <td>
            <span className="text-skin-color-1 text-sm font-medium">You have no an address </span>
          </td>
          <td className="text-right">
            <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
          </td>
        </tr>
        <tr>
          <td>
            <span className="text-skin-color-3 text-sm font-medium">Phone number</span>
          </td>
          <td>
            <span className="text-skin-color-1 text-sm font-medium">011111411141</span>
          </td>
          <td className="text-right">
            <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
          </td>
        </tr>
        <tr>
          <td>
            <span className="text-skin-color-3 text-sm font-medium">Job title</span>
          </td>
          <td>
            <span className="text-skin-color-1 text-sm font-medium">Job Title</span>
          </td>
          <td className="text-right">
            <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
          </td>
        </tr>
        <tr>
          <td>
            <span className="text-skin-color-3 text-sm font-medium">Apn</span>
          </td>
          <td>
            <span className="text-skin-color-1 text-sm font-medium">11-44-23-C1-02598</span>
          </td>
          <td className="text-right">
            <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
          </td>
        </tr>
      </>
    </DbList>
  )
}

export const Note = () => {
  return (
    <div className="px-3 py-5">
      <TextArea placeholder="Type Here" rows={4} />
      <div className="mt-3 flex justify-end">
        <Button type="primary">Send</Button>
      </div>
    </div>
  )
}

export const AddTags = () => {
  const [modal2Open, setModal2Open] = useState(false)
  return (
    <>
      <Button
        onClick={() => setModal2Open(true)}
        type="primary"
        className="!px-2 "
        icon={<KTIcon iconName="plus-square" iconType="solid" />}>
        Create Tag
      </Button>
      <Modal
        title="Create Tag"
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '400px' }}
        onCancel={() => setModal2Open(false)}>
        <div className="py-10">
          <Input placeholder="Basic usage" />
        </div>
      </Modal>
    </>
  )
}

export const SetTags = () => {
  const [modal2Open, setModal2Open] = useState(false)
  return (
    <>
      <Button
        onClick={() => setModal2Open(true)}
        type="default"
        className="!px-2 "
        icon={<KTIcon iconName="element-plus" iconType="solid" />}>
        Set Tag&apos;s
      </Button>
      <Modal
        title="Set Tag"
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '400px' }}
        onCancel={() => setModal2Open(false)}>
        <div className="py-10">
          <Select
            defaultValue="lucy"
            size="large"
            mode="multiple"
            style={{ width: '100%' }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </div>
      </Modal>
    </>
  )
}
export const Tags = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <div>
      <DbList>
        <>
          <tr>
            <td>
              <span className="text-skin-color-3 text-sm font-medium">Tags</span>
            </td>

            <td className="text-right">
              <Button
                onClick={() => setModal2Open(true)}
                type="text"
                className="!px-2 "
                icon={
                  <KTIcon iconName="notepad-edit" iconType="outline" className="text-skin-color-blue text-base" />
                }></Button>

              <Modal
                title="Edit Tag"
                centered
                open={modal2Open}
                width={'100%'}
                className="db-modal  "
                onOk={() => setModal2Open(false)}
                style={{ maxWidth: '400px' }}
                onCancel={() => setModal2Open(false)}>
                <div className="py-10">
                  <Input placeholder="Basic usage" />
                </div>
              </Modal>
            </td>
          </tr>
        </>
      </DbList>
      <div className="px-3 py-5 flex justify-center border-t  border-skin-color-1 gap-2">
        <AddTags />
        <SetTags />
      </div>
    </div>
  )
}
