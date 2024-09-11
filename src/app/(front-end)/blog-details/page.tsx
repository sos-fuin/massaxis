import { image } from '@/assets'
import BreadCrumb from '@/components/breadcrumb'
import { BLog, RecentPost } from '@/components/card'
import ImageCard from '@/components/card/img-card'
import Footer from '@/components/footer'
import { Heading, TittleParagraph, TittleText } from '@/ui'
import Social from '@/ui/social'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MassAxis Blog Details',
  description: 'MassAxis is a web application for managing your business.',
}
export default async function BlogDetails() {
  return (
    <>
      <BreadCrumb title="Blog Details" />
      <section className="ms-container">
        <div className="latest-blog-2 blog-details-page">
          <div className="blog-container">
            <div className="row">
              <div className="col-lg-8">
                <div className="mb-8 lg:mb-12">
                  <div className="blog-details__images mb-36">
                    <Image className="blog-details__images-img" src={image.blog1} alt="image" />
                  </div>
                  <TittleText className="mb-4">
                    Work while you work, play while you play - this is a basic rule of repressive self-discipline.
                  </TittleText>
                  <TittleParagraph>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry ipsum has been the
                    industry standard dummy text ever since the unknown printer took a galley of typesetting industry
                    standard...
                  </TittleParagraph>
                </div>
                <div className="mb-5 lg:mb-10">
                  <div className="blog-details__images mb-7">
                    <Image className="blog-details__images-img" src={image.blog1} alt="image" />
                  </div>
                  <TittleText className="mb-7">
                    Work while you work, play while you play - this is a basic rule of repressive self-discipline.
                  </TittleText>
                  <TittleParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui
                    officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.
                  </TittleParagraph>
                </div>
                <div className="mb-5 lg:mb-10">
                  <div className="blog-details__images areas-max mb-7 ">
                    <Image className="blog-details__images-img" src={image.blog1} alt="image" />
                    <Image className="blog-details__images-img" src={image.blog1} alt="image" />
                  </div>
                  <TittleText className="mb-7">
                    Work while you work, play while you play - this is a basic rule of repressive self-discipline.
                  </TittleText>
                  <TittleParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui
                    officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.
                  </TittleParagraph>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ms-aside-cards">
                  <div className="search-card">
                    <h1 className="search-card__heading">Search For Blogs</h1>
                    <form className="search-card__form" action="">
                      <input className="search-card__form-input" type="search" placeholder="search" />
                      <button className="search-card__form-submit" type="submit">
                        <Icon icon="carbon:search" />
                      </button>
                    </form>
                  </div>
                  <div className="sc-card">
                    <h1 className="sc-card__heading">Recent Post</h1>
                    <ul className="sc-card-lists">
                      <RecentPost />
                      <RecentPost />
                      <RecentPost />
                      <RecentPost />
                    </ul>
                  </div>
                  <ImageCard />
                  <div className="sc-card">
                    <h1 className="sc-card__heading">Category</h1>
                    <ul className="lf-group sc-card-lists">
                      <li className="lf-group-items active">
                        <span className="l-tx">CRM System</span>
                        <span className="l-ct">09</span>
                      </li>
                      <li className="lf-group-items">
                        <span className="l-tx">CRM System</span>
                        <span className="l-ct">09</span>
                      </li>
                      <li className="lf-group-items">
                        <span className="l-tx">CRM System</span>
                        <span className="l-ct">09</span>
                      </li>
                      <li className="lf-group-items">
                        <span className="l-tx">CRM System</span>
                        <span className="l-ct">09</span>
                      </li>
                    </ul>
                  </div>
                  <div className="sc-card">
                    <h1 className="sc-card__heading">Tags</h1>
                    <ul className="lf-group  sc-tags">
                      <li>
                        <p className="l-tag active">Bitcoin</p>
                      </li>
                      <li>
                        <p className="l-tag">Digital Wallet</p>
                      </li>
                      <li>
                        <p className="l-tag">Bitcoin</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-share">
              <Social />
            </div>

            <div className="py-70">
              <Heading.Base h3="Recent blog" />
              <div className="ms-container">
                <div className="ms-blogs">
                  <BLog />
                  <BLog />
                  <BLog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
