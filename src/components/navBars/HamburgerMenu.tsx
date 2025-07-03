import { Link, NavbarMenu, NavbarMenuItem } from "@heroui/react";

export default function HamburgerMenu() {
    const menuItems = [
        { label: "Take Payments", href: "#" },
        { label: "Power Your Business", href: "#" },
        { label: "Resources", href: "#" },
        { label: "Sign Up", href: "#" },
        { label: "Get Started", href: "#" },
    ];

    return (
        <NavbarMenu className="z-10 w-fit h-fit backdrop-blur-md rounded-lg p-2 bg-transparent">
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        className="w-full"
                        color={
                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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