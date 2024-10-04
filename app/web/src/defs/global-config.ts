import type { MainConfig } from '@kiochan/next-ui-portal'

export const globalConfig = {
  site: { name: "Kio's Home", language: 'en' },

  appearance: {
    darkMode: true,
  },
  pages: [
    {
      name: 'Home',
      title: null,
      id: 'home',
      href: '/',
      description: "Welcome to the homepage of kiochan's playground",
      showOnNavbar: true,
      showOnSidebar: false,
    },
    {
      name: 'Not Found',
      title: 'Page Not Found',
      id: 'not_found',
      href: null,
      description: 'This Page is missing',
      showOnNavbar: false,
      showOnSidebar: false,
    },
    {
      name: 'Blog',
      title: 'Blog',
      id: 'blog',
      href: '/blog',
      description: "Kios' blog",
      showOnNavbar: true,
      showOnSidebar: false,
    },
    {
      name: 'Tools',
      title: 'Tools',
      id: 'tools',
      href: '/tools',
      description: 'Useful Tools',
      showOnNavbar: true,
      showOnSidebar: false,
    },
    {
      name: 'Login',
      title: 'Login',
      id: 'login',
      href: '/login',
      description: 'Login',
      showOnNavbar: false,
      showOnSidebar: false,
    },
    {
      name: 'Sign Up',
      title: 'Sign Up',
      id: 'sign-up',
      href: '/sign-up',
      description: 'Sign up',
      showOnNavbar: false,
      showOnSidebar: false,
    },
  ],
} as const satisfies MainConfig
