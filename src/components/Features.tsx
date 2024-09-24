import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { Link } from 'react-router-dom';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Events",
    description:
      "We organize hackathons and workshops throughout the year, as well as socials for networking.",
  },
  {
    icon: <MapIcon />,
    title: "Sub-committees",
    description:
      "Enigma has several subcommittees, for SysTems, WebDev, GameDev, AI/ML, Comp Coding and more",
  },
  {
    icon: <PlaneIcon />,
    title: "Collaborations",
    description:
      "We collaborate with reputed companies and institutes for hackathons and guest events",
  },
  {
    icon: <GiftIcon />,
    title: "Prizes",
    description:
      "Enigma has the most snazzy prizes in cash, goodies, stickers, certificates, pizzas and whatever we want ",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        What {" "}
        <Link to="/egg">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            We Do{" "}
          </span>
        </Link>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Here's what to look for when you join Enigma or attend an event
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
