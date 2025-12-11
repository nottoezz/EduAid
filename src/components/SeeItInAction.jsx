import { motion } from "framer-motion";

const worksheets = [
  {
    label: "Tracing",
    caption: "Grade R tracing worksheet with dotted letters designed for early handwriting practice, perfect for building fine motor skills and letter recognition.",
    img: "/worksheets/tracing-1.jpg",
  },
  {
    label: "Arrows",
    caption: "Interactive arrow-guided worksheets that show the correct stroke order for each letter, helping learners understand proper letter formation from the start.",
    img: "/worksheets/arrows-1.jpg",
  },
];

export default function SeeItInAction() {
  return (
    <section className="relative bg-[#fef4e6] py-24">
      {/* Pastel blob shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-0 w-40 h-40 bg-[#D8F3F0] rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-10 w-56 h-56 bg-[#FDE2CF] rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#E8F4F8] rounded-full blur-2xl opacity-30" />
      </div>

      <div className="px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#152835] mb-4">
            See It in Action
          </h2>
          <p className="text-lg text-[#152835]/70 mb-16">
            Real worksheets. Real classrooms. Real learning.
          </p>
        </div>

        <div className="space-y-24">
          {worksheets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="flex-1 flex justify-center items-center relative">
                <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-md shadow-black/5 bg-white max-w-md w-full">
                  <span className="absolute top-3 left-3 bg-black text-[#fef4e6] text-xs tracking-wide uppercase px-2 py-0.5 rounded-md z-10">
                    {item.label}
                  </span>
                  <img
                    src={item.img}
                    alt={item.caption}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 flex justify-center items-center">
                <div className="max-w-lg">
                  <p className="text-[#152835] text-xl leading-relaxed text-center">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
