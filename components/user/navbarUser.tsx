import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from "@heroui/navbar";
import Image from "next/image";
import { useState } from "react";

const NavbarUser = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <HeroUINavbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      position="sticky"
      className={isMenuOpen ? "" : "box-shadow"}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <div className="flex items-center justify-start gap-1">
            <Image
              src="/Queuely-logo.svg"
              alt="Queuely Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold text-inherit">Queuely</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-primary-900" />
      </NavbarContent>

      <NavbarMenu className="bg-white">
        <div className="mx-4 mt-2 flex h-full flex-col items-center justify-center gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <div className="w-3/4 space-y-8" key={`${item}-${index}`}>
              <NavbarMenuItem className="w-full pt-8 text-center">
                <Link
                  href="/"
                  size="lg"
                  className="text-primary-900 text-2xl font-medium"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
              <div className="bg-primary-200 h-0.5 w-full"></div>
            </div>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default NavbarUser;
