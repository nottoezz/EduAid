import { motion } from "framer-motion";
import { useMemo, useState } from "react";

// Function to handle PDF link clicks to avoid React Router interception
const handlePdfClick = (filename: string, e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  // Construct the correct URL - Vite serves public files from root
  const baseUrl = import.meta.env.BASE_URL || '/';
  const pdfUrl = `${baseUrl}${filename}`.replace(/\/\//g, '/'); // Remove double slashes
  
  // Use window.open for reliable PDF opening
  window.open(pdfUrl, '_blank', 'noopener,noreferrer');
};

type Licence = "individual" | "school" | "commercial";
type Billing = "monthly" | "yearly";

// Replace this with your real checkout
const startCheckout = (payload: { licence: Licence; billing?: Billing }) => {
  console.log("Starting checkout:", payload);
};

function CheckIcon() {
  return (
    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#00827A] flex items-center justify-center">
      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>("yearly");

  const individualPrice = useMemo(() => {
    const yearly = 149;
    const monthly = 29;
    const perMonthWhenYearly = (yearly / 12).toFixed(2);
    return { yearly, monthly, perMonthWhenYearly };
  }, []);

  const handleCheckout = (licence: Licence, billingOverride?: Billing) => {
    if (licence === "commercial") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    startCheckout({
      licence,
      billing: licence === "individual" ? (billingOverride ?? billing) : undefined,
    });
  };

  return (
    <section id="pricing" className="relative bg-[#E0F2FE] py-24 md:py-32 overflow-hidden">
      {/* Top wavy blend line */}
      <svg className="absolute top-0 left-0 w-full h-16" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
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
              Simple options for individual educators and schools. Commercial, app and district licensing is available on request.
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
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 flex flex-col h-[600px]"
            >
            <div>
              <h3 className="text-2xl font-extrabold text-[#16130F]">Individual Educator</h3>
              <p className="mt-2 text-[#6B7280]">
                For individual teachers and homeschooling families.
              </p>
            </div>

            {/* Pricing: clean two-option selector like your screenshot */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-2xl border-2 p-4 text-left transition-all ${
                  billing === "monthly"
                    ? "border-[#00827A] bg-white shadow-sm"
                    : "border-transparent bg-[#F8FAFC] hover:bg-white/80"
                }`}
                aria-pressed={billing === "monthly"}
              >
                <div className="text-lg font-black text-[#16130F]">R29</div>
                <div className="text-sm text-[#6B7280]">per month</div>
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`relative rounded-2xl border-2 p-4 text-left transition-all ${
                  billing === "yearly"
                    ? "border-[#00827A] bg-[#7EDC89]/30 shadow-sm"
                    : "border-transparent bg-[#F8FAFC] hover:bg-white/80"
                }`}
                aria-pressed={billing === "yearly"}
              >
                <div className="text-lg font-black text-[#16130F]">R149</div>
                <div className="text-sm text-[#6B7280]">per year</div>
                <div className="mt-1 text-xs text-[#006B5E]">
                  ~R{individualPrice.perMonthWhenYearly}/mo
                </div>

                <span className="absolute -top-3 right-3 bg-[#00827A] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Save ~50%
                </span>
              </button>
            </div>

            {/* Pill row */}
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm">
              <span className="font-semibold text-[#16130F]">1 educator</span>
              <span className="text-[#6B7280]">Home + classroom use</span>
            </div>

            {/* Features */}
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
              <button
                onClick={() => handleCheckout("individual", billing)}
                className="w-full rounded-2xl bg-[#00827A] py-5 font-bold text-lg text-white shadow-lg hover:bg-[#006B5E] transition"
              >
                {billing === "yearly"
                  ? "Buy Individual — R149/year"
                  : "Buy Individual — R29/month"}
              </button>
            </div>
            </motion.div>

            <p className="mt-3 text-center text-xs text-[#6B7280]">
              Instant download • Cancel anytime (monthly) • Updates included
            </p>
          </div>

          {/* CARD 2 — School licence (Most popular) */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="relative bg-[#EAF9F7] rounded-3xl p-8 shadow-xl border border-[#00827A]/20 flex flex-col min-h-[600px]"
            >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-[#00827A] text-white text-xs font-bold px-4 py-2 rounded-full shadow">
                MOST POPULAR
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[#16130F]">School licence</h3>
              <p className="mt-2 text-[#6B7280]">
                Standardise CAPS-aligned letterforms across your whole school.
              </p>
            </div>

            <div className="mt-8">
              <div className="text-4xl md:text-5xl font-black text-[#16130F]">R399 / year</div>
              <p className="mt-2 text-sm text-[#6B7280]">
                One school • Unlimited educators
              </p>
            </div>

            {/* Pill row */}
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3 text-sm">
              <span className="font-semibold text-[#16130F]">Unlimited educators</span>
              <span className="text-[#6B7280]">One school</span>
            </div>

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
              <button
                onClick={() => handleCheckout("school")}
                className="w-full rounded-2xl bg-[#00827A] py-5 font-bold text-lg text-white shadow-lg hover:bg-[#006B5E] transition"
              >
                Buy School licence — R399/year
              </button>
            </div>
            </motion.div>

            <p className="mt-3 text-center text-xs text-[#6B7280]">
              Invoice available • Staff sharing allowed • Learner distribution included
            </p>
          </div>

          {/* CARD 3 — Commercial & District */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 flex flex-col h-[600px]"
            >
            <div>
              <h3 className="text-2xl font-extrabold text-[#16130F]">Commercial & District</h3>
              <p className="mt-2 text-[#6B7280]">
                Publishers, apps/SaaS, paid products, districts & bulk rollouts.
              </p>
            </div>

            <div className="mt-8">
              <div className="text-4xl md:text-5xl font-black text-[#16130F]">Contact us</div>
              <p className="mt-2 text-sm text-[#6B7280]">
                Custom licensing based on your use case.
              </p>
            </div>

            {/* Pill row */}
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm">
              <span className="font-semibold text-[#16130F]">Publishers + apps</span>
              <span className="text-[#6B7280]">District / bulk</span>
            </div>

            <ul className="mt-6 space-y-7 text-[#16130F]">
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
              <button
                onClick={() => handleCheckout("commercial")}
                className="w-full rounded-2xl bg-[#00827A] py-5 font-bold text-lg text-white shadow-lg hover:bg-[#006B5E] transition"
              >
                Get in touch
              </button>
            </div>
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
      <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 Q300,0 600,30 T1200,30 V60 H0 Z" fill="#fef4e6" />
      </svg>
    </section>
  );
}
