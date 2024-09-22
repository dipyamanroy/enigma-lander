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
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/Indian_Institute_of_Technology_Ropar_logo.png",
    name: "IIT Ropar",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Past collaborations
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ logoUrl, name }: SponsorProps) => (
          <div key={name} className="flex items-center gap-1 text-muted-foreground/60">
            <img src={logoUrl} alt={`${name} logo`} className="h-20 w-21" /> {/* Adjust size as needed */}
          </div>
        ))}
      </div>
    </section>
  );
};
