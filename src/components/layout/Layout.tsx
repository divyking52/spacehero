import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "./Footer";
import { MobileBottomBar } from "./MobileBottomBar";
import { Navbar } from "./Navbar";

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% -10%, rgba(59,130,246,0.18), transparent), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(245,158,11,0.12), transparent), radial-gradient(circle at 50% 100%, rgba(16,185,129,0.08), transparent 45%)",
        }}
      />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
