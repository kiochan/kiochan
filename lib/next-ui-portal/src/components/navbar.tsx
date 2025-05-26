import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
  Button,
  Link,
} from '@nextui-org/react'
import type { PageConfig, Pages } from '../types/page-config'
import { Fragment } from 'react/jsx-runtime'

export interface NavbarProps {
  pages: Readonly<Pages>
}

export function Navbar(props: NavbarProps): React.JSX.Element {
  return (
    <NextUINavbar isBordered>
      <NavbarBrand>
        <Link
          color='foreground'
          href='/'
          aria-current='page'
          aria-description='return to homepage'
        >
          <p className='font-bold text-inherit'>Kio's Home</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {props.pages
          .filter(
            (page): page is PageConfig & { showOnNavbar: true } =>
              page.showOnNavbar,
          )
          .filter(
            (page): page is PageConfig & { showOnNavbar: true; href: string } =>
              page.href !== null,
          )
          .map((page) => (
            <Fragment key={page.id}>
              <NavbarItem>
                <Link href={page.href} color='foreground' aria-current='page'>
                  {page.name}
                </Link>
              </NavbarItem>
            </Fragment>
          ))}
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href={'login'}>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href={'sign-up'} color='primary' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}
