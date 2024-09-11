'use client'
import { userDbAgentsPieOptions, userDbAgentsPieSeries } from '@/assets/chart-data/user-dashboard-active-agent-pie'
import { userDbPwDialerPieOptions, userDbPwDialerPieSeries } from '@/assets/chart-data/user-dashboard-power-dialer-line'
import { DbBreadCrumb } from '@/components/dashboard'
import { DbBadge } from '@/components/dashboard/badge'
import { DBBar } from '@/components/dashboard/bar'
import { DbCalenderList } from '@/components/dashboard/calender-list'
import { DBCard, DBColoredCard } from '@/components/dashboard/cards'
import { ChartsWidget13, ChartsWidget15, ChartsWidget16, ChartsWidget9 } from '@/components/dashboard/chart/charts'
import { uDbOptions1, uDbOptions2, uDbSeries1 } from '@/components/dashboard/chart/variable'
import { DbDayList } from '@/components/dashboard/list/day-list'
import { DbList } from '@/components/dashboard/list/first'
import { DBTable } from '@/components/dashboard/table'
import { DBTable1 } from '@/components/dashboard/table/1'
import { DBTable2 } from '@/components/dashboard/table/2'
import { UserList } from '@/components/dashboard/user-box'
import { KTIcon } from '@/helper/icon'
import { Select } from '@/ui/form/select'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Col, DatePicker, Input, Row, Space } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <DbBreadCrumb title="Dashboard" subTitle="Central Hub for Personal Customization" />

      <div className="grid grid-cols-1  md:grid-cols-2 gap-y-[14px] gap-x-[30px]">
        <div>
          <DBCard
            header={
              <div className="variant-1 gap-2 flex-wrap 2xl:flex-nowrap">
                <h3 className="h-text">Pipeline Value</h3>
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
                <p className="date">Fri, Jul 24th - Mon, Jan 25th</p>
              </div>
            }>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-[30px]">
              <DbList>
                <tr>
                  <td>Basic Card</td>
                  <td className="db-text right">Basic Card 1</td>
                </tr>
                <tr>
                  <td>Basic Card</td>
                  <td className="db-text right">Basic Card 1</td>
                </tr>
                <tr>
                  <td>Basic Card</td>
                  <td className="db-text right">Basic Card 1</td>
                </tr>
                <tr>
                  <td>Basic Card</td>
                  <td className="db-text right">Basic Card 1</td>
                </tr>
              </DbList>

              <div className="flex justify-center items-center h-full p-4 xl:p-0 flex-col">
                <p className="db-text s-38">
                  <sup className="db-text s-22">$</sup>
                  <span className="db-text fw-700 s-38 black">12,706</span>
                </p>
                <p className="db-text gray s-16 mt-12">Target for April</p>
              </div>
            </div>
          </DBCard>

          <div className="grid 2xl:grid-cols-2 gap-[30px] mt-5">
            <DBCard header={<h3 className="h-text">Agents</h3>}>
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

            <DBCard header={<h3 className="h-text">Contacts</h3>}>
              <div className="variant-2 wrap">
                <div className="agent-wrap">
                  <div className="agent-sep">
                    <h3 className="db-text fw-800 black s-24">357</h3>
                    <h3 className="db-text s-12 mt-1"> Active Agents</h3>
                  </div>
                </div>
                <div className="agent-wrap-footer">
                  <div>
                    <UserList />
                    <h3 className="db-text s-12 gray"> Active Agents</h3>
                  </div>
                  <Link className="agent-sep-arrow" href="#">
                    <KTIcon className="arrow" iconName="arrow-up-right" />
                    <span className="db-text s-12 gray">of 0 Active</span>
                  </Link>
                </div>
              </div>
            </DBCard>
          </div>

          <div className="grid 2xl:grid-cols-2 gap-[30px] mt-5">
            <DBCard header={<h3 className="h-text">Pipeline Value</h3>}>
              <div className="wrap">
                <h3 className="db-text fw-800 black s-24 flex item-center gap-2">
                  <span> 1,836</span>
                  <DbBadge className="danger">20.2%</DbBadge>
                </h3>
                <p className="db-text s-30"> Active Agents</p>
              </div>
              <div className="chart-behind">
                <ChartsWidget13 options={uDbOptions1} series={uDbSeries1} height={120} />
              </div>
            </DBCard>

            <DBCard header={<h3 className="h-text">Deals Won</h3>}>
              <div className="wrap">
                <h3 className="db-text fw-800 black s-24 flex item-center gap-2">
                  <span> 2,145</span>
                  <DbBadge className="primary">54.2%</DbBadge>
                </h3>
                <p className="db-text s-30"> Active Agents</p>
              </div>
              <div className="chart-behind">
                <ChartsWidget13 options={uDbOptions2} series={uDbSeries1} height={120} />
              </div>
            </DBCard>
          </div>

          <Row className="mt-20">
            <Col span={24}>
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
            </Col>
          </Row>

          <Row className="mt-20">
            <Col span={24}>
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
            </Col>
          </Row>

          <Row className="mt-20">
            <Col span={24}>
              <DBCard
                header={
                  <div className="variant-1">
                    <h3 className="h-text">
                      Agents <span className="gray s-12 db-text">Showing 10 of 49,053 users</span>
                    </h3>
                    <div className="selected">
                      <Space.Compact size="large">
                        <Input
                          addonBefore={
                            <span className="search-icon">
                              <KTIcon iconName="magnifier" iconType="solid" />
                            </span>
                          }
                          placeholder="Search users"
                        />
                      </Space.Compact>
                    </div>
                  </div>
                }>
                <DBTable />
              </DBCard>
            </Col>
          </Row>

          <Row className="mt-20">
            <Col span={24}>
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
                <ChartsWidget9 options={userDbPwDialerPieOptions} series={userDbPwDialerPieSeries} height={500} />
              </DBCard>
            </Col>
          </Row>
        </div>

        <div>
          <div className="grid 2xl:grid-cols-2 gap-[30px]">
            <div>
              <DBColoredCard color="red" variant="v1" />
            </div>
            <div>
              <DBColoredCard color="blue" variant="v1" />
            </div>
          </div>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 25 }} className="mt-20">
            <Col md={24}>
              <DBCard
                header={
                  <div className="variant-1">
                    <div>
                      <h3 className="db-text s-18 fw-600">Whats up Today</h3>
                      <p className="db-text s-14 fw-600 gray2 mt-8">Total 424,567 deliveries</p>
                    </div>
                    <div>
                      <button className="db-button-sec">Report Center</button>
                    </div>
                  </div>
                }>
                <div className="wrap">
                  <div className="day-items-calender">
                    <DbCalenderList />
                  </div>

                  <div className="day-items-lts">
                    <DbDayList className="primary" />
                    <DbDayList className="warning" />
                    <DbDayList className="success" />
                    <DbDayList className="semi-primary" />
                  </div>
                </div>
              </DBCard>
            </Col>
          </Row>

          <Row className="mt-20">
            <Col span={24}>
              <DBCard
                header={
                  <div className="variant-1">
                    <h3 className="h-text">Campaign</h3>
                  </div>
                }>
                <DBTable1 />
                <div className="flex justify-end items-center gap-4 my-14">
                  <button className="db-button-primary outline">
                    <span className="icon">
                      <KTIcon iconName="plus-square" iconType="outline" />
                    </span>
                    <span>New Campaign</span>
                  </button>
                  <button className="db-button-primary">
                    <span>New Campaign</span>
                    <span className="icon">
                      <Icon icon="mdi:arrow-right-thin" />
                    </span>
                  </button>
                </div>
              </DBCard>
            </Col>
          </Row>
        </div>
      </div>

      <Row className="mt-20">
        <Col span={24}>
          <DBCard
            header={
              <div className="flex items-center gap-4 flex-wrap ">
                <div className="min-w-32">
                  <Space.Compact size="middle">
                    <Input
                      addonBefore={
                        <span className="search-icon">
                          <KTIcon iconName="magnifier" iconType="solid" />
                        </span>
                      }
                      placeholder="Search users"
                    />
                  </Space.Compact>
                </div>
                <div className="min-w-64">
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
            <div className="wrap">
              <DBTable2 />
            </div>
          </DBCard>
        </Col>
      </Row>
    </>
  )
}
