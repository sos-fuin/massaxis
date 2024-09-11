import BreadCrumb from '@/components/breadcrumb'
import Footer from '@/components/footer'
import { PrivacyList } from '@/components/list'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MassAxis Privacy Policy',
  description: 'MassAxis is a web application for managing your business.',
}
export default async function page() {
  return (
    <>
      <BreadCrumb title="Privacy Policy & Terms and Condition" />
      <PrivacyList />
      <Footer />
    </>
  )
}
