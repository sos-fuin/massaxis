export interface subItems {
  key: string
  label: string
  href: string
}

export interface SubMenuType {
  key: string
  label: string
  href?: string
  icon: string
  subItems?: subItems[]
}

export interface MenuItemsType {
  key: string
  label: string
  sub: SubMenuType[]
}
