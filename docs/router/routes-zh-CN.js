// routes order = menu order
const routes = [
  {
    path: '/zh-CN/getting-started',
    meta: {
      type: 'usage',
      label: '快速上手',
      url: 'zh-CN/usage/GettingStarted.md',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/usage/GettingStarted.md')
  },
  {
    path: '/zh-CN/i18n',
    meta: {
      type: 'usage',
      label: '国际化',
      url: 'zh-CN/usage/I18n.md',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/usage/I18n.md')
  },
  {
    path: '/zh-CN/button',
    meta: {
      type: 'component',
      label: 'Button',
      url: 'zh-CN/components/Btn.md',
      group: 'Basic',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Btn.md')
  },
  {
    path: '/zh-CN/button-group',
    meta: {
      type: 'component',
      label: 'ButtonGroup',
      url: 'zh-CN/components/BtnGroup.md',
      group: 'Basic',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/BtnGroup.md')
  },
  {
    path: '/zh-CN/collapse',
    meta: {
      type: 'component',
      label: 'Collapse',
      url: 'zh-CN/components/Collapse.md',
      group: 'Basic',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Collapse.md')
  },
  {
    path: '/zh-CN/dropdown',
    meta: {
      type: 'component',
      label: 'Dropdown',
      url: 'zh-CN/components/Dropdown.md',
      group: 'Popup',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Dropdown.md')
  },
  {
    path: '/zh-CN/modal',
    meta: {
      type: 'component',
      label: 'Modal',
      url: 'zh-CN/components/Modal.md',
      group: 'Popup',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Modal.md')
  },
  {
    path: '/zh-CN/tooltip',
    meta: {
      type: 'component',
      label: 'Tooltip',
      url: 'zh-CN/components/Tooltip.md',
      group: 'Popup',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Tooltip.md')
  },
  {
    path: '/zh-CN/popover',
    meta: {
      type: 'component',
      label: 'Popover',
      url: 'zh-CN/components/Popover.md',
      group: 'Popup',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Popover.md')
  },
  {
    path: '/zh-CN/multi-select',
    meta: {
      type: 'component',
      label: 'MultiSelect',
      url: 'zh-CN/components/MultiSelect.md',
      group: 'Form',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/MultiSelect.md')
  },
  {
    path: '/zh-CN/typeahead',
    meta: {
      type: 'component',
      label: 'Typeahead',
      url: 'zh-CN/components/Typeahead.md',
      group: 'Form',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Typeahead.md')
  },
  {
    path: '/zh-CN/date-picker',
    meta: {
      type: 'component',
      label: 'DatePicker',
      url: 'zh-CN/components/DatePicker.md',
      group: 'Form',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/DatePicker.md')
  },
  {
    path: '/zh-CN/time-picker',
    meta: {
      type: 'component',
      label: 'TimePicker',
      url: 'zh-CN/components/TimePicker.md',
      group: 'Form',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/TimePicker.md')
  },
  {
    path: '/zh-CN/alert',
    meta: {
      type: 'component',
      label: 'Alert',
      url: 'zh-CN/components/Alert.md',
      group: 'Notice',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Alert.md')
  },
  {
    path: '/zh-CN/notification',
    meta: {
      type: 'component',
      label: 'Notification',
      url: 'zh-CN/components/Notification.md',
      group: 'Notice',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Notification.md')
  },
  {
    path: '/zh-CN/message-box',
    meta: {
      type: 'component',
      label: 'MessageBox',
      url: 'zh-CN/components/MessageBox.md',
      group: 'Notice',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/MessageBox.md')
  },
  {
    path: '/zh-CN/navbar',
    meta: {
      type: 'component',
      label: 'Navbar',
      url: 'zh-CN/components/Navbar.md',
      group: 'Navigation',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Navbar.md')
  },
  {
    path: '/zh-CN/tabs',
    meta: {
      type: 'component',
      label: 'Tabs',
      url: 'zh-CN/components/Tabs.md',
      group: 'Navigation',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Tabs.md')
  },
  {
    path: '/zh-CN/breadcrumbs',
    meta: {
      type: 'component',
      label: 'Breadcrumbs',
      url: 'zh-CN/components/Breadcrumbs.md',
      group: 'Navigation',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Breadcrumbs.md')
  },
  {
    path: '/zh-CN/pagination',
    meta: {
      type: 'component',
      label: 'Pagination',
      url: 'zh-CN/components/Pagination.md',
      group: 'Indicator',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Pagination.md')
  },
  {
    path: '/zh-CN/progress-bar',
    meta: {
      type: 'component',
      label: 'ProgressBar',
      url: 'zh-CN/components/ProgressBar.md',
      group: 'Indicator',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/ProgressBar.md')
  },
  {
    path: '/zh-CN/carousel',
    meta: {
      type: 'component',
      label: 'Carousel',
      url: 'zh-CN/components/Carousel.md',
      group: 'Others',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Carousel.md')
  },
  {
    path: '/zh-CN/affix',
    meta: {
      type: 'component',
      label: 'Affix',
      url: 'zh-CN/components/Affix.md',
      group: 'Others',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/Affix.md')
  },
  {
    path: '/zh-CN/scroll-spy',
    meta: {
      type: 'component',
      label: 'ScrollSpy',
      url: 'zh-CN/components/ScrollSpy.md',
      group: 'Others',
      lang: 'zh-CN'
    },
    component: () => import('../pages/zh-CN/components/ScrollSpy.md')
  }
]

export default routes
