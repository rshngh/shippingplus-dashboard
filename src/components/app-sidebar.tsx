"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Settings,
  ShoppingBag,
  ReceiptText,
  ShoppingCart,
  MessageSquareHeart,
  SquareUser,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { NavMain } from "@/components/nav-main";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { DropdownMenuCheckboxes } from "./site-header";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [],
    },
    {
      title: "Product",
      url: "#",
      icon: ShoppingBag,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "View Products",
          url: "#",
        },
      ],
    },
    {
      title: "Orders",
      url: "#",
      icon: ReceiptText,
      items: [
        {
          title: "View Orders",
          url: "#",
        },
        {
          title: "Reorder",
          url: "#",
        },
        {
          title: "Cancel",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: SquareUser,
      items: [
        {
          title: "Account",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },

    {
      title: "Manage Reviews",
      url: "#",
      icon: MessageSquareHeart,
      items: [],
    },
    {
      title: "Checkout",
      url: "#",
      icon: ShoppingCart,
      items: [],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))] mt-4 border-secondary"
      {...props}>
      <div className="md:hidden flex bg-white p-2 ">
        <Avatar className="mx-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <DropdownMenuCheckboxes />
      </div>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
