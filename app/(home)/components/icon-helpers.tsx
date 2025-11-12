import React from "react";
import { FaGithub, FaMapPin, FaLinkedin } from "react-icons/fa";
import {
  HiMail,
  HiCode,
  HiDatabase,
  HiLightningBolt,
  HiCloud,
  HiCube,
  HiPhone,
} from "react-icons/hi";

interface IconProps {
  className?: string;
}

export const getIconByName = (iconName: string, className = "w-5 h-5"): React.ReactNode => {
  switch (iconName) {
    case "FaGithub":
      return <FaGithub className={className} />;
    case "FaLinkedin":
      return <FaLinkedin className={className} />;
    case "HiMail":
      return <HiMail className={className} />;
    case "HiPhone":
      return <HiPhone className={className} />;
    case "FaMapPin":
      return <FaMapPin className={className} />;
    case "HiCode":
      return <HiCode className={className} />;
    case "HiDatabase":
      return <HiDatabase className={className} />;
    case "HiLightningBolt":
      return <HiLightningBolt className={className} />;
    case "HiCloud":
      return <HiCloud className={className} />;
    case "HiCube":
      return <HiCube className={className} />;
    default:
      return null;
  }
};
