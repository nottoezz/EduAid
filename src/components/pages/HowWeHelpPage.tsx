import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from '../layout/Header';
import Footer from '../layout/Footer';

// Import images as modules
import teachersImage from '/WUE-Teachers.png';
import therapistImage from '/WUE-Therapist.png';
import schoolsImage from '/WUE-Schools.png';
import homeschoolImage from '/WUE-Homeschool.png';

export default function HowWeHelpPage() {
  useEffect(() => {
    // Handle scrolling to specific sections based on hash
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove '#' to get the section name
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      {/* Main Content */}
      <div className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-[#16130F] mb-6"
            >
              How We Help Educators
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#6B7280] max-w-3xl mx-auto"
            >
              Discover how Edu-Aid fonts support different educators in creating consistent,
              CAPS-aligned handwriting instruction across South African classrooms.
            </motion.p>
          </div>

          {/* Teachers Section */}
          <motion.section id="teachers"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD5CC]">
                  <svg className="h-8 w-8 text-[#16130F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z M8 6h8 M8 10h4 M8 14h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#16130F]">Foundation Phase Teachers</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Save hours of design time with professionally crafted fonts that match CAPS requirements.
                    Create beautiful, consistent worksheets for your entire grade with print, tracing, and cursive
                    options that develop fine motor skills systematically.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#16130F]">Key Benefits:</h3>
                    <ul className="space-y-3 text-[#6B7280]">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>CAPS-aligned letter shapes from Grade R to Grade 3</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Consistent progression across all handwriting stages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Print, tracing, and cursive variants in one pack</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Works perfectly in Word, PowerPoint, and Google Docs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FFF8EF] rounded-2xl p-6">
                  <img
                    src={teachersImage}
                    alt="Foundation Phase Teachers using Edu-Aid fonts in classroom"
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Therapists Section */}
          <motion.section id="therapists"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD5CC]">
                  <svg className="h-8 w-8 text-[#16130F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M16 11l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#16130F]">Remedial / OT / Speech Therapists</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Target specific letter formations and fine motor challenges with our therapeutic tracing fonts.
                    Help learners with dyslexia, dysgraphia, or developmental delays build confidence through
                    structured, multi-sensory handwriting practice.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#16130F]">Therapeutic Applications:</h3>
                    <ul className="space-y-3 text-[#6B7280]">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Detailed tracing fonts with directional arrows</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Structured progression for fine motor skill development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Multi-sensory approach to letter formation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Consistent with classroom fonts for seamless integration</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FFF8EF] rounded-2xl p-6">
                  <img
                    src={therapistImage}
                    alt="Remedial and occupational therapists using Edu-Aid fonts"
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Schools Section */}
          <motion.section id="schools"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD5CC]">
                  <svg className="h-8 w-8 text-[#16130F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#16130F]">Schools & Districts</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Ensure every teacher uses the same, CAPS-aligned letterforms. Our comprehensive font pack
                    supports your whole school from Grade R tracing dots to Grade 3 cursive, creating a seamless
                    progression that builds on previous learning.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#16130F]">School-Wide Benefits:</h3>
                    <ul className="space-y-3 text-[#6B7280]">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Standardized letter forms across all grades</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Seamless progression from tracing to cursive</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Internal sharing and district-wide consistency</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Easy implementation for new teachers</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FFF8EF] rounded-2xl p-6">
                  <img
                    src={schoolsImage}
                    alt="Schools and districts implementing Edu-Aid fonts across classrooms"
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Parents Section */}
          <motion.section id="parents"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD5CC]">
                  <svg className="h-8 w-8 text-[#16130F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 11h-6 M16.5 7.5l2.5 2.5 2.5-2.5" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#16130F]">Parents & Homeschoolers</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Bridge the gap between school and home learning. Use the same fonts and worksheets your
                    child encounters at school for homework, practice, and reinforcement. Perfect for homeschooling
                    families following CAPS curriculum.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#16130F]">Home Learning Support:</h3>
                    <ul className="space-y-3 text-[#6B7280]">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Match exactly what your child sees at school</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Consistent practice materials for homework</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Build confidence with familiar letter forms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#00827A] flex-shrink-0"></span>
                        <span>Perfect for CAPS-aligned homeschooling</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FFF8EF] rounded-2xl p-6">
                  <img
                    src={homeschoolImage}
                    alt="Parents and homeschoolers using Edu-Aid fonts at home"
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#16130F] mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-[#6B7280] mb-6">
                Join thousands of South African educators who trust Edu-Aid fonts for consistent handwriting instruction.
              </p>
              <button
                onClick={() => navigate('/#download')}
                className="inline-flex items-center justify-center rounded-full bg-[#1F9C93] px-8 py-3 text-lg font-medium text-white shadow-sm hover:bg-[#17867F] transition-all duration-200"
              >
                Try Trial Font
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
