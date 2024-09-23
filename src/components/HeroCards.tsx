import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, YoutubeIcon } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://i1.sndcdn.com/artworks-XJdVplPCbvDvJlH7-jF9c4A-t500x500.jpg"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Rick Astley</CardTitle>
            <CardDescription>@never_gonna_give_you_up</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Join Enigma! It'll never give you up.</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.ibb.co/rthmJPW/Logo.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Follow us on socials</CardTitle>
          
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            We are everywhere, really! Find us on the following socials and never miss an update, we share sign-up forms, flash announcements and more
          </p>
        </CardContent>

        <CardFooter>
          <div>
          <a
              rel="noreferrer noopener"
              href="https://discord.gg/3ez8adPJ67"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Discord icon</span>
              <DiscordLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://github.com/MU-Enigma"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://instagram.com/enigma.mu"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <InstagramLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://in.linkedin.com/company/mu-enigma"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://youtube.com/@mu-enigma"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Skill Development
          </CardTitle>

          <CardDescription>
            Workshops, projects and challenges to enhance your skills and meet new people. 
          </CardDescription>
        </CardHeader>

        <CardContent>
          <a href="#features" className="w-full md:w-1/3">
            <Button>Find out more</Button>
          </a>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Collaborative  Projects", "Hackathons", "Special Committees"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Creativity</CardTitle>
            <CardDescription className="text-md mt-2">
              Collaborate with like-minded individuals and bring your ideas to life.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
