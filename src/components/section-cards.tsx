import { LucideIcon, TrendingUpIcon, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards({
  items,
}: {
  items: {
    title: string;
    count: string;
    icon: LucideIcon;
    growthRate: string;
    profit: string;
  }[];
}) {
  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={item.title}
            className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-4 mb-4">
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>{item.title}</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {item.count}
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge
                    variant={"outline"}
                    className="flex gap-1 rounded-lg text-xs border-primary">
                    <Truck className="size-5 h-8 text-primary" />
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-row items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  <TrendingUpIcon className="size-5 text-green-500" />
                  {item.growthRate}
                </div>
                <div className="text-muted-foreground">
                  {`+${item.profit} today`}
                </div>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </>
  );
}
