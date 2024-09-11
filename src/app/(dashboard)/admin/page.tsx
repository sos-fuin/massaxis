'use client'
import {
  adminDbPwDialerPieOptions,
  adminDbPwDialerPieSeries,
} from '@/assets/chart-data/admin-dashboard-power-dialer-line'
import { userDbAgentsPieOptions, userDbAgentsPieSeries } from '@/assets/chart-data/user-dashboard-active-agent-pie'
import { DbBreadCrumb } from '@/components/dashboard'
import { DbBadge } from '@/components/dashboard/badge'
import { DBBar } from '@/components/dashboard/bar'
import { DBCard, DBColoredCard } from '@/components/dashboard/cards'
import { ChartsWidget13, ChartsWidget16, ChartsWidget9 } from '@/components/dashboard/chart/charts'
import { uDbOptions1, uDbOptions2, uDbOptions3, uDbSeries1 } from '@/components/dashboard/chart/variable'
import { DbList } from '@/components/dashboard/list/first'
import { DbTicketsList } from '@/components/dashboard/list/tickets-list'
import { DBTable24 } from '@/components/dashboard/table/24'
import { UserList } from '@/components/dashboard/user-box'
import { KTIcon } from '@/helper/icon'
import { DatePicker } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb title="Dashboard" />

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-6">
        <div className="flex flex-col gap-3 md:gap-7">
          {/* Total Users */}
          <DBCard header={<h3 className="h-text">Total Users</h3>}>
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

          {/* Total Expired */}
          <DBCard header={<h3 className="h-text">Total Expired</h3>}>
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
        </div>
        <div className="flex flex-col gap-3 md:gap-7">
          {/* Total Paid */}
          <DBCard header={<h3 className="h-text">Total Paid</h3>}>
            <div className="wrap">
              <h3 className="db-text fw-800 black s-24 flex item-center gap-2 mb-1">1,836</h3>
              <p className="db-text s-30"> Active Agents</p>
            </div>
            <div className="chart-behind">
              <ChartsWidget13 options={uDbOptions3} series={uDbSeries1} height={120} />
            </div>
          </DBCard>

          {/* Total Free */}
          <DBCard header={<h3 className="h-text">Total Free</h3>}>
            <div className="wrap">
              <h3 className="db-text fw-800 black s-24 flex item-center gap-2 mb-1">2,145</h3>
              <p className="db-text s-30"> Active Agents</p>
            </div>
            <div className="chart-behind">
              <ChartsWidget13 options={uDbOptions2} series={uDbSeries1} height={120} />
            </div>
          </DBCard>
        </div>
        <div className="flex flex-col gap-3 md:gap-7">
          <DBColoredCard color="red" variant="v2" />
          <DBColoredCard color="blue" variant="v2" />
        </div>
        <div>
          <DBCard
            header={
              <div>
                <h3 className="h-text"> Total Tickets</h3>
                <p className="db-text fw-600 s-14 gray2 mt-10">Last 10 Tickets</p>
              </div>
            }>
            <div className="wrap max-h-[324px] overflow-auto">
              <div className="flex flex-col gap-[30px] ">
                <DbTicketsList type="warning" />
                <DbTicketsList type="success" />
                <DbTicketsList type="danger" />
                <DbTicketsList type="danger" />
                <DbTicketsList type="danger" />
                <DbTicketsList type="danger" />
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

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 lg:gap-6 mt-6">
        <div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-3 sm:gap-6">
            <DBCard header={<h3 className="h-text">Total Due</h3>}>
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
            <DBCard header={<h3 className="h-text">Cancel</h3>}>
              <div className="wrap">
                <h3 className="db-text fw-800 black s-24 flex item-center gap-2 mb-1">1,836</h3>
                <p className="db-text s-30"> Active Agents</p>
              </div>
              <div className="chart-behind">
                <ChartsWidget13 options={uDbOptions1} series={uDbSeries1} height={120} />
              </div>
            </DBCard>
            <DBCard header={<h3 className="h-text">Total Premium Membership</h3>}>
              <div className="wrap">
                <h3 className="db-text fw-800 black s-24 flex item-center gap-2 mb-1">1,836</h3>
                <p className="db-text s-30"> Active Agents</p>
              </div>
              <div className="chart-behind">
                <ChartsWidget13 options={uDbOptions1} series={uDbSeries1} height={120} />
              </div>
            </DBCard>
            <DBCard header={<h3 className="h-text">Total VIP Membership</h3>}>
              <div className="wrap">
                <h3 className="db-text fw-800 black s-24 flex item-center gap-2 mb-1">1,836</h3>
                <p className="db-text s-30"> Active Agents</p>
              </div>
              <div className="chart-behind">
                <ChartsWidget13 options={uDbOptions2} series={uDbSeries1} height={120} />
              </div>
            </DBCard>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 md:gap-7">
            <DBCard>
              <div className="wrap">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="db-text  s-18 fw-600  ">1,836</h3>
                    <p className="db-text  s-14 fw-600 gray2 mt-8"> Active Agents</p>
                  </div>
                  <div>
                    <DbBadge className="danger">20.2%</DbBadge>
                  </div>
                </div>
                <div className="mt-30 sp-ncd-details">
                  <DbList variant="no-border">
                    <tr>
                      <td>
                        <DBBar className="s-16 fw-600 db-text" gap="gap-16px" size="xxxl" variant="success">
                          Basic Bar
                        </DBBar>
                      </td>
                      <td className="db-text right">
                        <span className="s-16 fw-600 db-text gray2">72.56%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <DBBar className="s-16 fw-600 db-text" gap="gap-16px" size="xxxl" variant="primary">
                          Basic Bar
                        </DBBar>
                      </td>
                      <td className="db-text right">
                        <span className="s-16 fw-600 db-text gray2">72.56%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <DBBar className="s-16 fw-600 db-text" gap="gap-16px" size="xxxl" variant="default">
                          Basic Bar
                        </DBBar>
                      </td>
                      <td className="db-text right">
                        <span className="s-16 fw-600 db-text gray2">72.56%</span>
                      </td>
                    </tr>
                  </DbList>
                  <div className="chart-sp-ncd-details">
                    <ChartsWidget16 options={userDbAgentsPieOptions} height={300} series={userDbAgentsPieSeries} />
                  </div>
                </div>
              </div>
            </DBCard>
            <DBCard
              header={
                <div className="variant-1">
                  <div>
                    <h3 className="h-text">Power Dialer Performance</h3>
                    <p className="db-text fw-600 s-14 gray2 mt-10">1,046 Inbound Calls today</p>
                  </div>
                  <div className="selected">
                    <DatePicker />
                  </div>
                </div>
              }>
              <ChartsWidget9 options={adminDbPwDialerPieOptions} series={adminDbPwDialerPieSeries} height={320} />
              <div className="wrap !pt-0">
                <DbList variant="no-border">
                  <>
                    <tr>
                      <td>
                        <span className="s-16 fw-600 db-text gray2">Donates</span>
                      </td>
                      <td className="text-end w-10">
                        <span className="s-16 fw-600 db-text black me-7">$756.26</span>
                      </td>
                      <td className="text-end w-10">
                        <span className="s-16 fw-600 db-text danger">-139.34</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="s-16 fw-600 db-text gray2">Podcast</span>
                      </td>
                      <td className="text-end w-10">
                        <span className="s-16 fw-600 db-text black me-7">$2,207.03</span>
                      </td>
                      <td className="text-end w-10">
                        <span className="s-16 fw-600 db-text success">+576.24</span>
                      </td>
                    </tr>
                  </>
                </DbList>
              </div>
            </DBCard>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-7 max-w-[1170px]">
        <DBCard
          header={
            <div>
              <h3 className="h-text"> User</h3>
              <p className="db-text fw-600 s-14 gray2 mt-10">Over 500 new products</p>
            </div>
          }>
          <DBTable24 />
        </DBCard>
      </div>
    </>
  )
}
