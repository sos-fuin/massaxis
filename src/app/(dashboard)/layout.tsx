import Sidebar from '@/components/dashboard/sidebar'
import { ThemeProvider } from '@/provider/theme-provider'
import { i_children } from '@/types/ReactTypes'
import type { Metadata } from 'next'

// import '../../_metronic/assets/fonticon/fonticon.css'
// import '../../_metronic/assets/keenicons/duotone/style.css'
// import '../../_metronic/assets/keenicons/outline/style.css'
// import '../../_metronic/assets/keenicons/solid/style.css'

// import '../../_metronic/assets/sass/style.react.scss'

export const metadata: Metadata = {
  title: 'Metronic || Dashboard',
  description: 'Metronic || Dashboard',
}

// import '../../_metronic/assets/sass/plugins.scss'
// import '../../_metronic/assets/sass/style.scss'
export default function Layout({ children }: i_children) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Sidebar>
        <main className="ms-main">{children}</main>
      </Sidebar>
    </ThemeProvider>
  )
}
