export default function OldDB() {
  return (
    <div>
      {/*
    <div> 
      <div className="grid grid-cols-4 gap-6 ">
        <DBCard header={<h3 className="h-text">Free</h3>}>
          <div className="variant-2 wrap">
            <div className="agent-wrap">
              <div className="agent-sep">
                <h3 className="db-text fw-800 black s-24">03</h3>
                <p className="db-text s-12 mt-8"> Active Agents</p>
              </div>
              <UserList />
            </div>
            <div className="agent-wrap-footer">
              <h4 className="db-text fw-500 black s-14">Agents</h4>
              <Link className="agent-sep-arrow" href="#">
                <KTIcon className="arrow" iconName="arrow-up-right" />
                <span className="db-text s-12 gray">of 0 Active</span>
              </Link>
            </div>
          </div>
        </DBCard>

        <DBCard header={<h3 className="h-text">Paid</h3>}>
          <div className="wrap">
            <h3 className="db-text fw-800 black s-24 flex item-center gap-2 mb-1">1,836</h3>
            <p className="db-text s-30"> Active Agents</p>
          </div>
          <div className="chart-behind">
            <ChartsWidget13 options={uDbOptions1} series={uDbSeries1} height={120} />
          </div>
        </DBCard>
        <DBCard header={<h3 className="h-text">Due</h3>}>
          <div className="wrap">
            <h3 className="db-text fw-800 black s-24 flex item-center gap-2 mb-1">2,145</h3>
            <p className="db-text s-30"> Active Agents</p>
          </div>
          <div className="chart-behind">
            <ChartsWidget13 options={uDbOptions2} series={uDbSeries1} height={120} />
          </div>
        </DBCard>
        <DBCard header={<h3 className="h-text">Cancel</h3>}>
          <div className="wrap">
            <h3 className="db-text fw-800 black s-24 flex item-center gap-2 mb-1">1,836</h3>
            <p className="db-text s-30"> Active Agents</p>
          </div>
          <div className="chart-behind">
            <ChartsWidget13 options={uDbOptions1} series={uDbSeries1} height={120} />
          </div>
        </DBCard>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <DBCard
            header={
              <div>
                <h3 className="h-text">User</h3>
                <p className="db-text fw-600 s-14 gray2 mt-10">Over 500 new products</p>
              </div>
            }>
            <div className="wrap !pt-0">
              <DbList variant="dot-border remove-padding-first-last-item padding-y-20">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-5">
                        <div>
                          <Image
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="user"
                            width={40}
                            height={40}
                            className="h-[70px] w-[70px] rounded-lg object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="db-text fw-600 black s-16 mb-2">Emma Smith</h4>
                          <p>
                            <span className="db-text fw-600 black s-14">Email: </span>
                            <span className="db-text fw-600 s-14 gray2 ">smith@kpmg.com</span>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-right">
                        <p className="db-text fw-600 black s-16 mb-1">$560,000</p>
                        <p className="db-text fw-600 gray2 s-14">Paid</p>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="db-text fw-600 gray2 s-16 mb-1">Laravel, Metronic</p>
                    </td>
                    <td className="text-end">
                      <DbBadge className="success" variant="v2">
                        Approve
                      </DbBadge>
                    </td>

                    <td>
                      <div className="flex items-center gap-2 justify-end">
                        <button className="db-btn-tbl">
                          <KTIcon iconName="switch" />
                        </button>
                        <button className="db-btn-tbl">
                          <KTIcon iconName="pencil" />
                        </button>
                        <button className="db-btn-tbl">
                          <KTIcon iconName="trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </DbList>
            </div>
          </DBCard>
        </div>
        <div className="col-span-3">
          <DBCard
            header={
              <div>
                <h3 className="h-text">User</h3>
                <p className="db-text fw-600 s-14 gray2 mt-10">Over 500 new products</p>
              </div>
            }>
            <div className="wrap">
              <div className="flex flex-col gap-[30px]">
                <DbTicketsList type="warning" />
                <DbTicketsList type="success" />
                <DbTicketsList type="danger" />
                <DbTicketsList type="primary" />
              </div>
            </div>
            <div className="text-center py-[14px] border-t">
              <button className="See all tickets db-text blue fw-600  border-dotted border-0 border-b-2">
                See all tickets
              </button>
            </div>
          </DBCard>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <DBCard
            header={
              <div>
                <h3 className="h-text">User</h3>
                <p className="db-text fw-600 s-14 gray2 mt-10">Over 500 new products</p>
              </div>
            }>
            <div className="wrap !pt-0">
              <DbList variant="dot-border remove-padding-first-last-item padding-y-20">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-2">
                        <div>
                          <Image
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="user"
                            width={40}
                            height={40}
                            className="h-[40px] w-[40px] rounded-lg object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="db-text fw-600 black s-16 mb-1">Emma Smith</h4>
                          <p className="db-text fw-600 s-14 gray2 ">smith@kpmg.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p className="db-text fw-600 black s-16 mb-1">1,240</p>
                        <p className="db-text fw-600 gray2 s-14">Deliveries</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p className="db-text fw-600 black s-16 mb-1">$560,000</p>
                        <p className="db-text fw-600 gray2 s-14">Earnings</p>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center gap-2 justify-end">
                        <button className="db-btn-tbl">
                          <KTIcon iconName="arrow-right" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </DbList>
            </div>
          </DBCard>
        </div>

        <div></div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <DBCard
            header={
              <div className="variant-1">
                <h3 className="h-text">Contact Report</h3>
                <div className="selected">
                  <Select
                    defaultValue="Option 1"
                    handleChange={() => {}}
                    options={[
                      { label: 'Option 1', value: 'Option 1' },
                      { label: 'Option 2', value: 'Option 2' },
                    ]}
                  />
                </div>
              </div>
            }>
            <div className="wrap pie-card-us1">
              <ChartsWidget15 />
            </div>
          </DBCard>
        </div>

        <div></div>
      </div>
    </div>
    */}
    </div>
  )
}
