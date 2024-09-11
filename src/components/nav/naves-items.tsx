'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function NavesItems() {
  const path = usePathname()
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const sections = ['services2', 'contact2', 'pricing2', 'services', 'contact', 'pricing']

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`)
        }

        if (!entry.isIntersecting) {
          setActiveLink('')
        }
      })
    }

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Adjust threshold as needed
    })

    sections.forEach((id) => {
      const section = document.getElementById(id)

      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) observer.unobserve(section)
      })
    }
  }, [path])

  // console.log({ hash })
  useEffect(() => {
    const hash = typeof window !== 'undefined' && window.location.hash
    if (hash) {
      const section = document.getElementById(hash.substring(1))

      if (section) {
        const offset = 180
        const elementPosition = section.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }, [path])

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const sectionId = href.split('#')[1]
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 180
      const elementPosition = section.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveLink(`#${sectionId}`)
      window.history.pushState(null, '', `/#${sectionId}`)
    }
  }

  return (
    <>
      <ul className="ms-nav-menu">
        {[
          { href: '/#services', label: 'Services' },
          { href: '/#pricing', label: 'Pricing' },
          { href: '/blog', label: 'Blog' },
          { href: '/privacy-terms', label: 'Privacy & Terms' },
          { href: '/#contact', label: 'Contact' },
        ].map((item) => (
          <li key={item.href}>
            <NavLink activeLink={activeLink} item={item} path={path} scrollToSection={scrollToSection} />
          </li>
        ))}
      </ul>
      <ul className="ms-nav-actions">
        <li>
          <Link className="ms-in  " href="/sign-in">
            <span className="n-text">
              <Icon icon="mdi:user" />
            </span>
            <span>Sign In</span>
          </Link>
        </li>
        <li>
          <Link className="ms-btn-outline ms-nav-btn" href="/sign-up">
            <span className="n-text">Start free trial</span>
            <span>
              <Icon icon="hugeicons:arrow-right-01" />
            </span>
          </Link>
        </li>
      </ul>
    </>
  )
}

const NavLink = ({ item, path, activeLink, scrollToSection }: any) => {
  if (!(path === '/blog' || path === '/privacy-terms') && item.href.startsWith('/#')) {
    return (
      <button
        className={`ms-nav-link ${path === item.href || activeLink === item.href.substring(1) ? 'active' : ''}`}
        onClick={(event) => {
          scrollToSection(event, item.href)
        }}>
        {item.label}
      </button>
    )
  }

  return (
    <Link
      className={`ms-nav-link ${path === item.href || activeLink === item.href.substring(1) ? 'active' : ''}`}
      href={item.href}>
      {item.label}
    </Link>
  )
}

/*
  <Link
      className={`ms-nav-link ${path === item.href || activeLink === item.href.substring(1) ? 'active' : ''}`}
      href={item.href}
      onClick={(event) => {
        if (item.href.startsWith('/#')) {
          scrollToSection(event, item.href)
        }

        if (path === '/blog' || path === '/privacy-policy') {
          router.push(item.href, { scroll: false })
          scrollToSection(event, item.href)
        }
      }}>
      {item.label}
    </Link>
*/
