import { Circle, LucideIcon, MapPin } from "lucide-react";

type DeliveryUpdate = {
  locationType: string;
  Address: string;
  icon: LucideIcon;
};

const updates: DeliveryUpdate[] = [
  {
    locationType: "Pickup",
    Address: "1070 street st yard main glasco, san Francisco",
    icon: Circle,
  },
  {
    locationType: "Drop off",
    Address: "1070 street st yard main glasco, san Francisco",
    icon: MapPin,
  },
];

function DeliveryUpdates() {
  return (
    <div className="mx-auto px-8 bg-white ">
      <ol className="relative border-l border-gray-300">
        {updates.map((update, idx) => (
          <li key={idx} className="mb-2 ml-6">
            <span
              className={`${
                update.locationType === "Pickup"
                  ? `absolute -left-2 flex items-center justify-center w-4 h-4 rounded-full ring-8 ring-gray-200 bg-black`
                  : "absolute -left-3 flex items-center justify-center w-6 h-6 text-primary"
              }`}>
              <update.icon />
            </span>
            <p className="text-xs font-normal text-muted-foreground">
              {`${update.locationType} location`}
            </p>
            <div
              className={`${
                update.locationType === "Pickup"
                  ? `border-b border-dashed w-fit`
                  : null
              }`}>
              <h3 className="flex items-center mb-1 text-sm font-semibold">
                {update.Address}
              </h3>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default DeliveryUpdates;
