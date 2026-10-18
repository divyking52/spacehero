import { AboutSection } from "../components/sections/AboutSection";
import { AppSection } from "../components/sections/AppSection";
import { BookingConfigurator } from "../components/sections/BookingConfigurator";
import { CommitmentsSection } from "../components/sections/CommitmentsSection";
import { GallerySection } from "../components/sections/GallerySection";
import { Hero } from "../components/sections/Hero";
import { LocationsSection } from "../components/sections/LocationsSection";
import { MediaSection } from "../components/sections/MediaSection";
import { PartnersSection } from "../components/sections/PartnersSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ValetTimeline } from "../components/sections/ValetTimeline";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ValetTimeline />
      <CommitmentsSection />
      <LocationsSection />
      <BookingConfigurator />
      <GallerySection />
      <AppSection />
      <MediaSection />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
}
