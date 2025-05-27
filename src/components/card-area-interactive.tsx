import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TruckElectric } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MyMap } from "./interactive-map";
import DeliveryUpdates from "./delivery-updates";

const data = {
  items: [
    {
      title: "Category",
      content: "Electronics",
    },
    {
      title: "Distance",
      content: "120km",
    },
    {
      title: "Estimation",
      content: "2d 4h",
    },
    {
      title: "Weight",
      content: "10kg",
    },
    {
      title: "Fee",
      content: "1000",
    },
  ],
};

function CardAreaInteractive() {
  return (
    <div className="*:data-[slot=card]:shadow-xs  grid grid-cols-1 gap-4 p-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-4 mb-4 lg:grid-cols-2 bg-background rounded-xl shadow-md m-4 ">
      <div>
        <p className="mb-2">In Transit Shipments</p>
        <ScrollArea className=" h-[260px] w-full rounded-lg pr-2 ">
          <Card className="@container/card w-full border border-primary mb-4 ">
            <CardHeader className="relative">
              <CardDescription>Shipment Number</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                831071
              </CardTitle>
              <div className="absolute right-5 top-5">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs">
                  <TruckElectric className="size-12  text-primary" />
                </Badge>
              </div>
            </CardHeader>

            <DeliveryUpdates />
          </Card>
          <Card className="@container/card border shadow-none w-full mb-4">
            <CardHeader className="relative">
              <CardDescription>Shipment Number</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                831071
              </CardTitle>
              <div className="absolute right-5 top-5">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs">
                  <TruckElectric className="size-12  text-primary" />
                </Badge>
              </div>
            </CardHeader>
            <DeliveryUpdates />
          </Card>
          <Card className="@container/card border shadow-none w-full">
            <CardHeader className="relative">
              <CardDescription>Shipment Number</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                831071
              </CardTitle>
              <div className="absolute right-5 top-5">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs">
                  <TruckElectric className="size-12  text-primary" />
                </Badge>
              </div>
            </CardHeader>
            <DeliveryUpdates />
          </Card>
        </ScrollArea>
      </div>
      {/* Map starts */}
      <div className="order-first lg:order-last">
        <p className="mb-2"> On the Way</p>
        <MyMap />
        <div className="flex gap-5 overflow-x-auto  row-gap-8 justify-between  ">
          {data.items.map((item, index) => {
            return (
              <div
                key={item.title}
                className={`${
                  index != 0 ? "min-w-20 border-l px-2 pt-1" : ""
                } `}>
                <p className="text-xs text-muted-foreground tracking-wide">
                  {item.title}
                </p>
                <p className="text-sm ">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* maps ends */}
    </div>
  );
}

export default CardAreaInteractive;
