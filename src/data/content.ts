import { assets } from "./assets";

export const contact = {
  email: "spaceherohain@gmail.com",
  phoneDisplay: "+91 6387485211",
  phoneRaw: "+916387485211",
  addressShort: "Indirapuram, Ghaziabad Delhi -110086",
  address: "Indirapuram, Ghaziabad 201014.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Valet Services", href: "/valet" },
      { label: "Drive Me", href: "/drive-me" },
      { label: "Hire us for Event", href: "/#services" },
      { label: "Monthly Driver", href: "/monthly-driver" },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Driver Partner", href: "/driver-partner" },
] as const;

export const homeAbout = {
  title: "About Us",
  paragraphs: [
    "At SpaceHero, we're dedicated to revolutionizing urban mobility with our comprehensive range of services. From valet parking solutions to professional driver hires, we ensure seamless transportation experiences for our clients. Our valet services set the standard for luxury and convenience, while our expert drivers cater to diverse needs, whether it's hourly hires, one-way drops, or outstation trips.",
    "With a focus on reliability, safety, and customer satisfaction, we aim to simplify city living and enhance every journey. Trust SpaceHero for unparalleled service excellence and discover a new level of convenience in urban transportation.",
  ],
};

export const aboutPage = {
  intro:
    "Spacehero stands as a pioneering solution to one of the most pressing urban challenges faced by major cities across the country: parking. With our innovative approach, we have disrupted the market by offering an array of services designed to address the needs of vehicle owners, event organizers, and business establishments alike. Our services include:",
  services: [
    {
      title: "Valet Services",
      body: "Spacehero provides professional valet services that ensure a seamless and efficient parking experience for guests and patrons. Our trained valets handle vehicles with the utmost care, offering convenience and peace of mind to our clients.",
    },
    {
      title: "Hourly and Monthly Driver Hire",
      body: "Recognizing the diverse needs of our clients, we offer flexible driver hiring services. Whether you need a driver for a few hours or on a monthly basis, Spacehero has you covered with reliable and experienced drivers.",
    },
    {
      title: "Event Management",
      body: "Spacehero specializes in managing parking and transportation logistics for events of any scale. From weddings to corporate gatherings, our team ensures that every aspect of parking and guest transportation is executed flawlessly.",
    },
    {
      title: "Doorman Services (Darbar)",
      body: "We extend our services to include professional doorman services, enhancing the prestige and security of any establishment. Our doormen are trained to provide a warm welcome and ensure the safety and comfort of guests.",
    },
  ],
  closing: [
    "Spacehero is the ideal partner for club owners, gym operators, banquet halls, and any venue seeking to elevate their guest experience with superior parking and doorman services.",
    "Our commitment to excellence and innovation has set us apart, making Spacehero the go-to solution for those looking to solve the perennial problem of parking in busy urban environments. By leveraging our expertise and comprehensive service offerings, our clients can focus on their core business activities while leaving the complexities of parking management and guest services in our capable hands.",
  ],
};

export const impactCounters = [
  { value: 5, suffix: "+", label: "Years Of Service" },
  { value: 10000, suffix: "", label: "Satisfied Clients", format: "comma" as const },
  { value: 1000000, suffix: "", label: "Vehicles Parked", format: "indian" as const },
];

export const driverMilestones = [
  { value: 5000, suffix: "+", label: "Verified Drivers", format: "comma" as const },
  { value: 1, suffix: " Lac+", label: "Happy Clients" },
  { value: 5, suffix: " Lac+", label: "Smiles" },
];

export const services = [
  {
    id: "valet",
    title: "Valet Services",
    summary:
      "Experience premier convenience with our valet services, ensuring a seamless arrival and departure at any venue, epitomizing parking sophistication.",
    image: assets.services.valet,
    href: "/valet",
    accent: "amber" as const,
  },
  {
    id: "drive-me",
    title: "Drive Me",
    summary:
      "Opt for flexibility with our hourly driver hire, providing you with professional driving services tailored to your schedule and needs.",
    image: assets.services.driveMe,
    href: "/drive-me",
    accent: "blue" as const,
  },
  {
    id: "event",
    title: "Hire us for Event",
    summary:
      "Elevate your event's prestige with our professional doorman services, offering guests a warm welcome and top-tier security with elegance.",
    image: assets.services.event,
    href: "/#booking",
    accent: "amber" as const,
  },
  {
    id: "monthly",
    title: "Monthly Driver",
    summary:
      "Secure unparalleled reliability by booking a driver for a month, guaranteeing consistent, high-quality driving services for your daily commutes.",
    image: assets.services.monthly,
    href: "/monthly-driver",
    accent: "blue" as const,
  },
];

export const valetContent = {
  headline: "The Ultimate Valet Service",
  deepDive: [
    "Spacehero, with over five years in the valet parking sector, stands at the forefront, championing a service ethos that places the guest first — ensuring their safety, comfort, and peace of mind. Our rigorous selection and training processes guarantee our valets meet the highest standards, boasting impeccable driving records. Valet services elevate the guest experience, introducing a touch of luxury and immediate hospitality. For hotels, it signifies an unwavering commitment to guest satisfaction, ensuring all needs are met with grace. In shopping centers, it becomes essential, offering ease of access to those facing mobility challenges, allowing them to prioritize their wellbeing over the inconvenience of finding parking.",
    "By replacing the nuisances of self-parking with a warm, professional welcome, we transform the arrival experience. Our service is marked by a commitment to hospitality, where guests are warmly greeted, their vehicles are securely parked, and they're directed onwards with a friendly smile.",
    "Our valet services are designed to add a layer of convenience, elegance, and accessibility right to your doorstep.",
  ],
  smartParking:
    "Experience true smart parking with Valet service. Whether you need short-term or long-term parking, Pre-book your spot and enjoy a seamless and contactless parking experience.",
  steps: [
    {
      title: "Book Online",
      body: "Just book a Valet online or scan a QR code at the location",
      image: assets.valetSteps.book,
    },
    {
      title: "Park Smart",
      body: "Get verified drivers waiting for you!",
      image: assets.valetSteps.park,
    },
    {
      title: "Park Secure",
      body: "No more worrying about the safety and security of your car",
      image: assets.valetSteps.secure,
    },
    {
      title: "Vehicle Recall",
      body: "Recall over Spacehero app and track time to return",
      image: assets.valetSteps.recall,
    },
  ],
  forGuests: [
    "Offers a warm welcome with a smile and immediate assistance, setting a positive tone.",
    "Eliminates the hassle of finding parking spots, navigating through parking garages, or dealing with inclement weather.",
    "Reduces stress related to parking restrictions and the risk of towing, allowing guests to focus on their primary visit purpose, whether it's a medical appointment, relaxing at the hotel, or preparing for a meeting.",
    "Enhances accessibility, providing service that surpasses even the closest designated parking spots, with valets ready to help with getting out of the vehicle, handling mobility aids, luggage, and more.",
  ],
};

export const driveMeContent = {
  headline: "Doorstep Driver Services",
  deepDive: [
    "SpaceHero revolutionizes transportation convenience by providing doorstep driver services, offering a seamless solution for various driving needs. With a simple phone call, SpaceHero brings professional drivers directly to your doorstep, ensuring effortless access to reliable transportation. Whether you're heading out for shopping, attending an official meeting, enjoying leisure time with friends, or returning safely after a late-night party, SpaceHero's driver service is available at your convenience.",
    "In addition to catering to local needs, SpaceHero extends its services to accommodate outstation trips with friends, family, or colleagues. Our drivers are adept at navigating both local and long-distance routes, ensuring a comfortable and stress-free journey for passengers. With SpaceHero, planning and executing outstation trips becomes a hassle-free experience.",
    "Understanding the challenges of finding reliable drivers, especially during urgent situations, SpaceHero aims to provide a convenient solution for residents of Delhi. Instead of relying on unreliable sources or seeking recommendations from friends and acquaintances, individuals can simply dial +91 6387485211 (+916387485211) to access SpaceHero's driver services promptly. Our commitment to customer satisfaction includes thorough driver verification processes, ensuring that our clients can trust the professionalism and competence of our drivers without hesitation.",
    "By opting for SpaceHero's driver services, individuals can alleviate the burden of driver management and focus on their priorities. We understand the importance of feeling confident in the skills and reliability of hired drivers, which is why we prioritize driver verification and training. Even in situations where a driver may need to temporarily leave for personal reasons, SpaceHero ensures continuity of service, sparing clients the inconvenience of searching for replacements.",
    "With SpaceHero, the entire process of finding, hiring, and managing drivers is streamlined and stress-free. Our comprehensive services encompass everything from immediate driver availability to ongoing support, guaranteeing a hassle-free experience for our clients. Trust SpaceHero to meet all your transportation needs with professionalism, reliability, and unparalleled convenience.",
  ],
  badges: [
    "Verified & Trained Drivers",
    "On-Time Service Guaranteed",
    "Book Driver 24*7",
    "Transparent Prices with no hidden charges",
  ],
  useCases: [
    {
      title: "One-Way Transportation Solutions",
      body: "For point-to-point travel within or beyond the city, reserve our driver services for one-way drops. They'll transport you to your chosen destination and return via public transit, ensuring convenient travel arrangements.",
    },
    {
      title: "Convenient Shopping",
      body: "Need to run errands or send your family shopping, but short on time to drive? No worries. Book our hired car drivers to safely chauffeur your family to their desired shopping destinations.",
    },
    {
      title: "Outstation Travel",
      body: "Planning an outstation trip with family or friends? Opt for our driver hire service for a hassle-free journey. Our experienced drivers navigate highways day and night, ensuring a safe and enjoyable travel experience.",
    },
    {
      title: "Productive Commutes",
      body: "Maximize productivity by hiring drivers in your city for seamless transportation. Work on your laptop, connect with clients or employees, all while enjoying the comfort of your own car driven by our professional chauffeurs.",
    },
    {
      title: "Party in Style",
      body: "Unwind and enjoy a night out on the town with friends without worrying about driving. Hire our drivers for safe transportation, allowing you to revel in the nightlife while being chauffeured in the comfort of your own car.",
    },
    {
      title: "Valet Drivers for Hire",
      body: "For event planners or those hosting family gatherings, consider hiring our valet drivers. They're proficient in handling both automatic and manual cars, ensuring smooth and reliable transportation for your guests.",
    },
  ],
};

export const monthlyContent = {
  headline: "Hire permanent drivers on monthly basis",
  deepDive: [
    "At SpaceHero, we provide professional driver services, offering experienced drivers to ensure a stress-free journey for our clients. Each driver undergoes rigorous security training, is fully referenced, and is dedicated to ensuring every aspect of the chauffeured experience runs seamlessly. Our monthly driver service is ideal for individuals with busy schedules or those who prefer not to drive.",
    "We prioritize safety and reliability by thoroughly checking the backgrounds of our drivers and selecting individuals with extensive driving experience. Our clients can trust our drivers to provide stylish and convenient transportation, eliminating the need to wait for taxis and ensuring a safe return home, whether it's for formal meetings or late-night gatherings.",
    "Our drivers are available to cater to every family member's needs and can also drop off friends or relatives as per the client's instructions. Expect our drivers to be polite, cooperative, and well-mannered, adhering to your instructions and preferences at all times. With SpaceHero, you can rely on our drivers to be punctual, ensuring timely and efficient transportation whenever you need it.",
    "Additionally, our drivers are well-dressed, well-mannered, and prepared to work day and night to meet our clients' needs. They adhere to all rules and instructions provided by the client, ensuring a smooth and comfortable journey. Most importantly, punctuality is a top priority for our drivers, guaranteeing that our clients arrive at their destinations on time, every time.",
  ],
  hireSeamless: [
    "Tired of the daily commute grind? Let us simplify your life with our convenient and dependable on-demand driver service. Whether it's a one-time trip or regular commuting, SpaceHero is here to fulfill all your transportation needs. With SpaceHero, booking a driver online is quick and effortless. Just specify your pickup and drop-off locations for a hassle-free experience.",
    "Our intuitive platform ensures a perfect match with a driver who meets your exact requirements. Discover what makes SpaceHero the most reliable choice in the industry for hired driver services.",
  ],
  categories: [
    {
      title: "Hourly Drivers",
      body: "Hourly drivers offer transportation services on an hourly basis. It is suitable for those who need to attend conferences and other events.",
      image: assets.monthlyDrivers.hourly,
    },
    {
      title: "Outstation Drivers",
      body: "Outstation drivers accompany clients on journeys outside their hometowns, towns, or cities. They are skilled at handling various situations and providing a reliable travel experience.",
      image: assets.monthlyDrivers.outstation,
    },
    {
      title: "Daily Drivers",
      body: "Daily drivers are hired for a single day or specific occasions. They are useful when a dedicated driver is required for events, appointments, or special occasions.",
      image: assets.monthlyDrivers.daily,
    },
    {
      title: "Temporary Drivers",
      body: "To cover for unavailable regular drivers or during periods of high demand, they are hired for a short duration to offer flexibility and support when there is a shortage of workforce.",
      image: assets.monthlyDrivers.temporary,
    },
    {
      title: "Night Drivers",
      body: "To cover for unavailable regular drivers or during periods of high demand, they are hired for a short duration to offer flexibility and support when there is a shortage of workforce.",
      image: assets.monthlyDrivers.night,
    },
    {
      title: "Permanent Drivers",
      body: "Permanent drivers work for individuals, families, or organisations on a long-term basis. They manage the client's pick-up and drop-off preferences, schedules, and so on.",
      image: assets.monthlyDrivers.permanent,
    },
  ],
};

export const commitments = [
  {
    title: "24x7 Support",
    body: "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns. We're here to ensure a smooth and hassle-free experience, providing prompt and professional assistance at any hour of the day.",
    image: assets.commitments.support,
    accent: "emerald" as const,
  },
  {
    title: "Convenient Online Payments",
    body: "Skip the hassle of cash! Our secure online payment system allows for easy and convenient transactions. We accept all major credit and debit cards, offering you flexibility and a streamlined payment process.",
    image: assets.commitments.payment,
    accent: "blue" as const,
  },
  {
    title: "Customized Requirements",
    body: "Tailor your experience to your specific needs with our customizable services, providing personalized solutions to suit your preferences and requirements.",
    image: assets.commitments.customize,
    accent: "amber" as const,
  },
  {
    title: "Verified Drivers",
    body: "For your safety, all our drivers undergo comprehensive background checks. Enjoy peace of mind knowing you're in the hands of trusted, verified professionals committed to providing secure and reliable rides.",
    image: assets.commitments.verified,
    accent: "emerald" as const,
  },
  {
    title: "Track Your Car with Mobile App",
    body: "Stay informed and in control throughout your trip with our user-friendly mobile app. Track your car's location in real-time for added convenience and peace of mind, ensuring a stress-free journey from start to finish.",
    image: assets.commitments.tracking,
    accent: "blue" as const,
  },
];

export const locationsIntro =
  "SpaceHero is your go-to smart parking management solution, empowering you to park effortlessly, no matter your destination. From malls to restaurants, cinemas, and beyond, SpaceHero offers innovative parking solutions designed to simplify your life.";

export const locations = [
  { name: "Noida 121", detail: "1 banquet", icon: assets.locationIcons.banquets },
  { name: "Noida 63", detail: "1 restaurant", icon: assets.locationIcons.restaurant },
  { name: "Noida 104", detail: "whole market", icon: assets.locationIcons.market },
  { name: "Niti khand", detail: "1 restaurant & 1 mall", icon: assets.locationIcons.mall },
  { name: "Connaught Place", detail: "Available", icon: assets.locationIcons.cp },
  { name: "Noida 62 and 63", detail: "2 restaurants", icon: assets.locationIcons.restaurant },
  { name: "Vaishali", detail: "3 banquets", icon: assets.locationIcons.banquets },
  { name: "Sahibabad", detail: "4 banquets", icon: assets.locationIcons.banquets },
  { name: "Vashundra", detail: "2 banquets & one gym", icon: assets.locationIcons.banquetsGym },
  { name: "Abhay khand", detail: "2 malls", icon: assets.locationIcons.mall },
];

export const appDownload = {
  title: "Download the App",
  body: "Streamline your car ownership experience with the SpaceHero app, available for iOS and Android. Easily track all your bookings and enjoy a seamless journey.",
};

export const testimonials = [
  {
    name: "Rishabh",
    image: assets.testimonials.rishabh,
    quote:
      "SpaceHero completely transformed my daily commute. The convenience of having a reliable driver and smooth parking service is unmatched. Highly recommend for anyone seeking stress-free travel!",
  },
  {
    name: "Kasana",
    image: assets.testimonials.kasana,
    quote:
      "Using SpaceHero for event parking was a game-changer. Their professional doormen and efficient valet service made our event feel even more special and well-organized.",
  },
  {
    name: "Sumit",
    image: assets.testimonials.sumit,
    quote:
      "I've been booking monthly drivers through SpaceHero for my hectic schedule, and it's been a lifesaver. The drivers are punctual, courteous, and highly skilled.",
  },
  {
    name: "Amit",
    image: assets.testimonials.amit,
    quote:
      "Hiring a driver on an hourly basis through SpaceHero has made my errands and meetings around the city so much easier. Exceptional service and reliability!",
  },
];

export const team = [
  {
    name: "Shubh Singh",
    role: "Founder & CEO",
    image: assets.team.shubh,
    bio: "Shubh Singh, the dynamic founder of Spacehero, leads the organization with a visionary approach. Steering both operations and strategy, Shubh's hands-on management ensures a seamless experience for clients, from valet services to event hires. His leadership not only drives the team but also sets a new standard in customer service.",
  },
  {
    name: "Ex Warrant Officer SN Singh",
    role: "Founder & Chairman",
    image: assets.team.snSingh,
    bio: "Warrant Officer SN Singh, brings 37 years of Indian Air Force experience to the company. Serving since 1986, he specialized in technical maintenance and operations across India, including border areas. At Spacehero, his expertise in operational readiness, mentoring, and procurement enriches our services, leveraging his military precision for unparalleled service quality.",
  },
  {
    name: "Anjali Kalra",
    role: "Company Secretary & Finance",
    image: assets.team.anjali,
    bio: "Anjali Kalra, brings a wealth of experience from her 11-year career. Her expertise spans roles at prestigious firms like Interglobe Group, Almondz Securities, and Omkam Capitals, where she honed her skills in compliance and liaison with government authorities. Anjali's vast experience and knowledge significantly contribute to Spacehero's strategic and financial planning.",
  },
  {
    name: "Ayush Chaturvedi",
    role: "Chief Compliance Officer",
    image: assets.team.ayush,
    bio: "Ayush Chaturvedi brings to Spacehero a rich 15-year background in media and technology, with roles at Cyber Media, Dainik Jagran, Zee News, and MIT Technology Review. At Spacehero, he oversees compliances, utilizing his extensive experience to navigate the complex landscape of regulations, ensuring the company adheres to industry standards and maintains operational excellence.",
  },
  {
    name: "Rajnish Kumar",
    role: "Area Manager",
    image: assets.team.rajnish,
    bio: "Rajnish, with over four years of experience in the valet service industry, has significantly contributed to Space Hero by managing hundreds of events and parking operations. His prior work with Snkamini More Space Valet Services has equipped him with the expertise needed to excel in fast-paced environments, ensuring Space Hero's events run smoothly and efficiently.",
  },
  {
    name: "Satyam",
    role: "Workforce Manager",
    image: assets.team.satyam,
    bio: "Satyam, with over five years of experience in the valet service industry, has significantly contributed to Space Hero by managing hundreds of events and parking operations. His prior work with Snkamini More Space Valet Services has equipped him with the expertise needed to excel in fast-paced environments, ensuring Space Hero's events run smoothly and efficiently.",
  },
  {
    name: "Sagar",
    role: "Workforce Manager",
    image: assets.team.sagar,
    bio: "Sagar, with over four years of experience in the valet service industry, has significantly contributed to Space Hero by managing hundreds of events and parking operations. His prior work with Snkamini More Space Valet Services has equipped him with the expertise needed to excel in fast-paced environments, ensuring Space Hero's events run smoothly and efficiently.",
  },
  {
    name: "Rahul Chauhan",
    role: "Chief Technology Officer",
    image: assets.team.rahul,
    bio: "Rahul Chauhan, a tech veteran with over 15 years of experience, leads SpaceHero's back-end and mobile technology endeavors. His extensive expertise ensures the seamless operation and optimization of our technological infrastructure, empowering SpaceHero to deliver cutting-edge solutions. Rahul's leadership ensures that our platform remains at the forefront of innovation, providing users with a smooth and reliable experience.",
  },
  {
    name: "Chitresh Kapoor",
    role: "Chief Marketing Officer",
    image: assets.team.chitresh,
    bio: "Chitresh Kapoor, a seasoned professional with over 15 years of expertise in Sales and Marketing, spearheads SpaceHero's digital marketing and online branding strategies. With a proven track record of driving business growth, Chitresh brings invaluable insights and innovation to elevate SpaceHero's online presence, ensuring unparalleled visibility and engagement in the digital landscape.",
  },
];

export const driverPartner = {
  headline: "Become a driver partner with Welcome",
  subhead: "Grow your business by offering private airport pickups to travellers",
  whyTitle: "Why become a Partner?",
  benefits: [
    {
      title: "You'll schedule more quality rides",
      body: "Receive transfer requests in advance and grow your business with more quality rides.",
      image: assets.becomePartner[0],
    },
    {
      title: "You'll have access to our Partner Network",
      body: "Use our network of over 1,500 hotels and 800 vacation rental companies to expand your offering.",
      image: assets.becomePartner[1],
    },
    {
      title: "You'll get paid weekly",
      body: "We pay our drivers every week, so you won't have to wait around for your money.",
      image: assets.becomePartner[2],
    },
    {
      title: "Join our Mission",
      body: "Our goal is to change the way people travel by making the beginning and end of every trip as enjoyable as the middle.",
      image: assets.becomePartner[3],
    },
  ],
};
