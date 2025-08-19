import Title from "@/components/title";
import Overview from "@/components/overview";
import Stripes from "@/components/stripes";
import { Separator } from "@/components/ui/separator";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Stripes />
      <Title />
      <Separator />
      <Overview />
      <About />
      <TechStack />
    </>
  );
}