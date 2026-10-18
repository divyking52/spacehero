import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const MEDIA = JSON.parse(
  fs.readFileSync(path.join(root, "media-paths.json"), "utf8"),
);
const CDN = "https://cdn.storebox.ai";

const entries = Object.keys(MEDIA)
  .sort()
  .map((k) => `  "${k}": "${MEDIA[k]}",`)
  .join("\n");

const assetsTs = `const CDN = "https://cdn.storebox.ai";

/** Storebox media paths keyed by original filename */
const MEDIA: Record<string, string> = {
${entries}
};

const u = (file: string) => {
  const path = MEDIA[file];
  if (!path) throw new Error(\`Missing Storebox media: \${file}\`);
  return \`\${CDN}\${path}\`;
};

export const assets = {
  logo: u("logo.png"),
  logoColor: u("Spacehero-logo-color.jpg"),
  favicon: u("favicon.png"),
  heroCar: u("cars.png"),
  mobileBannerHome: u("mobilebanner-home.jpg"),
  mobileBannerHome2: u("mobilebanner-home2.jpg"),
  aboutImage: u("abut-up.png"),
  aboutBanner: u("about-banner.png"),
  aboutMobile: u("aboutus-mob.png"),
  valetBanner: u("velet-banner.png"),
  valetMobile: u("valet-mob.png"),
  valetHero: u("valet.png"),
  driveMeBanner: u("drive-me-banner.png"),
  driveMeMobile: u("driveme-mob.png"),
  teamBanner: u("team-banner.png"),
  teamMobile: u("team-mob.png"),
  contactBanner: u("contact-banner.png"),
  contactMobile: u("contact-mobile-banner.png"),
  partnerBanner: u("become-partner-banner.png"),
  partnerMobile: u("partner-mob.png"),
  monthlyBanner: u("about-banner.png"),
  monthlyMobile: u("aboutus-mob.png"),
  services: {
    valet: u("valetservices.png"),
    driveMe: u("bookdriver.png"),
    event: u("darban.jpg"),
    monthly: u("hireevents.png"),
  },
  valetSteps: {
    book: u("test-book.png"),
    park: u("test-park.png"),
    secure: u("test-drive.png"),
    recall: u("test-valet.png"),
  },
  commitments: {
    support: u("support.png"),
    payment: u("payment.png"),
    customize: u("customize.png"),
    verified: u("verified.png"),
    tracking: u("tracking.png"),
  },
  locationIcons: {
    banquets: u("banquets-icon.png"),
    banquetsGym: u("banquets_gym-icon.png"),
    mall: u("mall-icon.png"),
    restaurant: u("restaurant-icon.png"),
    market: u("market-icon.png"),
    cp: u("cp-icon.png"),
  },
  gallery: [
    u("about-1.png"),
    u("about-2.png"),
    u("about-5.png"),
    u("about-6.png"),
    u("about-7.png"),
    u("about-8.png"),
    u("about-9.png"),
    u("about-10.png"),
    u("about-11.png"),
    u("about-12.png"),
    u("about-13.png"),
    u("about-14.png"),
    u("about-15.png"),
    u("about-16.png"),
    u("about-17.png"),
    u("about-18.png"),
    u("about-19.png"),
    u("about-20.png"),
    u("about-21.png"),
    u("about-22.png"),
    u("about-23.png"),
    u("about-24.png"),
    u("sc1.png"),
  ],
  appMock: u("mock2.png"),
  appButtons: u("app-download-buttons.png"),
  googlePlay: u("goggle-play.png"),
  appleStore: u("goggle-apple.png"),
  media: [
    u("media1.jpg"),
    u("media2.jpg"),
    u("media3.jpg"),
    u("media4.jpg"),
    u("media5.jpg"),
  ],
  testimonials: {
    rishabh: u("testo1.png"),
    kasana: u("testo2.png"),
    sumit: u("testo3.png"),
    amit: u("testo4.png"),
  },
  partners: Array.from({ length: 12 }, (_, i) => u(\`partner\${i + 1}.jpg\`)),
  team: {
    shubh: u("Shubh-team.png"),
    snSingh: u("praksh.png"),
    anjali: u("anjali.png"),
    ayush: u("ayush.png"),
    rajnish: u("rajnish-kumar.jpg"),
    satyam: u("satya.png"),
    sagar: u("sagar.png"),
    rahul: u("gulshan.png"),
    chitresh: u("ck.png"),
  },
  becomePartner: [
    u("become-1.jpg"),
    u("become-2.jpg"),
    u("become-3.jpg"),
    u("become-4.jpg"),
  ],
  monthlyDrivers: {
    hourly: u("mon-hourlydrivers.png"),
    outstation: u("mon-outstationdrivers.png"),
    daily: u("mon-dailydrivers.png"),
    temporary: u("mon-temporarydrivers.png"),
    night: u("mon-nightdriver.png"),
    permanent: u("montly-pageicon.png"),
  },
  driveMeVerify: u("verfiy-driver.png"),
  whatsapp: u("whatsapp.png"),
  priceDesktop: u("price_table_desktop.png"),
  priceMobile: u("price_table_mobile.png"),
} as const;

export const EXTERNAL = {
  bookNow: "https://driveme.spacehero.in/login",
  whatsapp: "https://wa.me/916387485211",
  call: "tel:+916387485211",
  email: "mailto:spaceherohain@gmail.com",
} as const;
`;

fs.writeFileSync(path.join(root, "src/data/assets.ts"), assetsTs);

// --- HTML builder ---
const htmlScript = path.join(root, "scripts/build-single-html.mjs");
let html = fs.readFileSync(htmlScript, "utf8");

// Reset if previously patched
html = html.replace(
  /const CDN = "https:\/\/cdn\.storebox\.ai";[\s\S]*?const media = \(file\) => \{[\s\S]*?\};\n/,
  "",
);
html = html.replace(
  /const BASE = "https:\/\/(?:spacehero\.in\/images|cdn\.storebox\.ai)";?/,
  'const BASE = "https://spacehero.in/images";',
);

const mediaJson = JSON.stringify(MEDIA, null, 2);
const mediaBlock = `const CDN = "https://cdn.storebox.ai";
const MEDIA = ${mediaJson};
const media = (file) => {
  const p = MEDIA[file];
  if (!p) throw new Error("Missing Storebox media: " + file);
  return CDN + p;
};
const BASE = CDN; // kept for any leftover refs
`;

html = html.replace(
  /const BASE = "https:\/\/spacehero\.in\/images";\n/,
  mediaBlock,
);

// Dynamic interpolations first (order matters)
html = html.replaceAll("${BASE}/${i}", "${media(i)}");
html = html.replaceAll("${BASE}/${img}", "${media(img)}");
html = html.replaceAll(
  "${BASE}/about-${n}.png",
  "${media(`about-${n}.png`)}",
);
html = html.replaceAll(
  "${BASE}/partner${i + 1}.jpg",
  "${media(`partner${i + 1}.jpg`)}",
);
html = html.replaceAll(
  "${BASE}/media${n}.jpg",
  "${media(`media${n}.jpg`)}",
);
html = html.replaceAll(
  "`${BASE}/sc1.png`",
  'media("sc1.png")',
);

// Static ${BASE}/filename.ext → ${media("filename.ext")}
html = html.replace(/\$\{BASE\}\/([A-Za-z0-9_.-]+)/g, (_, file) => {
  if (!MEDIA[file]) {
    console.warn("WARN missing media for HTML:", file);
  }
  return `\${media("${file}")}`;
});

// leftover gallery map that became `${media(`about-${n}.png`)}` inside .map — already handled

fs.writeFileSync(htmlScript, html);

// Verify no spacehero.in/images left
const leftover = (html.match(/spacehero\.in\/images/g) || []).length;
console.log("Wrote src/data/assets.ts");
console.log("Patched scripts/build-single-html.mjs");
console.log("Leftover spacehero.in/images refs:", leftover);
console.log("Sample:", CDN + MEDIA["cars.png"]);
