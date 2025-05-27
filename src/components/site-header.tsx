"use client";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { SidebarIcon, Bell, ChevronDown, Package } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

import { SearchForm } from "@/components/search-form";

import { Button } from "@/components/ui/button";

import { useSidebar } from "@/components/ui/sidebar";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8 md:hidden"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>
        <a href="#">
          <div className="sm:grid hidden flex-1 text-left text-xl leading-tight ">
            <span className=" font-extrabold flex">
              Shipping Plus <Package />
            </span>
          </div>
        </a>
        <div className="sm:ml-24">
          <SearchForm className="w-full sm:ml-auto sm:w-auto " />
        </div>

        <div className=" flex fixed right-0 top-0 m-2">
          <div className="relative m-2 ">
            <Bell />
            <div className="absolute  rounded-full bg-red-500 h-2 w-2 -right-1 -top-1"></div>
          </div>
          <div className="md:flex hidden">
            <Avatar className="mx-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <DropdownMenuCheckboxes />
          </div>
        </div>
      </div>
    </header>
  );
}

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-1">
          Maxbert
          <span>
            <span>
              <ChevronDown />
            </span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled>
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
