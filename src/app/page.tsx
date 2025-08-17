import About from "@/components/about";
import Overview from "@/components/overview";
import Stripes from "@/components/stripes";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Stripes />
      <About />
      <Separator />
      <Overview />
      <Separator />
    </>
  );
}