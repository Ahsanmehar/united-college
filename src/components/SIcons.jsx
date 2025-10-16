import { Users, BookOpen, ChevronLeft, ChevronRight, Gauge, GraduationCap, X } from "lucide-react";

const SIcons = ({ name, className = "" }) => {
  const icons = {
    users: <Users className={className} />,
    book: <BookOpen className={className} />,
    "chevron-left": <ChevronLeft className={className} />,
    "chevron-right": <ChevronRight className={className} />,
    guage: <Gauge className={className} />,
    teacher: <GraduationCap className={className} />,
    x: <X className={className} />,
  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default SIcons;
