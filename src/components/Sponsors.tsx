import Marquee from "react-fast-marquee";

interface SponsorProps {
  logoUrl: string; // URL for the logo image
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    logoUrl: "https://www.mozilla.org/media/img/trademarks/mozilla-logo-tm.731d4dab7347.svg", // Replace with actual URL
    name: "Mozilla",
  },
  {
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg", // Example for another sponsor
    name: "Ubisoft",
  },
  {
    logoUrl: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-d@2x.png",
    name: "NVIDIA",
  },
  {
    logoUrl: "https://static.wikia.nocookie.net/nitrome/images/9/96/Nitrome_logo_with_Cuboy.png",
    name: "Nitrome",
  },
  {
    logoUrl: "https://www.iiitg.ac.in/uploads/2023/08/05/20e3b14ce6d06b96610a3e655648ec31.png",
    name: "GSDC",
  },
  {
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/800px-RedBullEnergyDrink.svg.png",
    name: "RedBull",
  },
  {
    logoUrl: "https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png",
    name: "GATech",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Past collaborations
      </h2>

      <Marquee
        gradient={false}
        speed={50} // Adjust speed as needed
        pauseOnHover={true}
        className="flex items-center"
        loop={0} // Ensure it loops continuously without large gaps
      >
        {sponsors.map(({ logoUrl, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-16 px-8 text-muted-foreground/60" // Increase gap and add padding between logos
          >
            <img src={logoUrl} alt={`${name} logo`} className="h-20 w-21" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};