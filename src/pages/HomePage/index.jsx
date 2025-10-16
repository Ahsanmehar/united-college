import { Button } from "@/components/ui/button";
import BreadCrumb from "../../components/BreadCrumb";
import { Input } from "@/components/ui/input";
import Hero from "./hero";
import TechIcon from "@/components/TechIcon";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function HomePage() {

  return (
    <>
      <BreadCrumb
        pageName="Programs"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rem ipsam modi aliquam"
        url="/prgram"
      />
      <main className="bg-primary/50 text-2xl font-bold">
        <Button className="w-[500px] mb-10 !h-20" variant="default" size="lg">
          <TechIcon name="clock" />
          Learn More about it
        </Button>
        <Button className="w-[500px] mb-10" variant="secondary" size="lg">
          Learn More about it
          <TechIcon name="brain-circuit" />
        </Button>
        <Label>Name</Label>
        <Input type="email" placeholder="Enter password" />
        <Textarea />
        <div className="w-99 h-99 bg-white shadow-three"></div>
        <h1 className="text-secondary bg-primary">Ahsan</h1>
        <Hero />
      </main>
    </>
  );
}
