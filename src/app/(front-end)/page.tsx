import Banner from '@/components/banner'
import { BLog, ServiceCard, UserReview } from '@/components/card'
import Contact from '@/components/contact'
import { Faq } from '@/components/faq'
import Footer from '@/components/footer'
import { List1 } from '@/components/list'
import MassAxis from '@/components/mass-axis'
import { Motion, MotionView } from '@/components/motion'
import { PricingCard } from '@/components/pricing'
import { Heading } from '@/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MassAxis',
  description: 'MassAxis is a web application for managing your business.',
}
export default async function Home() {
  return (
    <>
      <Motion>
        <Banner />
      </Motion>

      <MotionView>
        <div className="py-70 my-50" id="services">
          <Heading.Base h3="See" marked="Our Services" p="Make your journey to closing more deals easier" />
          <div className="ms-index-services ms-container ">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </MotionView>

      <div className="py-70" id="why-choose-us">
        <MotionView>
          <Heading.Base
            h3="Why Choose"
            marked="Mass Axis CRM?"
            p="Discover the ultimate CRM experience with features designed to elevate your business."
          />
        </MotionView>
        <div className="ms-container">
          <div className="list-box-axis">
            <MotionView>
              <List1 list1={'list1'} colorIcon="blue"></List1>
            </MotionView>
            <MotionView>
              <List1 list1={'list2'} colorIcon="blue2"></List1>
            </MotionView>
            <MotionView>
              <List1 list1={'list3'} colorIcon="green"></List1>
            </MotionView>
          </div>
        </div>
      </div>

      <MotionView>
        <div className="py-70" id="pricing">
          <Heading.Base h3="Our" marked="Pricing" h3End="Package" />
          <div className="ms-container">
            <PricingCard />
          </div>
        </div>
      </MotionView>

      <MotionView>
        <div className="py-70" id="reviews">
          <Heading.Base h3="The word on " marked="Mass Axis" />
          <div className="ms-container-user-review">
            <div className="ms-users-wrap">
              <div className="ms-lines">
                <UserReview
                  desc="Mass Axis is a game-changer for my real estate wholesaling business. The contact management and sales
                pipeline features keep my deals organized and moving smoothly. The SMS automation and bulk texting
                capabilities have significantly improved my communication with potential buyers and sellers. Plus, the
            real-time analytics dashboard helps me track my progress and make informed decisions. Highly recommend for
            any wholesaler looking to streamline their operations!"
                />
                <UserReview
                  desc="Mass Axis is a game-changer for my real estate wholesaling business. The contact management and sales
                pipeline features keep my deals organized and moving smoothly. The SMS automation and bulk texting
                capabilities have significantly improved my communication with potential buyers and sellers. Plus, the
                real-time analytics dashboard helps me track my progress and make informed decisions. Highly recommend for
                any wholesaler looking to streamline their operations!"
                />
              </div>
              <div className="ms-lines">
                <UserReview desc="Mass Axis has transformed how I manage my business. The clean interface and ease of use are standout features. I was struggling with SMS but Mass Axis made that a breeze for me. I highly recommend!" />
                <UserReview desc="Mass Axis has revolutionized my wholesaling business. The contact management and bulk texting features are top-notch. The interface is clean and easy to use, and the analytics dashboard gives me real-time insights into my deals. It’s a must-have for any wholesaler!" />
                <UserReview desc="Mass Axis has made managing my appointments and client communications so much easier. The calendar integration with alerts ensures I never miss a booking, and the real-time syncing keeps everything up to date. I love the clean, user-friendly interface, and the light and dark mode options are a nice touch. The tagging capabilities help me keep track of client preferences and needs, and the live chat support is always there when I need help. It s the perfect CRM for my practice!" />
              </div>
              <div className="ms-lines">
                <UserReview
                  desc="Mass Axis is a game-changer for my real estate wholesaling business. The contact management and sales
            pipeline features keep my deals organized and moving smoothly. The SMS automation and bulk texting
            capabilities have significantly improved my communication with potential buyers and sellers. Plus, the
            real-time analytics dashboard helps me track my progress and make informed decisions. Highly recommend for
            any wholesaler looking to streamline their operations!"
                />
                <UserReview
                  desc="Mass Axis is a game-changer for my real estate wholesaling business. The contact management and sales
            pipeline features keep my deals organized and moving smoothly. The SMS automation and bulk texting
            capabilities have significantly improved my communication with potential buyers and sellers. Plus, the
            real-time analytics dashboard helps me track my progress and make informed decisions. Highly recommend for
            any wholesaler looking to streamline their operations!"
                />
              </div>
            </div>
          </div>
        </div>
      </MotionView>

      <MotionView>
        <div className="py-70" id="faq">
          <Heading.Base h3="Frequently Asked  " marked="Questions" />
          <div className="ms-container">
            <div className="ms-faq-wrap">
              <Faq />
              <Faq />
            </div>
          </div>
        </div>
      </MotionView>

      <MotionView>
        <div className="py-70">
          <Heading.Base h3="Our Blog" p="Ready to get organized and close more deals" />
          <div className="ms-container">
            <div className="ms-blogs">
              <BLog />
              <BLog />
              <BLog />
            </div>
          </div>
        </div>
      </MotionView>

      <MotionView>
        <div className="py-70" id="contact">
          <Heading.Base marked="Contact" h3End="Us" p="Ready to get organized and close more deals" />
          <div className="ms-container">
            <Contact />
          </div>
        </div>
      </MotionView>

      <MotionView>
        <div className="ms-mass-axis">
          <MassAxis />
        </div>
      </MotionView>

      <MotionView>
        {/* footer */}
        <Footer />
      </MotionView>
    </>
  )
}
