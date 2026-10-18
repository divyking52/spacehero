import { Mail, MapPin, Phone } from "lucide-react";
import { assets, EXTERNAL } from "../data/assets";
import { contact } from "../data/content";
import { BookingConfigurator } from "../components/sections/BookingConfigurator";
import { PageBanner } from "../components/ui/PageBanner";

export function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        desktopSrc={assets.contactBanner}
        mobileSrc={assets.contactMobile}
        alt="contact banner"
      />
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3 md:px-6 lg:px-8">
          <a
            href={EXTERNAL.email}
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-blue/50"
          >
            <Mail className="h-5 w-5 text-blue" />
            <p className="mt-4 text-sm text-dim">Email</p>
            <p className="mt-1 font-semibold">{contact.email}</p>
          </a>
          <a
            href={EXTERNAL.call}
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-emerald/50"
          >
            <Phone className="h-5 w-5 text-emerald" />
            <p className="mt-4 text-sm text-dim">Phone</p>
            <p className="mt-1 font-semibold">{contact.phoneDisplay}</p>
          </a>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <MapPin className="h-5 w-5 text-amber" />
            <p className="mt-4 text-sm text-dim">Find us at</p>
            <p className="mt-1 font-semibold">{contact.addressShort}</p>
            <p className="mt-2 text-sm text-muted">{contact.address}</p>
          </div>
        </div>
      </section>
      <BookingConfigurator defaultTab="contact" />
    </>
  );
}
