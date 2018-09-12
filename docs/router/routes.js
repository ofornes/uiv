import zhCN from './routes-zh-CN'

// routes order = menu order
const routes = [
  {
    path: '/',
    meta: {
      type: 'home',
      label: 'Home'
    },
    component: () => import('./../components/Home.vue')
  },
  {
    path: '/getting-started',
    meta: {
      type: 'usage',
      label: 'Getting Started',
      url: 'en-US/usage/GettingStarted.md',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/usage/GettingStarted.md')
  },
  {
    path: '/i18n',
    meta: {
      type: 'usage',
      label: 'I18n',
      url: 'en-US/usage/I18n.md',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/usage/I18n.md')
  },
  {
    path: '/button',
    meta: {
      type: 'component',
      label: 'Button',
      url: 'en-US/components/Btn.md',
      group: 'Basic',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Btn.md')
  },
  {
    path: '/button-group',
    meta: {
      type: 'component',
      label: 'ButtonGroup',
      url: 'en-US/components/BtnGroup.md',
      group: 'Basic',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/BtnGroup.md')
  },
  {
    path: '/collapse',
    meta: {
      type: 'component',
      label: 'Collapse',
      url: 'en-US/components/Collapse.md',
      group: 'Basic',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Collapse.md')
  },
  {
    path: '/dropdown',
    meta: {
      type: 'component',
      label: 'Dropdown',
      url: 'en-US/components/Dropdown.md',
      group: 'Popup',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Dropdown.md')
  },
  {
    path: '/modal',
    meta: {
      type: 'component',
      label: 'Modal',
      url: 'en-US/components/Modal.md',
      group: 'Popup',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Modal.md')
  },
  {
    path: '/tooltip',
    meta: {
      type: 'component',
      label: 'Tooltip',
      url: 'en-US/components/Tooltip.md',
      group: 'Popup',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Tooltip.md')
  },
  {
    path: '/popover',
    meta: {
      type: 'component',
      label: 'Popover',
      url: 'en-US/components/Popover.md',
      group: 'Popup',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Popover.md')
  },
  {
    path: '/multi-select',
    meta: {
      type: 'component',
      label: 'MultiSelect',
      url: 'en-US/components/MultiSelect.md',
      group: 'Form',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/MultiSelect.md')
  },
  {
    path: '/typeahead',
    meta: {
      type: 'component',
      label: 'Typeahead',
      url: 'en-US/components/Typeahead.md',
      group: 'Form',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Typeahead.md')
  },
  {
    path: '/date-picker',
    meta: {
      type: 'component',
      label: 'DatePicker',
      url: 'en-US/components/DatePicker.md',
      group: 'Form',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/DatePicker.md')
  },
  {
    path: '/time-picker',
    meta: {
      type: 'component',
      label: 'TimePicker',
      url: 'en-US/components/TimePicker.md',
      group: 'Form',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/TimePicker.md')
  },
  {
    path: '/alert',
    meta: {
      type: 'component',
      label: 'Alert',
      url: 'en-US/components/Alert.md',
      group: 'Notice',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Alert.md')
  },
  {
    path: '/notification',
    meta: {
      type: 'component',
      label: 'Notification',
      url: 'en-US/components/Notification.md',
      group: 'Notice',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Notification.md')
  },
  {
    path: '/message-box',
    meta: {
      type: 'component',
      label: 'MessageBox',
      url: 'en-US/components/MessageBox.md',
      group: 'Notice',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/MessageBox.md')
  },
  {
    path: '/navbar',
    meta: {
      type: 'component',
      label: 'Navbar',
      url: 'en-US/components/Navbar.md',
      group: 'Navigation',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Navbar.md')
  },
  {
    path: '/tabs',
    meta: {
      type: 'component',
      label: 'Tabs',
      url: 'en-US/components/Tabs.md',
      group: 'Navigation',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Tabs.md')
  },
  {
    path: '/breadcrumbs',
    meta: {
      type: 'component',
      label: 'Breadcrumbs',
      url: 'en-US/components/Breadcrumbs.md',
      group: 'Navigation',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Breadcrumbs.md')
  },
  {
    path: '/pagination',
    meta: {
      type: 'component',
      label: 'Pagination',
      url: 'en-US/components/Pagination.md',
      group: 'Indicator',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Pagination.md')
  },
  {
    path: '/progress-bar',
    meta: {
      type: 'component',
      label: 'ProgressBar',
      url: 'en-US/components/ProgressBar.md',
      group: 'Indicator',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/ProgressBar.md')
  },
  {
    path: '/carousel',
    meta: {
      type: 'component',
      label: 'Carousel',
      url: 'en-US/components/Carousel.md',
      group: 'Others',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Carousel.md')
  },
  {
    path: '/affix',
    meta: {
      type: 'component',
      label: 'Affix',
      url: 'en-US/components/Affix.md',
      group: 'Others',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/Affix.md')
  },
  {
    path: '/scroll-spy',
    meta: {
      type: 'component',
      label: 'ScrollSpy',
      url: 'en-US/components/ScrollSpy.md',
      group: 'Others',
      lang: 'en-US'
    },
    component: () => import('../pages/en-US/components/ScrollSpy.md')
  },
  ...zhCN
]

export default routes
