import { MenuItemsType } from './menu-type'

export const AdminMenuItems: MenuItemsType[] = [
  {
    key: '1',
    label: 'USER',
    sub: [
      {
        key: '1-1',
        label: 'Users',
        icon: 'profile-user',
        href: '',
        subItems: [
          {
            key: '1-1-1',
            label: 'Users List',
            href: '/admin/users/users-list',
          },
          {
            key: '1-1-2',
            label: 'Pending Users',
            href: '/admin/users/pending-users',
          },
        ],
      },
      {
        key: '1-2',
        label: 'Campaigns',
        icon: 'profile-user',
        href: '/admin/campaigns',
        subItems: [
          // {
          //   key: '1-1-3',
          //   label: 'Users',
          //   href: '/admin/users',
          // },
        ],
      },
      {
        key: '1-3',
        label: 'Support',
        icon: 'user',
        href: '/admin/support/',
      },
      {
        key: '1-4',
        label: 'Users Subscription',
        icon: 'user-square',
        href: '/admin/users-subscription',
      },
      {
        key: '1-5',
        label: 'Manage Subscription',
        icon: 'filter-edit',
        href: '/admin/manage-subscription',
      },
      {
        key: '1-6',
        label: 'Manage Rolls',
        icon: 'devices',
        href: '/admin/manage-rolls',
      },
      {
        key: '1-6-1',
        label: 'Roll Permission',
        icon: 'devices',
        href: '/admin/roll-permission',
      },
      {
        key: '1-7',
        label: 'Ticket System',
        icon: 'devices',
        href: '/admin/user',
      },
      {
        key: '1-9',
        label: 'Deals',
        icon: 'devices',
        href: '/admin/deals',
      },

      {
        key: '1-8',
        label: 'Marketing',
        icon: 'devices',
        href: '',
        subItems: [
          {
            key: '1-8-1',
            label: 'Email Marketing',
            href: '/admin/marketing/email-marketing',
          },
          {
            key: '1-8-2',
            label: 'SMS Marketing',
            href: '/admin/marketing/sms-marketing',
          },
          {
            key: '1-8-3',
            label: 'User feedback',
            href: '/admin/marketing/user-feedback',
          },
        ],
      },
    ],
  },
  {
    key: '2',
    label: 'PAGES',
    sub: [
      {
        key: '2-1',
        label: 'Power Dialer',
        icon: 'emoji-happy',
        href: '/admin/power-dialer',
      },
      {
        key: '2-2',
        label: 'App Integration',
        icon: 'technology-4',
        href: '/admin/app-integration',
      },
      {
        key: '2-3-1',
        label: 'Library',
        icon: 'devices',
        href: '/admin/library',
      },
      {
        key: '2-3-2',
        label: 'Blog',
        icon: 'devices',
        href: '/admin/blog',
      },
      {
        key: '2-3-6',
        label: 'Setting',
        icon: 'setting-2',
        href: '',
        subItems: [
          {
            key: '1-8-1-1-1',
            label: 'Site Setting',
            href: '/admin/setting/site-setting',
          },
          {
            key: '1-8-2-1',
            label: 'Term & Condition',
            href: '/admin/setting/term-condition',
          },
        ],
      },
    ],
  },
]
