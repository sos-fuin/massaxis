import { DbInput1 } from '@/components/dashboard/from/input'
import { DbSelect2 } from '@/components/dashboard/from/select2'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import AddNewTemplate from './add-new-template'

const UserAddCampaign: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <button className="db-button-pri" onClick={() => setModal2Open(true)}>
        Create New Campaign
      </button>
      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '858px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-skin-color-1">Edit Campaign </h1>
            <p className="text-sm font-medium text-skin-color-3 ">
              If you need more info, please check Support Guidelines. Subject
            </p>
          </div>
          <div className="flex flex-col gap-[30px] mt-[30px]">
            <div>
              <DbInput1
                label="C. Configuration"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type C. Configuration' }}
              />
            </div>

            <div className="grid grid-cols-2 gap-[18px]">
              <DbInput1
                label="Start Time"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type Start Time' }}
              />
              <DbInput1
                label="End Time"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type End Time' }}
              />
            </div>
            <div className=" ">
              <DbSelect2
                label="Contacts list"
                width="w-[115px] flex-shrink-0"
                inputProps={{
                  placeholder: 'Select Contacts list',
                  options: [
                    {
                      label: 'Owner Mass Axis',
                      value: 'Owner Mass Axis',
                    },
                  ],
                }}
              />
            </div>
            <div className=" ">
              <DbSelect2
                label="Pipeline"
                width="w-[115px] flex-shrink-0"
                inputProps={{
                  placeholder: 'Select Pipeline',
                  options: [
                    {
                      label: 'Owner Mass Axis',
                      value: 'Owner Mass Axis',
                    },
                  ],
                }}
              />
            </div>
            <div>
              <DbInput1
                label="Event start date"
                width="w-[115px] flex-shrink-0"
                inputProps={{ placeholder: 'Type Event start date' }}
              />
            </div>
            <div className=" ">
              <DbSelect2
                label="Assign to"
                width="w-[115px] flex-shrink-0"
                inputProps={{
                  placeholder: 'Select Assign to',
                  options: [
                    {
                      label: 'Owner Mass Axis',
                      value: 'Owner Mass Axis',
                    },
                  ],
                }}
              />
            </div>
            <div className=" ">
              <DbSelect2
                label="The delay between messages send"
                width="w-[115px] flex-shrink-0"
                inputProps={{
                  placeholder: 'Select',
                  options: [
                    {
                      label: 'Owner Mass Axis',
                      value: 'Owner Mass Axis',
                    },
                  ],
                }}
              />
            </div>
            <div className="flex items-center gap-2 ms-[132px]">
              <Button>Cancel</Button>
              <Button type="primary">Submit</Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-skin-color-1">Select Template</h1>
                <p className="text-sm font-medium text-skin-color-3 ">
                  If you need more info, please check Support Guidelines. Subject
                </p>
              </div>
              <AddNewTemplate />
            </div>
            <div className="grid grid-cols-2 gap-[18px]">
              <div className=" ">
                <DbSelect2
                  label="Contacts list"
                  width="w-[115px] flex-shrink-0"
                  inputProps={{
                    placeholder: 'Select',
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
        </div>
      </Modal>
    </>
  )
}

export default UserAddCampaign
