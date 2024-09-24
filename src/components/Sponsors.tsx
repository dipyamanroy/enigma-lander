import Marquee from "react-fast-marquee";
import  { useTheme } from "@/components/theme-provider"

interface SponsorProps {
  lightLogoUrl: string;
  darkLogoUrl: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    lightLogoUrl: "https://www.mozilla.org/media/img/trademarks/mozilla-logo-tm.731d4dab7347.svg", // Replace with actual URL
    darkLogoUrl: "https://www.mozilla.org/media/img/trademarks/mozilla-logo-tm.731d4dab7347.svg",
    name: "Mozilla",
  },
  {
    lightLogoUrl: "https://seeklogo.com/images/U/ubisoft-logo-7D360EDDD9-seeklogo.com.png", // Example for another sponsor
    darkLogoUrl: "https://wallpapers.com/images/hd/ubisoft-logo-gray-background-tycgg9vw0ofxpr6c.jpg",
    name: "Ubisoft",
  },
  {
    lightLogoUrl: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-wht-500x200-4c25-d@2x.png",
    darkLogoUrl: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-d@2x.png",
    name: "NVIDIA",
  },
  {
    lightLogoUrl: "https://static.wikia.nocookie.net/nitrome/images/9/96/Nitrome_logo_with_Cuboy.png",
    darkLogoUrl: "https://static.wikia.nocookie.net/nitrome/images/9/96/Nitrome_logo_with_Cuboy.png",
    name: "Nitrome",
  },
  {
    lightLogoUrl: "https://www.iiitg.ac.in/uploads/2023/08/05/20e3b14ce6d06b96610a3e655648ec31.png",
    darkLogoUrl: "https://www.iiitg.ac.in/uploads/2023/08/05/20e3b14ce6d06b96610a3e655648ec31.png",
    name: "GSDC",
  },
  {
    lightLogoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/800px-RedBullEnergyDrink.svg.png",
    darkLogoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/800px-RedBullEnergyDrink.svg.png",
    name: "RedBull",
  },
  {
    lightLogoUrl: "https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png",
    darkLogoUrl: "https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png",
    name: "GATech",
  },
];

export const Sponsors = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Past collaborations
      </h2>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="flex items-center"
        loop={0}
      >
        {sponsors.map(({ lightLogoUrl, darkLogoUrl, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-16 px-8 text-muted-foreground/60"
          >
            <img
              src={theme === "dark" ? darkLogoUrl : lightLogoUrl} // Use the appropriate logo based on theme
              alt={`${name} logo`}
              className="h-20 w-21"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};