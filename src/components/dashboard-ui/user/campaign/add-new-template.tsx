import { DbInput1 } from '@/components/dashboard/from/input'
import { DbSelect2 } from '@/components/dashboard/from/select2'
import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'

const AddNewTemplate: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)
  const { TextArea } = Input
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Add New Template
      </Button>
      <Modal
        title="Create Contact"
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '520px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div className="flex flex-col gap-5">
            <DbInput1
              label="Enter Subject"
              width="w-[115px] flex-shrink-0"
              inputProps={{ placeholder: 'Type Person Name' }}
            />

            <DbSelect2
              label="Name"
              width="w-[115px] flex-shrink-0"
              inputProps={{
                placeholder: 'Select List',
                options: [
                  {
                    label: 'Owner Mass Axis',
                    value: 'Owner Mass Axis',
                  },
                ],
              }}
            />

            <TextArea rows={4} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddNewTemplate
