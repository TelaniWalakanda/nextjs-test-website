import { Link, NavbarMenu, NavbarMenuItem } from "@heroui/react";

export const HamburgerMenu = (
) => {
    const menuItems = [
        { label: "Take Payments", href: "#" },
        { label: "Power Your Business", href: "#" },
        { label: "Resources", href: "#" },
        { label: "Sign Up", href: "/sign-up" },
        { label: "Get Started", href: "#" },
    ];

    return (
        <NavbarMenu className="z-10 absolute top-0 pt-20  max-h-[40%] h-fit w-fit backdrop-blur-md rounded-lg bg-transparent justify-self-end">
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        className="w-full"
                        color={index === menuItems.length - 1 ? "secondary" : "foreground"
                        }
                        href={item.href}
                        size="lg"
                    >
                        {item.label}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    );
}