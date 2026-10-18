import { useState, type FormEvent, type ReactNode } from "react";
import { EXTERNAL } from "../../data/assets";
import { Button } from "../ui/Button";
import { GlowCard } from "../ui/GlowCard";
import { SectionHeading } from "../ui/SectionHeading";

const tabs = [
  { id: "drive", label: "On-Demand Driver" },
  { id: "monthly", label: "Monthly Permanent Driver" },
  { id: "partner", label: "Become a Driver Partner" },
  { id: "contact", label: "Contact Us" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const fieldClass =
  "w-full rounded-xl border border-border bg-canvas px-4 py-3 text-sm text-text outline-none transition placeholder:text-dim focus:border-blue/60";

const labelClass = "mb-1.5 block text-xs font-medium text-muted";

export function BookingConfigurator({ defaultTab = "drive" }: { defaultTab?: TabId }) {
  const [tab, setTab] = useState<TabId>(defaultTab);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="section-y">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Book with SpaceHero"
          title="Interactive Booking Center"
          description="How can we assist you? Share your requirements, and we'll tailor our services to meet your needs."
        />

        <GlowCard glow="blue" className="overflow-hidden">
          <div className="border-b border-border p-2 md:p-3">
            <div className="snap-row gap-2 md:flex md:flex-wrap md:overflow-visible">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTab(t.id);
                    setSubmitted(false);
                  }}
                  className={`snap-item rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    tab === t.id
                      ? "bg-blue text-white"
                      : "bg-white/5 text-muted hover:text-text"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

            <div className="p-4 md:p-6 lg:p-8">
            {submitted ? (
              <div className="rounded-xl border border-emerald/30 bg-emerald/10 px-5 py-8 text-center">
                <p className="text-lg font-semibold text-emerald">
                  Thank you — your request has been captured.
                </p>
                <p className="mt-2 text-sm text-muted">
                  Prefer instant help? Call or WhatsApp {""}
                  <a href={EXTERNAL.call} className="text-text underline">
                    +91 6387485211
                  </a>
                  .
                </p>
                <Button
                  className="mt-6"
                  variant="secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-2 md:gap-4">
                {tab === "drive" ? <DriveMeFields /> : null}
                {tab === "monthly" ? <MonthlyFields /> : null}
                {tab === "partner" ? <PartnerFields /> : null}
                {tab === "contact" ? <ContactFields /> : null}
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full md:w-auto">
                    {tab === "partner" || tab === "contact" ? "SEND" : "Book Now"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </GlowCard>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <label className={full ? "md:col-span-2" : undefined}>
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

function DriveMeFields() {
  return (
    <>
      <Field label="Full Name*">
        <input required name="name" placeholder="Name" className={fieldClass} />
      </Field>
      <Field label="Mobile Number*">
        <input
          required
          name="mobile"
          type="tel"
          placeholder="Mobile Number"
          className={fieldClass}
        />
      </Field>
      <Field label="Email Address*">
        <input
          required
          name="email"
          type="email"
          placeholder="Email Address"
          className={fieldClass}
        />
      </Field>
      <Field label="Please share your requirements*">
        <select required name="drivertype" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select requirement
          </option>
          <option value="Hourly Driver">Hourly Driver</option>
          <option value="One way Driver">One way Driver</option>
          <option value="Outstation Driver">Outstation Driver</option>
          <option value="Others">Others</option>
        </select>
      </Field>
      <Field label="Location*">
        <input
          required
          name="location"
          placeholder="Enter location"
          className={fieldClass}
        />
      </Field>
      <Field label="Transmission*">
        <select required name="transmission" className={fieldClass} defaultValue="Manual">
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
      </Field>
      <Field label="When do you want?*" full>
        <input required name="driveDate" type="datetime-local" className={fieldClass} />
      </Field>
    </>
  );
}

function MonthlyFields() {
  return (
    <>
      <Field label="Full Name*">
        <input required name="name" placeholder="Name" className={fieldClass} />
      </Field>
      <Field label="Mobile Number*">
        <input
          required
          name="mobile"
          type="tel"
          placeholder="Mobile Number"
          className={fieldClass}
        />
      </Field>
      <Field label="Email Address*">
        <input
          required
          name="email"
          type="email"
          placeholder="Email Address"
          className={fieldClass}
        />
      </Field>
      <Field label="Type of employment required?*">
        <select required name="employmentType" className={fieldClass} defaultValue="Full Time">
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>
      </Field>
      <Field label="Number of days / week">
        <select required name="no_of_days" className={fieldClass} defaultValue="5 days a week">
          <option value="2 days a week">2 days a week</option>
          <option value="5 days a week">5 days a week</option>
          <option value="6 days a week">6 days a week</option>
        </select>
      </Field>
      <Field label="Will stay be provided?">
        <select required name="is_stay" className={fieldClass} defaultValue="No">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </Field>
      <Field label="Type of Vehicle">
        <select required name="vehicleType" className={fieldClass} defaultValue="Sedan">
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="MPV (Innova, XL6, others)">MPV (Innova, XL6, others)</option>
          <option value="Luxury">Luxury</option>
        </select>
      </Field>
      <Field label="Location*">
        <input required name="location" className={fieldClass} />
      </Field>
      <Field label="Outstation Travel">
        <select required name="outStationTravel" className={fieldClass} defaultValue="Rarely">
          <option value="Rarely">Rarely</option>
          <option value="Frequent">Frequent</option>
        </select>
      </Field>
      <Field label="Monthly Salary Range">
        <select
          required
          name="salaryRange"
          className={fieldClass}
          defaultValue="Rs. 15,000 - 20,000 / month"
        >
          <option value="Rs. 15,000 - 20,000 / month">
            Rs. 15,000 - 20,000 / month
          </option>
          <option value="Rs. 22,000 - Rs. 25,000 / month">
            Rs. 22,000 - Rs. 25,000 / month
          </option>
          <option value="Rs. 25,000+ / month">Rs. 25,000+ / month</option>
        </select>
      </Field>
      <Field label="Uniform Required?">
        <select required name="is_uniform" className={fieldClass} defaultValue="No">
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </Field>
      <Field label="Transmission">
        <select required name="transmission" className={fieldClass} defaultValue="Manual">
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
      </Field>
      <Field label="Date of joining*" full>
        <input required name="date_of_joining" type="date" className={fieldClass} />
      </Field>
    </>
  );
}

function PartnerFields() {
  return (
    <>
      <Field label="Name*" full>
        <input required name="name" placeholder="Name*" className={fieldClass} />
      </Field>
      <Field label="Mobile*" full>
        <input
          required
          name="mobile"
          type="tel"
          maxLength={10}
          placeholder="Mobile*"
          className={fieldClass}
        />
      </Field>
      <Field label="Share your requirements*" full>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Share your requirements*"
          className={fieldClass}
        />
      </Field>
    </>
  );
}

function ContactFields() {
  return (
    <>
      <Field label="Name*">
        <input required name="name" placeholder="Name*" className={fieldClass} />
      </Field>
      <Field label="Email*">
        <input
          required
          name="email"
          type="email"
          placeholder="Email*"
          className={fieldClass}
        />
      </Field>
      <Field label="What are you looking for?">
        <select required name="subject" className={fieldClass} defaultValue="">
          <option value="" disabled>
            What are you looking for?
          </option>
          <option value="Valet Services">Valet Services</option>
          <option value="Drive Me">Drive Me</option>
          <option value="Hire us for Event">Hire us for Event</option>
          <option value="Monthly Driver">Monthly Driver</option>
          <option value="Complaint">Complaint</option>
        </select>
      </Field>
      <Field label="Mobile*">
        <input
          required
          name="mobile"
          type="tel"
          maxLength={10}
          placeholder="Mobile*"
          className={fieldClass}
        />
      </Field>
      <Field label="Share your requirements*" full>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Share your requirements*"
          className={fieldClass}
        />
      </Field>
    </>
  );
}
