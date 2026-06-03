import {
  FaCheck,
  FaTimes,
} from "react-icons/fa";

/* =====================================
   DATA
===================================== */

const rows = [
  {
    ours: "Highly Affordable, No Quality Cuts",

    theirs:
      "High Fees, Compromised Quality",
  },

  {
    ours:
      "Project-Based, Skill-First Learning",

    theirs:
      "Theory-Centric Learning",
  },

  {
    ours:
      "Continuously Updated with Industry Trends",

    theirs:
      "Outdated, Static Curriculum",
  },

  {
    ours:
      "Internal Hackathons, Challenges & Face-Offs",

    theirs:
      "No Competitive Environment",
  },

  {
    ours:
      "Industry-Relevant, Job-Oriented Curriculum",

    theirs:
      "Limited Practical Exposure",
  },
];

/* =====================================
   COMPONENT
===================================== */

export const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-28 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 max-w-3xl">

          <div className="text-xs text-yellow-400 mb-4 font-mono-accent">
            ◆ COMPARISON
          </div>

          <h2 className="font-black text-4xl md:text-5xl text-white leading-tight">
            What sets us{" "}
            <span className="text-yellow-400">
              apart.
            </span>
          </h2>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* OUR SIDE */}
          <div
            className="
              p-8
              rounded-2xl
              bg-yellow-400/10
              border
              border-yellow-400/30
              backdrop-blur-sm
            "
          >

            <div className="text-xs text-yellow-400 mb-6 font-mono-accent">
              EduSpark
            </div>

            <ul className="space-y-4">

              {rows.map((row, index) => (

                <li
                  key={index}
                  className="flex items-start gap-3 text-white"
                >

                  <FaCheck
                    className="
                      w-5
                      h-5
                      text-yellow-400
                      mt-0.5
                      shrink-0
                    "
                  />

                  <span className="text-sm leading-relaxed">
                    {row.ours}
                  </span>

                </li>

              ))}

            </ul>

          </div>

          {/* OTHER SIDE */}
          <div
            className="
              p-8
              rounded-2xl
              bg-zinc-900/60
              border
              border-zinc-800
            "
          >

            <div className="text-xs text-zinc-500 mb-6 font-mono-accent">
              OTHERS
            </div>

            <ul className="space-y-4">

              {rows.map((row, index) => (

                <li
                  key={index}
                  className="flex items-start gap-3 text-zinc-400"
                >

                  <FaTimes
                    className="
                      w-5
                      h-5
                      text-red-400
                      mt-0.5
                      shrink-0
                    "
                  />

                  <span className="text-sm leading-relaxed">
                    {row.theirs}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};