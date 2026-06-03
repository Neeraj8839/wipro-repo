import {
  FaUsers,
  FaStar,
  FaBookOpen,
  FaTrophy,
} from "react-icons/fa";

const stats = [
  {
    label: "Active Learners",
    value: "01M+",
    icon: FaUsers,
  },

  {
    label: "YouTube Subs",
    value: "693K",
    icon: FaStar,
  },

  {
    label: "Courses",
    value: "20+",
    icon: FaBookOpen,
  },

  {
    label: "Placements",
    value: "1000+",
    icon: FaTrophy,
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 max-w-3xl">

          <div className="text-xs text-yellow-400 mb-4 font-mono">
            ◆ Impact
          </div>

          <h2 className="font-black text-4xl md:text-5xl text-white leading-tight">
            How we’re doing it{" "}
            <span className="text-yellow-400">
              faster
            </span>{" "}
            & better.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                data-testid={`stat-${index}`}
                className="group p-6 md:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300"
              >

                {/* Icon */}
                <Icon className="w-6 h-6 text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300" />

                {/* Value */}
                <div className="font-black text-3xl md:text-4xl text-white">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="mt-2 text-xs text-zinc-500 font-mono">
                  {stat.label}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
