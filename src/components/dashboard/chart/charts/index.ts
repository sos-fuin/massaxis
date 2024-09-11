import dynamic from 'next/dynamic'

// Convert static imports to dynamic imports with ssr: false
const ChartsWidget1 = dynamic(() => import('./ChartsWidget1'), { ssr: false })
const ChartsWidget2 = dynamic(() => import('./ChartsWidget2'), { ssr: false })
const ChartsWidget3 = dynamic(() => import('./ChartsWidget3'), { ssr: false })
const ChartsWidget4 = dynamic(() => import('./ChartsWidget4'), { ssr: false })
const ChartsWidget5 = dynamic(() => import('./ChartsWidget5'), { ssr: false })
const ChartsWidget6 = dynamic(() => import('./ChartsWidget6'), { ssr: false })
const ChartsWidget7 = dynamic(() => import('./ChartsWidget7'), { ssr: false })
const ChartsWidget8 = dynamic(() => import('./ChartsWidget8'), { ssr: false })
const ChartsWidget9 = dynamic(() => import('./ChartsWidget9'), { ssr: false })
const ChartsWidget10 = dynamic(() => import('./ChartsWidget10'), { ssr: false })
const ChartsWidget11 = dynamic(() => import('./ChartsWidget11'), { ssr: false })
const ChartsWidget12 = dynamic(() => import('./ChartsWidget12'), { ssr: false })
const ChartsWidget13 = dynamic(() => import('./ChartsWidget13'), { ssr: false })
const ChartsWidget14 = dynamic(() => import('./ChartsWidget14'), { ssr: false })
const ChartsWidget15 = dynamic(() => import('./ChartsWidget15'), { ssr: false })
const ChartsWidget16 = dynamic(() => import('./ChartsWidget16'), { ssr: false })

export {
  ChartsWidget1,
  ChartsWidget10,
  ChartsWidget11,
  ChartsWidget12,
  ChartsWidget13,
  ChartsWidget14,
  ChartsWidget15,
  ChartsWidget16,
  ChartsWidget2,
  ChartsWidget3,
  ChartsWidget4,
  ChartsWidget5,
  ChartsWidget6,
  ChartsWidget7,
  ChartsWidget8,
  ChartsWidget9,
}
