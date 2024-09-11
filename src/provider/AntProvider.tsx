'use client'
import { store } from '@/store'
import { i_children } from '@/types/ReactTypes'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Provider } from 'react-redux'
export const Providers = ({ children }: i_children) => {
  // AntdRegistry is for installing ant design package
  // Provider is from Redux
  return (
    <AntdRegistry>
      <Provider store={store}>{children}</Provider>
    </AntdRegistry>
  )
}
