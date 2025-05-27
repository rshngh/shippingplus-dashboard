import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NavSelect() {
  return (
    <Select>
      <div className="flex  m-auto">
        <p className="m-auto text-sm p-1 pl-2 text-nowrap text-muted-foreground">
          Show stats:
        </p>
        <SelectTrigger className="w-[180px] border-none shadow-none">
          <SelectValue placeholder="Choose option" />
        </SelectTrigger>
      </div>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Show reports:</SelectLabel>
          <SelectItem value="per-day">Per Day</SelectItem>
          <SelectItem value="per-week">Per Week</SelectItem>
          <SelectItem value="per-month">Per Month</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
