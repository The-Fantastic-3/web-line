"use client";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Chip } from "@heroui/chip";
import { Badge } from "@heroui/badge";
import {
  Bars3Icon,
  BellIcon,
  CalendarDaysIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import { useRouter } from "next/router";
import * as motion from "motion/react-client";
import { getName, getShopName } from "@/utils/token";
import { useEffect, useState } from "react";

const siteAdminConfig = [
  {
    label: "หน้าหลัก",
    href: "/",
    icon: () => <CalendarDaysIcon className="my-auto size-5" />,
  },
  {
    label: "แดชบอร์ด",
    href: "/dashboard",
    icon: () => <ChartBarSquareIcon className="my-auto size-5" />,
  },
  {
    label: "คำขอทั้งหมด",
    href: "/notifications",
    icon: () => <BellIcon className="my-auto size-5" />,
  },
  {
    label: "divider",
    href: "#",
  },
  {
    label: "การตั้งค่า",
    href: "/settings",
    icon: () => <Cog6ToothIcon className="my-auto size-5" />,
  },
  {
    label: "ออกจากระบบ",
    href: "/logout",
    icon: () => <ArrowLeftStartOnRectangleIcon className="my-auto size-5" />,
  },
];

const NavbarAdmin = (props: { notiCount: number }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [shopName, setShopName] = useState<string | null>(null);
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const nameFromToken = getName();
    const shopNameFromToken = getShopName();
    if (nameFromToken) {
      setUsername(nameFromToken);
    }
    if (shopNameFromToken) {
      setShopName(shopNameFromToken);
    }
  }, []);

  return (
    <>
      <header className="box-shadow flex w-full justify-between bg-white px-4 py-2">
        <div className="flex gap-2">
          <Image
            src="/Queuely-logo.svg"
            alt="Queuely Logo"
            width={52}
            height={52}
            className="my-auto"
          />
          <div className="flex w-full flex-col justify-center">
            <div className="flex w-56 gap-1 truncate">
              <p className="font-medium">สวัสดี, </p>
              <span className="text-primary-700 truncate">{username}</span>
            </div>
            <p className="w-56 truncate text-sm text-neutral-400">{shopName}</p>
          </div>
        </div>
        <div className="flex">
          <Button variant="light" className="my-auto" isIconOnly>
            <Badge
              color="danger"
              content={`${props.notiCount > 9 ? "9+" : props.notiCount}`}
              shape="circle"
              size="sm"
            >
              <BellIcon className="text-primary-700 size-6" />
            </Badge>
          </Button>
          <Button
            onPress={onOpen}
            variant="light"
            className="my-auto"
            isIconOnly
          >
            <Bars3Icon className="text-primary-700 size-6" />
          </Button>
        </div>
        <Drawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="xs"
          placement="left"
          radius="none"
          backdrop="blur"
          hideCloseButton
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex gap-1">
                  <Image
                    src="/Queuely-logo.svg"
                    alt="Queuely Logo"
                    width={52}
                    height={52}
                    className="my-auto"
                  />
                  <p className="my-auto text-lg font-medium">Queuely</p>
                </DrawerHeader>
                <DrawerBody className="flex flex-col px-6">
                  <div className="flex flex-col">
                    {siteAdminConfig.map((item, index) => {
                      const isActive = router.pathname.startsWith(item.href);
                      return (
                        <div key={`${item.label}-${index}`}>
                          {item.label !== "divider" ? (
                            <motion.div
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: index * 0.1 + 0.08 }}
                              className={`relative flex justify-between rounded-xl py-4 pr-3 pl-6 ${isActive && "bg-primary-100 text-primary-700"} ${
                                item.label === "ออกจากระบบ"
                                  ? "text-red-600"
                                  : ""
                              }`}
                            >
                              <div className="flex gap-4">
                                {item.icon && item.icon()}
                                <p className="my-auto">{item.label}</p>
                              </div>
                              {item.label === "คำขอทั้งหมด" && (
                                <Chip
                                  size="sm"
                                  variant="shadow"
                                  classNames={{
                                    base: "bg-linear-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                                    content:
                                      "drop-shadow-xs shadow-black text-white",
                                  }}
                                >
                                  {props.notiCount > 9 ? "9+" : props.notiCount}
                                </Chip>
                              )}
                            </motion.div>
                          ) : (
                            <div className="h-[1px] w-full bg-neutral-200"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </DrawerBody>
                <DrawerFooter className="w-full pb-16">
                  <div className="flex w-full flex-col gap-4 rounded-3xl bg-linear-to-br from-[#9162FE] to-[#4B30E4] px-4 py-6 text-white">
                    <div>
                      <p>
                        Powered by{" "}
                        <span className="text-secondary-700 font-semibold">
                          Fantastic3
                        </span>
                      </p>
                      <p className="text-sm">© 2025</p>
                      <p className="text-sm">All rights reserved</p>
                    </div>
                    <Button className="bg-white" size="md">
                      ติดต่อเรา
                    </Button>
                  </div>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
};

export default NavbarAdmin;
