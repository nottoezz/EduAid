import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Function to handle PDF link clicks to avoid React Router interception
const handlePdfClick = (filename: string, e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  // Construct the correct URL - Vite serves public files from root
  const baseUrl = import.meta.env.BASE_URL || "/";
  const pdfUrl = `${baseUrl}${filename}`.replace(/\/\//g, "/"); // Remove double slashes

  // Use window.open for reliable PDF opening
  window.open(pdfUrl, "_blank", "noopener,noreferrer");
};

type Licence = "individual" | "school" | "commercial";

// Replace this with your real checkout
const startCheckout = (payload: { licence: Licence }) => {
  console.log("Starting checkout:", payload);
};

function CheckIcon() {
  return (
    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#00827A] flex items-center justify-center">
      <svg
        className="w-3 h-3 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
}

function PriceBlock({
  eyebrow,
  price,
  sub,
  highlight = false,
}: {
  eyebrow?: string;
  price: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "mt-6 rounded-2xl p-6 text-center shadow-sm",
        highlight
          ? "border-2 border-[#00827A] bg-white"
          : "border border-white/40 bg-white/80 backdrop-blur-sm",
      ].join(" ")}
    >
      {eyebrow ? (
        <div className="mb-2 text-xs font-semibold tracking-wide text-[#00827A] uppercase">
          {eyebrow}
        </div>
      ) : null}
      <div className="text-4xl md:text-5xl font-black text-[#16130F] leading-none">
        {price}
      </div>
      <div className="mt-2 text-sm text-[#6B7280]">{sub}</div>
    </div>
  );
}

function MetaPills({
  left,
  right,
  tone = "light",
}: {
  left: string;
  right: string;
  tone?: "light" | "slate";
}) {
  const base =
    "mt-6 flex items-center justify-between rounded-2xl px-4 py-3 text-sm";
  const styles =
    tone === "slate"
      ? "bg-[#F8FAFC] border border-slate-200/60"
      : "bg-white/60 border border-white/40";
  return (
    <div className={`${base} ${styles}`}>
      <span className="font-semibold text-[#16130F]">{left}</span>
      <span className="text-[#6B7280]">{right}</span>
    </div>
  );
}

function CardShell({
  children,
  featured = false,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative rounded-3xl p-8 shadow-xl flex flex-col min-h-[620px]",
        featured
          ? "bg-[#EAF9F7] border-2 border-[#00827A]/30"
          : "bg-[#EAF9F7] border border-[#00827A]/20",
      ].join(" ")}
    >
      {/* subtle top sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-b from-white/30 to-transparent" />
      {children}
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
  variant = "solid",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "solid" | "outline";
}) {
  const base =
    "w-full rounded-2xl py-5 font-bold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00827A]/40";
  const styles =
    variant === "solid"
      ? "bg-[#00827A] text-white hover:bg-[#006B5E]"
      : "bg-white/80 text-[#16130F] border border-white/40 hover:bg-white";
  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

export default function PricingSection() {
  const handleCheckout = (licence: Licence) => {
    if (licence === "commercial") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    startCheckout({ licence });
  };

  return (
    <section
      id="pricing"
      className="relative bg-[#E0F2FE] py-24 md:py-32 overflow-hidden"
    >
      {/* Top wavy blend line */}
      <svg
        className="absolute top-0 left-0 w-full h-16"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,30 Q100,60 600,30 T1200,30 V0 H0 Z" fill="#fef4e6" />
      </svg>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#7EDC89] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-[#00A4FF] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#E7E9A0] rounded-full blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-block bg-white/95 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-xl border border-white/30">
            <h2 className="mb-4 text-4xl font-black text-[#16130F] md:text-5xl lg:text-6xl">
              Pricing & licences
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#6B7280] md:text-xl leading-relaxed">
              Simple options for individual educators and schools. Commercial,
              app and district licensing is available on request.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CARD 1 — Individual Educator */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <CardShell>
                <div className="relative">
                  <h3 className="text-2xl font-extrabold text-[#16130F]">
                    Individual Educator
                  </h3>
                  <p className="mt-2 text-[#6B7280]">
                    For individual teachers and homeschooling families.
                  </p>

                  <PriceBlock
                    eyebrow="One-time purchase"
                    price="R299"
                    sub="Instant download • Lifetime use"
                    highlight
                  />

                  <MetaPills left="1 educator" right="Home + classroom use" />

                  <ul className="mt-6 space-y-3 text-[#16130F]">
                    {[
                      "All Edu-Aid fonts included",
                      "Print + PDF outputs for your learners",
                      "Email support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      to="/buy/individual"
                      className="block w-full rounded-2xl py-5 font-bold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00827A]/40 bg-[#00827A] text-white hover:bg-[#006B5E] text-center"
                    >
                      Pay via EFT
                    </Link>
                  </div>
                </div>
              </CardShell>
            </motion.div>

            <p className="mt-3 text-center text-xs text-[#6B7280]">
              Instant download • Lifetime access • Updates included
            </p>
          </div>

          {/* CARD 2 — School licence (Most popular) */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <CardShell featured>
                {/* badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#00827A] text-white text-xs font-bold px-4 py-2 rounded-full shadow">
                    MOST POPULAR
                  </span>
                </div>

                <div className="relative">
                  <h3 className="text-2xl font-extrabold text-[#16130F]">
                    School licence
                  </h3>
                  <p className="mt-2 text-[#6B7280]">
                    Standardise CAPS-aligned letterforms across your whole
                    school.
                  </p>

                  <PriceBlock
                    eyebrow="Annual school licence"
                    price="R999"
                    sub="per year • One school • Unlimited educators"
                    highlight
                  />

                  <MetaPills left="Unlimited educators" right="One school" />

                  <ul className="mt-6 space-y-3 text-[#16130F]">
                    {[
                      "All Edu-Aid fonts for your school",
                      "Internal sharing with staff allowed",
                      "Print + digital distribution to enrolled learners",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      to="/buy/school"
                      className="block w-full rounded-2xl py-5 font-bold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00827A]/40 bg-[#00827A] text-white hover:bg-[#006B5E] text-center"
                    >
                      Request invoice
                    </Link>
                  </div>
                </div>
              </CardShell>
            </motion.div>

            <p className="mt-3 text-center text-xs text-[#6B7280]">
              Invoice available • Staff sharing allowed • Learner distribution
              included
            </p>
          </div>

          {/* CARD 3 — Commercial & District */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <CardShell>
                <div className="relative">
                  <h3 className="text-2xl font-extrabold text-[#16130F]">
                    Commercial & District
                  </h3>
                  <p className="mt-2 text-[#6B7280]">
                    Publishers, apps/SaaS, paid products, districts & bulk
                    rollouts.
                  </p>

                  <PriceBlock
                    eyebrow="Custom licensing"
                    price="Contact us"
                    sub="Pricing based on your use case"
                    highlight
                  />

                  <MetaPills
                    left="Publishers + apps"
                    right="District / bulk"
                    tone="slate"
                  />

                  <ul className="mt-6 space-y-3 text-[#16130F]">
                    {[
                      "Publishing / paid product licensing",
                      "App & SaaS embedding licenses",
                      "District-wide rollout options",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <PrimaryButton
                      onClick={() => handleCheckout("commercial")}
                      variant="solid"
                    >
                      Get in touch
                    </PrimaryButton>
                  </div>
                </div>
              </CardShell>
            </motion.div>

            <p className="mt-3 text-center text-xs text-[#6B7280]">
              Typically responds within 1 business day
            </p>
          </div>
        </div>

        {/* License page link */}
        <div className="mt-16 text-center">
          <button
            onClick={(e) => handlePdfClick("Edu‑font-License.pdf", e)}
            className="inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm px-6 py-3 text-sm font-medium text-[#16130F] shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 border border-white/30"
            type="button"
          >
            View full license terms →
          </button>
        </div>
      </div>

      {/* Bottom wavy blend line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,30 Q300,0 600,30 T1200,30 V60 H0 Z" fill="#fef4e6" />
      </svg>
    </section>
  );
}
