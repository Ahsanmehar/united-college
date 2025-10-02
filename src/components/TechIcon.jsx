import { House, TypeOutline } from "lucide-react";

const TechIcon = ({ name, className = "" }) => {
  const icons = {
    house: <House className={className} />,
    "type-outline": <TypeOutline className={className} />,
  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default TechIcon;
