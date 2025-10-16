import { House, MoveLeft } from "lucide-react";

const TechIcon = ({ name, className = "" }) => {
  const icons = {
    house: <House className={className} />,
    "move-left": <MoveLeft className={className} />,
  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default TechIcon;
