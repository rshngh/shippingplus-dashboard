import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center w-full">
      <Link href={"/dashboard"}>Go to Dashboard</Link>
    </div>
  );
}
