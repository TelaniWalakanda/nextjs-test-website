import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react';
import { Logo } from '@/components/icons/Logo';

export default function NavBarHeader() {
  return (
    <>
      <Navbar
        isBlurred={false}
        className="px-10 absolute left-0 top-0 bg-transparent z-50 max-h-16"
        classNames={{
          wrapper: 'max-w-full'
        }}
      >
        <NavbarBrand className="flex justify-start">
          <Logo />
        </NavbarBrand>
        <NavbarContent className="hidden justify-center gap-8 sm:flex">
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
          <NavbarItem>
            <Button
              as={Link}
              className="rounded-lg bg-black"
              href="#"
              variant="flat"
              radius="lg"
            >
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
