import { home } from 'ionicons/icons'

const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: home
  },
  {
    title: 'Page 1',
    url: '/page1',
    icon: home
  },
  {
    title: 'Page 2',
    url: '/page2',
    icon: home
  },
  {
    title: 'Page 3',
    url: '/page3',
    icon: home
  },
  {
    title: 'Page 4',
    url: '/page4',
    icon: home
  }
]

const tabsItems = [
  {
    title: 'Page 1',
    tab: 'page1',
    url: '/page1',
    icon: home
  },
  {
    title: 'Page 2',
    tab: 'page2',
    url: '/page2',
    icon: home
  },
  {
    title: 'Page 3',
    tab: 'page3',
    url: '/page3',
    icon: home
  },
  {
    title: 'Page 4',
    tab: 'page4',
    url: '/page4',
    icon: home
  }
]

const withTabs = [
  ...tabsItems.map(({ url }) => url),
  '/dashboard'
]

export {
  menuItems,
  tabsItems,
  withTabs
}
