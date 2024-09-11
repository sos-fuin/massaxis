import { DbInput1 } from '@/components/dashboard/from/input'
import { DbSelect2 } from '@/components/dashboard/from/select2'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'

const UserAddAgent: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Add Agent
      </Button>
      <Modal
        title="Create Agent"
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '858px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div className="grid grid-cols-2 gap-[18px] !mt-8">
            <div className="flex flex-col gap-[30px]">
              <DbInput1
                label="Person first name"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type Person Name' }}
              />
              <DbInput1
                label="Phone number"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type Phone Number' }}
              />
            </div>
            <div className="flex flex-col gap-[30px]">
              <DbInput1
                label="Person Last name"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type Person Last Name' }}
              />
              <DbInput1
                label="Email ID"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type Email ID' }}
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <DbSelect2
              label="Agent Role"
              width="w-[115px] flex-shrink-0"
              inputProps={{
                placeholder: 'Select Agent Role',
                options: [
                  {
                    label: 'Owner Mass Axis',
                    value: 'Owner Mass Axis',
                  },
                ],
              }}
            />
          </div>
          <div className="mt-[30px]">
            <DbSelect2
              label="Select Modules"
              width="w-[115px] flex-shrink-0"
              inputProps={{
                placeholder: 'Select Modules',
                options: [
                  {
                    label: 'Owner Mass Axis',
                    value: 'Owner Mass Axis',
                  },
                ],
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserAddAgent
