import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.ibb.co/BwJ8WwF/Screenshot-from-2024-09-22-01-51-07.png",
    name: "Ponnam Adithya Sai",
    position: "President",
    socialNetworks: [ 
    ],
  },
  {
    imageUrl: "https://i.ibb.co/X2yMzZm/Screenshot-from-2024-09-22-01-46-08.png",
    name: "Cherith Reddy Yerabolu",
    position: "Vice President",
    socialNetworks: [
    ],
  },
  {
    imageUrl: "https://i.ibb.co/Wp4jmty/image.png",
    name: "Aarnav Tandava",
    position: "Logistics and Committees Head",
    socialNetworks: [
      
    ],
  },
  {
    imageUrl: "https://i.ibb.co/nPXG5HG/Screenshot-from-2024-09-22-01-52-45.png",
    name: "H Ravi Sankar",
    position: "AI / ML Head",
    socialNetworks: [
      
    ],
  },
  {
    imageUrl: "https://i.ibb.co/dP0HPdr/image.png",
    name: "Sai Tarun Vemuganti",
    position: "CompCoding Head",
    socialNetworks: [
      
    ],
  },
  {
    imageUrl: "https://i.ibb.co/D9c29bB/image.png",
    name: "Anirudh Chamarthi",
    position: "SysAdmin",
    socialNetworks: [
      
    ],
  },
  {
    imageUrl: "https://i.ibb.co/mB4qJLq/image.png",
    name: "Monisha Kollipara",
    position: "Research and Innovation Head",
    socialNetworks: [
      
    ],
  },
  {
    imageUrl: "https://i.ibb.co/g4GP9LV/image.png",
    name: "Pericherla Tejas Varma",
    position: "GameDev Head",
    socialNetworks: [
      
    ],
  },
  {
    imageUrl: "https://i.ibb.co/SxhZJBN/image.png",
    name: "Rishi Varma Vegesna",
    position: "Content Head",
    socialNetworks: [
      
    ],
  },
  {
    imageUrl: "https://i.ibb.co/mChpWHG/image.png",
    name: "Geethika Choudhary Yadlapalli",
    position: "Marketing & Design Head",
    socialNetworks: [
      
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
      Who
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        {" "}We Are{" "}
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Meet the Team for 2024-25
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps, index) => (
            <Card
              key={name}
              className={`bg-muted/50 relative mt-8 flex flex-col justify-center items-center ${index <= teamList.length - 9 ? "lg:col-span-2" : ""}`}            
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
