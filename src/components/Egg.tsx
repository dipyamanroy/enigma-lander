import React, { useState } from 'react';
import './Egg.css'; 

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "https://mu-enigma.org/#about",
    label: "About Us",
  },
  {
    href: "https://mu-enigma.org/#features",
    label: "What We Do",
  },
  {
    href: "https://mu-enigma.org/#team",
    label: "Meet The Team",
  },
  {
    href: "https://mu-enigma.org/#faq",
    label: "FAQ",
  },
];

const Egg: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const handleBlur = () => {
        if (inputValue == '4') {
            setMessage('Wrong ❌');
            setIsCorrect(false);
        } else {
            setMessage('Correct! ✔️ <br> look down <br> ⬇️');
            setIsCorrect(true);
        }
    };

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        
        <div className="main">
            <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center"
            >
              <img src="https://i.ibb.co/0mN0h4n/icon-trans.png" alt="Logo" className="h-10 w-10 mr-2" />
              Enigma
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Enigma
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/MU-Enigma/"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/MU-Enigma"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
            <div className="intro">
                <p>Free pizza? That is on it's way! In the mean time, solve this math problem. Should be pretty easy, right?</p>
            </div>
            <div className="math">
                <p>2 × 2 = <input 
                            className="answer" 
                            type="text" 
                            inputMode="numeric" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onBlur={handleBlur} />
                </p>
            </div>
            <p className="verify" style={{ color: (isCorrect ? 'greenyellow' : 'red')}} dangerouslySetInnerHTML={{ __html: message }} />
            {isCorrect && (
                <div className="github" style={{visibility: isCorrect ? 'visible' : 'hidden'}}>
                    <button className="gitbutton" onClick={() => window.location.href = 'https://masonicgit.github.io/pacman/'}>
                        <GitHubLogoIcon className="w-20 h-20 items-center align-middle" />
                    </button>
                    <p>Does this mean something to you? <br/> Govmywo dy Oxqswk, Iyexq Yxo!<br/> Maybe 'Rot'ten tomatoes may be useful?</p>
                </div>
            )}
        </div>
    );
};

export default Egg;
