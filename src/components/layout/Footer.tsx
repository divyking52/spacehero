import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { assets, EXTERNAL } from "../../data/assets";
import { contact, services } from "../../data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-[5.5rem] md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-2 md:gap-8 md:px-6 md:py-10 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img src={assets.logo} alt="SpaceHero" className="h-9 w-auto" />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Delhi-NCR&apos;s premier Valet Parking, Event Doorman (Darbar), and
            Professional Driver Hire platform.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-dim">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link to="/" className="hover:text-text">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-text">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-text">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-text">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/driver-partner" className="hover:text-text">
                Driver Partner
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-dim">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={s.href} className="hover:text-text">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-dim">
            Contacts
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-blue" />
              <a href={EXTERNAL.email} className="hover:text-text">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-emerald" />
              <a href={EXTERNAL.call} className="hover:text-text">
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-amber" />
              <span>
                For business enquiries :
                <br />
                {contact.address}
              </span>
            </li>
          </ul>
          <a
            href={EXTERNAL.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-emerald hover:underline"
          >
            <img src={assets.whatsapp} alt="whatsapp" className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-dim">
        © {new Date().getFullYear()} SpaceHero. All rights reserved.
      </div>
    </footer>
  );
}
