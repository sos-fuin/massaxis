import { image } from '@/assets'
import BreadCrumb from '@/components/breadcrumb'
import { BLog, RecentPost } from '@/components/card'
import Footer from '@/components/footer'
import Pagination from '@/components/pagination'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MassAxis Blog',
  description: 'MassAxis is a web application for managing your business.',
}
export default async function Blog() {
  return (
    <>
      <BreadCrumb title="Blog" />
      <section className="ms-container">
        <div className="latest-blog-2">
          <div className="blog-container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-details">
                  <div className="blog-details__images">
                    <Image className="blog-details__images-img" src={image.blog1} alt="image" />
                  </div>
                  <div className="blog-details__info"></div>
                  <Link href="/blog-details" className="blog-details__heading">
                    Work while you work, play while you play - this is a basic rule of repressive self-discipline.
                  </Link>
                  <p className="blog-details__paragraph">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry ipsum has been the
                    industry standard dummy text ever since the unknown printer took a galley of typesetting industry
                    standard{' '}
                    <Link href="/blog-details" className="read-more-dot">
                      ...
                    </Link>
                  </p>
                </div>
                <div className="blog-cards">
                  <BLog />
                  <BLog />
                  <BLog />
                  <BLog />
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
            <div className="row">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
