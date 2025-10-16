import { GraduationCap } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { MapPin } from "lucide-react";
import { Clock } from "lucide-react";
import { Play } from "lucide-react";
import { Calendar } from "lucide-react";
import { User } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { ArrowRight } from "lucide-react";

const TechIcon = ({ name, className = "" }) => {
  const icons = {
    "graduation-cap": <GraduationCap className={className} />,
    menu: <Menu className={className} />,
    x: <X className={className} />,
    phone: <Phone className={className} />,
    mail: <Mail className={className} />,
    globe: <Globe className={className} />,
    "map-pin": <MapPin className={className} />,
    clock: <Clock className={className} />,
    play: <Play className={className} />,
    calendar: <Calendar className={className} />,
    user: <User className={className} />,
    "arrow-left": <ArrowLeft className={className} />,
    "message-circle": <MessageCircle className={className} />,
    send: <Send className={className} />,
    "arrow-right": <ArrowRight className={className} />,
  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default TechIcon;
