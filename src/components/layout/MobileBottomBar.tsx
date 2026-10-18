import { Car, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { EXTERNAL } from "../../data/assets";

const items = [
  {
    label: "Book Driver",
    href: EXTERNAL.bookNow,
    icon: Car,
    external: true,
  },
  {
    label: "Valet & Services",
    to: "/#services",
    icon: Sparkles,
  },
  {
    label: "NCR Locations",
    to: "/#locations",
    icon: MapPin,
  },
  {
    label: "WhatsApp",
    href: EXTERNAL.whatsapp,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Call",
    href: EXTERNAL.call,
    icon: Phone,
    external: true,
  },
];

export function MobileBottomBar() {
  return (
    <nav className="glass fixed inset-x-0 bottom-0 z-50 border-t border-border pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid grid-cols-5 gap-1 px-1 py-2">
        {items.map((item) => {
          const Icon = item.icon;
          const className =
            "flex flex-col items-center gap-1 rounded-lg px-1 py-1.5 text-[10px] font-medium text-muted transition active:text-text";
          const content = (
            <>
              <Icon className="h-5 w-5" />
              <span className="leading-tight text-center">{item.label}</span>
            </>
          );

          if (item.to) {
            return (
              <Link key={item.label} to={item.to} className={className}>
                {content}
              </Link>
            );
          }

          return (
            <a
              key={item.label}
              href={item.href}
              className={className}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {content}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
