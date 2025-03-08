import { useState, useEffect, useRef } from "react";
import "./NavbarPage.css";

const periods = [
  {
    period: "Medieval Era",
    texts: ["Castles Stand", "Feudal Lords", "Knights Rise", "Swords Clash"],
  },
  {
    period: "Renaissance",
    texts: ["Art Flourishes", "Science Awakens", "Ideas Reborn", "Explorers Set Sail"],
  },
  {
    period: "Industrial Age",
    texts: ["Steam Powers", "Factories Rise", "Innovation Drives", "Cities Expand"],
  },
  {
    period: "Modern Era",
    texts: ["Technology Soars", "Global Connectivity", "Digital Revolution", "Futures Unfold"],
  },
];

const backgroundImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21GErfrUbSmQgjKL8emFN1Twf3KjQ4zIlbg&s",
  "https://eclecticlight.co/wp-content/uploads/2016/04/memlingpassion.jpg?w=1024",
  "https://images.stockcake.com/public/6/f/5/6f571644-e3ad-45fe-af95-3494203f695f_large/industrial-age-painting-stockcake.jpg",
  "https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2021/12/dbxhkt_hong-kong-sar-china--sean-pavone-alamy-stock-photo.webp",
];

function NavbarPage() {
  const [hovered, setHovered] = useState(null);
  const movingRefs = useRef([]);

  useEffect(() => {
    movingRefs.current.forEach((movingin) => {
      if (movingin) {
        const originalContent = movingin.children;
        const clone = Array.from(originalContent).map(child => child.cloneNode(true));
        movingin.append(...clone); // Clone once for two sets; add more clones if needed
      }
    });
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col pt-16">
      {periods.map(({ period, texts }, index) => (
        <section
          key={index}
          className="era-section h-[25vh] w-full relative flex flex-col justify-center items-center text-center"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className={`background-overlay absolute inset-0 transition-opacity duration-500 ${
              hovered === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${backgroundImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <h1 className="text-6xl uppercase font-semibold p-2 relative z-10">{period}</h1>
          <div className="moving">
            <div
              className="movingin"
              ref={(el) => (movingRefs.current[index] = el)}
            >
              {texts.map((text, idx) => (
                <h5 key={idx} className="text-zinc-800 inline-block text-sm uppercase mr-5 select-none">
                  {text}
                </h5>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default NavbarPage;