import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DriveMePage } from "./pages/DriveMePage";
import { DriverPartnerPage } from "./pages/DriverPartnerPage";
import { HomePage } from "./pages/HomePage";
import { MonthlyDriverPage } from "./pages/MonthlyDriverPage";
import { TeamPage } from "./pages/TeamPage";
import { ValetPage } from "./pages/ValetPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="valet" element={<ValetPage />} />
          <Route path="drive-me" element={<DriveMePage />} />
          <Route path="monthly-driver" element={<MonthlyDriverPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="driver-partner" element={<DriverPartnerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
