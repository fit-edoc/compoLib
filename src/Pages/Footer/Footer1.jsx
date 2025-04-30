import React, { useState } from "react";
import {
  LinkIcon,
  FacebookIcon,
  Instagram,
  TwitterIcon,
} from "lucide-react";
import { ColorTab } from "../../components/CodeGenerator/ColorTab";

export const Footer1 = () => {
  const [color, setColor] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState(null); // to track hover


  const links = [
    {id:1,li:"home"},
    {id:2,li:"about"},
    {id:3,li:"contact us"}
  ]

  return (
    <>
      <div
        className="h-[30vh] w-screen bg-pink-300 relative flex"
        style={{ backgroundColor: color }}
      >
        {/* Quick Links */}
        <div className="h-full w-[30%] flex items-center justify-center">
          <ul className="text-black underline" >
            <h1>Quick links</h1>
            {links.map((item)=>(
              <li className="hover:text-white cursor-pointer">{item.li}</li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="h-full w-[40%] flex items-end py-5 justify-center">
          <div className="h-[40px] w-fit px-4 rounded-full bg-black text-white gap-3 flex items-center justify-center">
          <a
              href="#"
              className="hover:text-pink-300"
              onMouseEnter={() => setHoveredIcon("link")}
              onMouseLeave={() => setHoveredIcon(null)}
              style={{
                color: hoveredIcon === "link" ? color : "white",
                transition: "color 0.3s ease",
              }}
            >
              <LinkIcon  />
            </a>

            <a
              href="#"
              className="hover:text-pink-300"
              onMouseEnter={() => setHoveredIcon("facebook")}
              onMouseLeave={() => setHoveredIcon(null)}
              style={{
                color: hoveredIcon === "facebook" ? color : "white",
                transition: "color 0.3s ease",
              }}
            >
              <FacebookIcon   />
            </a>

            <a
              href="#"
              className="hover:text-pink-300"
              onMouseEnter={() => setHoveredIcon("instagram")}
              onMouseLeave={() => setHoveredIcon(null)}
              style={{
                color: hoveredIcon === "instagram" ? color : "white",
                transition: "color 0.3s ease",
              }}
            >
              <Instagram   />
            </a>

            <a
              href="#"
              className="hover:text-pink-300" 
              onMouseEnter={() => setHoveredIcon("twitter")}
              onMouseLeave={() => setHoveredIcon(null)}
              style={{
                color: hoveredIcon === "twitter" ? color : "white",
                transition: "color 0.3s ease",
              }}
            >
              <TwitterIcon  />
            </a>
          </div>
        </div>

        {/* Organization Name */}
        <div className="h-full w-[30%] flex items-center justify-center">
          <h1 className="text-black text-[2vw] font-serif">
            Organization name
          </h1>
        </div>
      </div>

      <ColorTab setColor={setColor} />
    </>
  );
};
