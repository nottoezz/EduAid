import { motion } from "framer-motion";

// Add custom CSS for infinite scroll animation
const scrollAnimation = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
`;

// Inject the styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = scrollAnimation;
  document.head.appendChild(styleSheet);
}

const testimonials = [
  {
    quote: "I used Edu-Aid fonts in my grade 1 educational app to ensure consistent handwriting practice that matches what kids learn in school.",
    author: "Mr. Birch",
    role: "Grade 1 Educational App • Developer",
    color: "#F6B5A8"
  },
  {
    quote: "Edu-Aid fonts allow me to create consistent proffesional worksheets for my students. I stand by the don't let bad fonts teach bad habits.",
    author: "Ms. Levy",
    role: "Teacher • Private School, Cape Town",
    color: "#D8F3F0"
  },
  {
    quote: "The trace fonts have made teaching handwriting so much easier. Maintaining consistency across my classes has never been easier.",
    author: "Mrs. Golding",
    role: "Teacher • Private School, Cape Town",
    color: "#FDE2CF"
  }
];

const schools = [
  { name: "La Montagne Primary School", color: "#F6B5A8" },
  { name: "Funda Wande", color: "#D8F3F0" },
  { name: "Mthombothi Studios", color: "#FDE2CF" },
  { name: "Cambridge university Press & Assessment ", color: "#EADBC4" }
];

export default function TrustedByEducatorsSection() {
  return (
    <section className="relative bg-[#fef4e6] py-24 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#E7E9A0] rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-[#7EDC89] rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-xl border border-white/30">
            <h2 className="mb-4 text-4xl font-black text-[#16130F] md:text-5xl lg:text-6xl">
              Trusted by South African educators
            </h2>
            <p className="mx-auto max-w-4xl text-lg text-[#6B7280] md:text-xl leading-relaxed">
              Built with real classrooms in mind. Used in South African schools for years to support early handwriting, phonics and fine motor development.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40"
              style={{ backgroundColor: testimonial.color + 'E6' }}
            >
              {/* Quote icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6`} style={{ backgroundColor: testimonial.color }}>
                <svg className="w-6 h-6 text-[#16130F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-[#16130F] leading-relaxed mb-8 font-medium">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-[#E8DFD2] pt-6">
                <div className="font-bold text-[#16130F] text-lg">
                  {testimonial.author}
                </div>
                <div className="text-[#6B7280] text-sm mt-1">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schools Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#16130F] mb-12 max-w-4xl mx-auto">
            Helping South African teachers and schools who care about correct handwriting from the start.
          </h3>

          {/* Infinite scrolling school names */}
          <div className="relative overflow-hidden">
            {/* Fade effects on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#fef4e6] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#fef4e6] to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll">
              {/* First set of schools */}
              {schools.map((school, index) => (
                <div
                  key={`first-${school.name}`}
                  className="flex-shrink-0 mx-4 rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-200 min-w-[200px]"
                  style={{ backgroundColor: school.color }}
                >
                  <div className="text-[#16130F] font-bold text-lg text-center">
                    {school.name}
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {schools.map((school, index) => (
                <div
                  key={`second-${school.name}`}
                  className="flex-shrink-0 mx-4 rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-200 min-w-[200px]"
                  style={{ backgroundColor: school.color }}
                >
                  <div className="text-[#16130F] font-bold text-lg text-center">
                    {school.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
