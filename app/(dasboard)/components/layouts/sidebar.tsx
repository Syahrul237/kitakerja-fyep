"use client";

import Image from "next/image";
import {
  FiBox,
  FiCreditCard,
  FiLayers,
  FiLogOut,
  FiShoppingCart,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Products",
      icon: FiBox,
      Link: "/admin/products",
    },
    {
      name: "Categories",
      icon: FiLayers,
      Link: "/admin/categories",
    },
    {
      name: "Transaction",
      icon: FiShoppingCart,
      Link: "/admin/transactions",
    },
    {
      name: "Bank Informations",
      icon: FiCreditCard,
      Link: "/admin/bank-info",
    },
  ];

  return (
    <aside className="w-80 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
      <div className="py-8 px-14 border-b border-gray-200">
        <Image
          src="/images/logo-admin.svg"
          alt="logo admin"
          width={215}
          height={36}
        />
      </div>
      ;
      <div className="flex flex-col gap-2 mt-9 p-5">
        {menuItems.map((item, index) => {
          const isActive = item.Link === pathname;
          return (
            <Link
              href={item.Link}
              key={index}
              className={`flex gap-3 items-center py-3 px-4.5 rounded-lg font-medium duration-300 ${isActive ? "bg-primary/15 text-primary" : "hover:bg-gray-100"}`}
            >
              <item.icon size={24} />
              <span>
                {item.name} {isActive && ""}
              </span>
            </Link>
          );
        })}
      </div>
      <Link
        href="#"
        className="flex cursor-pointer gap-3 font-medium py-3 px-4.5 mx-5 hover:bg-gray-100 duration-300 rounded-lg mt-auto mb-10"
      >
        <FiLogOut size={24} />
        LogOut
      </Link>
    </aside>
  );
}

export default Sidebar;
