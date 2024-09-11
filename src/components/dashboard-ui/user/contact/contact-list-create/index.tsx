import { DbSelect2 } from '@/components/dashboard/from/select2'
import { Button, Checkbox, Modal } from 'antd'
import React, { useState } from 'react'

const ContactListCreate: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Add Contact List
      </Button>

      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '822px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div>
            <h1 className="text-xl font-semibold text-skin-color-1">Contact List Name</h1>
            <p className="text-sm font-medium text-skin-color-3 ">
              Easily organize your contacts using simple words or phrases that make the most sense to you.
            </p>
            <div className="mt-5 mb-7">
              <DbSelect2
                label="Search for or create "
                width="w-[150px] flex-shrink-0"
                inputProps={{
                  mode: 'multiple',
                  placeholder: 'Select Tags',
                  options: [
                    {
                      label: 'Owner Mass Axis',
                      value: 'Owner Mass Axis',
                    },
                    {
                      label: 'Owner Mass Axis2',
                      value: 'Owner Mass Axis2',
                    },
                    {
                      label: 'Owner Mass Axis3',
                      value: 'Owner Mass Axis3',
                    },
                  ],
                }}
              />
            </div>

            <div>
              <Checkbox>
                <div>
                  <h1 className="text-xs font-semibold text-skin-color-1">Update any existing contacts</h1>
                  <p className="text-xs font-medium text-skin-color-3 ">
                    We&apos;ll automatically replace their information with the data from your import. Otherwise, these
                    duplicates won&apos;t be imported.
                  </p>
                </div>
              </Checkbox>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ContactListCreate
