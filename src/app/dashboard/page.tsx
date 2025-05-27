import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Truck } from "lucide-react";
import { SectionCards } from "@/components/section-cards";
import { NavSelect } from "@/components/nav-select";
import CardAreaInteractive from "@/components/card-area-interactive";
import { DataTable } from "@/components/data-table";

const data = {
  shipment: [
    {
      title: "Total Units Packed",
      count: "83071",
      icon: Truck,
      growthRate: "13%",
      profit: "7k",
    },
    {
      title: "Total Shipments",
      count: "831071",
      icon: Truck,
      growthRate: "13%",
      profit: "7k",
    },
    {
      title: "Active Shipments",
      count: "831071",
      icon: Truck,
      growthRate: "13%",
      profit: "7k",
    },
    {
      title: "Delivered Shipments",
      count: "831071",
      icon: Truck,
      growthRate: "13%",
      profit: "7k",
    },
  ],
};

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col  ">
        <SiteHeader />
        <div className="flex flex-1 ">
          <AppSidebar />
          <SidebarInset>
            <div className="bg-secondary p-3 flex flex-col sm:flex-row justify-between w-auto ">
              <div className="">
                <h1 className="text-4xl font-semibold px-2 mt-2">
                  Welcome back, Max
                </h1>
                <p className="text-xs p-2 text-muted-foreground">
                  Here is what is happening with your store today.
                </p>
              </div>

              {/* nav select starts */}
              <div className="bg-white h-fit  mt-2 rounded-md shadow-sm  w-fit ">
                <NavSelect />
              </div>
              {/* nav select ends */}
            </div>

            {/* section cards start */}
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 bg-secondary">
              <SectionCards items={data.shipment} />
            </div>
            {/* section cards tend */}

            <CardAreaInteractive />

            <div className="bg-white m-4 p-4 rounded-xl shadow-sm ">
              <DataTable />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
