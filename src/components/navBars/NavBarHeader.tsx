import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from '@heroui/react';
import React from 'react';
import { Logo } from '@/components/icons/Logo';
import { HamburgerMenu } from '@/components/navBars/HamburgerMenu';

export const NavBarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={false}
        className="px-10 absolute left-0 top-0 bg-transparent z-50 max-h-16"
        classNames={{
          wrapper: 'max-w-full'
        }}
      >
        <NavbarBrand className="flex justify-start">
          <Logo />
        </NavbarBrand>
        <NavbarContent className="hidden justify-center gap-8 md:flex">
          <NavbarItem>
            <Link href="#" className="text-white">
              Take Payments
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" className="text-white">
              Power Your Business
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-white">
              Resources
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="gap-4">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-white">
              Sign Up
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              className="rounded-lg bg-black text-white"
              href="#"
              variant="flat"
              radius="lg"
            >
              Get Started
            </Button>
          </NavbarItem>

          {/* // Hamburger menu for mobile view */}
          <NavbarItem className="flex md:hidden">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden z-10"
            />
            {isMenuOpen && <HamburgerMenu />}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
