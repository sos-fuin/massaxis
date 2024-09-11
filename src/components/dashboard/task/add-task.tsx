import { KTIcon } from '@/helper/icon'
import { Button, DatePicker, Modal, Radio, TimePicker } from 'antd'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { DbInput2 } from '../from/input2'
import Label from '../from/label'

export default function AddTask() {
  const [modal2Open, setModal2Open] = useState(false)
  return (
    <>
      <Button
        onClick={() => setModal2Open(true)}
        type="primary"
        className="!px-2"
        icon={<KTIcon iconName="plus-square" iconType="solid" />}>
        Add Task
      </Button>

      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '878px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-skin-color-1">Add a New Event</h1>
            <p className="text-sm font-medium text-skin-color-3 ">
              If you need more info, please check Support Guidelines. Subject{' '}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <DbInput2
                inputProps={{
                  placeholder: 'Type Here...',
                }}
                label="Name"
              />
              <DbInput2
                inputProps={{
                  placeholder: 'Type Here...',
                }}
                label="Subject "
              />
              <DbInput2
                inputProps={{
                  placeholder: 'Type Here...',
                }}
                label="Event Description "
              />
              <DbInput2
                inputProps={{
                  placeholder: 'Type Here...',
                }}
                label="Event Location"
              />
            </div>
            <div>
              <Radio>All Day</Radio>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="w-full flex flex-col gap-3">
                <Label label="Event Start Date *" />
                <DatePicker size="large" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <Label label="Event Start Time *" />
                <TimePicker size="large" use12Hours defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
              </div>
              <div className="w-full flex flex-col gap-3">
                <Label label="Event End Date *" />
                <DatePicker size="large" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <Label label="Event End Time *" />
                <TimePicker size="large" use12Hours defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
