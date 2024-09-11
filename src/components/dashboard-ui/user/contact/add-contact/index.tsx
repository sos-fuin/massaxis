import { DbInput1 } from '@/components/dashboard/from/input'
import { DbSelect2 } from '@/components/dashboard/from/select2'
import { Modal } from 'antd'
import React, { useState } from 'react'

const UserAddContact: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <button className="db-button-pri" onClick={() => setModal2Open(true)}>
        Add Contact
      </button>
      <Modal
        title="Create Contact"
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
              <DbInput1 label="Job title" width="w-[115px] flex-shrink-0" inputProps={{ placeholder: 'Type Job' }} />
              <DbInput1
                label="street address"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type street' }}
              />
              <DbInput1 label="state" width="w-[115px] flex-shrink-0" inputProps={{ placeholder: 'Type state' }} />
              <DbInput1 label="Apn" width="w-[115px] flex-shrink-0" inputProps={{ placeholder: 'Type Apn' }} />
              <DbInput1 label="Tag" width="w-[115px] flex-shrink-0" inputProps={{ placeholder: 'Type Tag' }} />
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
              <DbInput1 label="County" width="w-[115px] flex-shrink-0" inputProps={{ placeholder: 'Type County' }} />
              <DbInput1 label="city" width="w-[115px] flex-shrink-0" inputProps={{ placeholder: 'Type city' }} />
              <DbInput1 label="zip" width="w-[115px] flex-shrink-0" inputProps={{ placeholder: 'Type zip' }} />
              <DbInput1
                label="Owner Mass Axis "
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type Owner Mass Axis' }}
              />
              <DbSelect2
                label="List"
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
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserAddContact
