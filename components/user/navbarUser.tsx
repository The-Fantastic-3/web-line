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
import NextLink from "next/link";
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
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/Queuely-logo.svg"
              alt="Queuely Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-inherit font-semibold">Queuely</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-primary-900" />
      </NavbarContent>

      <NavbarMenu className="bg-white">
        <div className="mx-4 mt-2 flex flex-col gap-2 justify-center h-full items-center">
          {siteConfig.navMenuItems.map((item, index) => (
            <div className="space-y-8 w-3/4" key={`${item}-${index}`}>
              <NavbarMenuItem className="w-full text-center pt-8">
                <Link
                  href="/"
                  size="lg"
                  className="text-primary-900 text-2xl font-medium"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
              <div className="w-full h-0.5 bg-primary-200"></div>
            </div>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default NavbarUser;
