import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <Badge variant="outline" className="text-sm py-2">
          <span className="mr-2 text-primary">
            <Badge variant="destructive">Complete</Badge>
          </span>
          <span> REBOOT Orientation, Sep 24 </span>
        </Badge>
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            
              We are
          </h1>{" "}
          {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#D247BF] to-primary text-transparent bg-clip-text">
              Enigma
            </span>{" "}
          </h2>
          <h3 className="text-4xl">
            We are {" "}
            <span className="inline bg-clip-text">
              Computer Science
            </span>{" "}
          </h3>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Enigma, the official Computer Science club of Mahindra University.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="#about" className="w-full md:w-1/3">
            <Button className="w-full md:w-1/3">About Us</Button>
          </a>
          <a
            rel="noreferrer noopener"
            href="https://discord.gg/3ez8adPJ67"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Join us on Discord
            <DiscordLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
