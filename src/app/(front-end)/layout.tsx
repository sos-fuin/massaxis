import { Motion } from '@/components/motion'
import Nav from '@/components/nav'
import { i_children } from '@/types/ReactTypes'

export default function RootLayout({ children }: i_children) {
  return (
    <main style={{ background: '#080921' }}>
      <Motion>
        <Nav />
      </Motion>
      <div className="ms-main-frontend">{children}</div>
      {/* <Tost /> */}
    </main>
  )
}
