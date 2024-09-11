import { MenuItemsType } from './menu-type'

export const UserMenuItems: MenuItemsType[] = [
  {
    key: '1',
    label: 'USER',
    sub: [
      {
        key: '1-1',
        label: 'Deals',
        icon: 'briefcase',
        href: '/user/deals',
      },
      {
        key: '1-2',
        label: 'Contacts',
        icon: 'profile-user',
        href: '/user/contacts',
      },

      {
        key: '1-3',
        label: 'My Account',
        icon: 'user',
        href: '/user/profile',
      },
      {
        key: '1-4',
        label: 'Agent',
        icon: 'user-square',
        href: '/user/agent',
      },

      {
        key: '1-6',
        label: 'Support',
        icon: 'devices',
        href: '/user/support',
      },
      {
        key: '1-7',
        label: 'Ticket System',
        icon: 'devices',
        href: '/user/ticket-system',
      },
      {
        key: '1-8',
        label: 'Campaign list',
        icon: 'devices',
        href: '/user/campaign-list',
      },
      {
        key: '1-9',
        label: 'Chats',
        icon: 'notification-status',
        href: '/user/message',
      },
      {
        key: '1-10',
        label: 'Calendar',
        icon: 'devices',
        href: '/user/calendar',
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
        href: '/user/power-dialer',
      },
      {
        key: '2-2',
        label: 'App Integration',
        icon: 'technology-4',
        href: '/user/app-integration',
      },
    ],
  },
]
