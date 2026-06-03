import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "MERN Stack Developer",
    rating: 5,
    text: "EduSpark helped me learn MERN from scratch with real-world projects and mentorship.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Priya Patel",
    role: "Java Developer",
    rating: 5,
    text: "The course structure was amazing and the quizzes helped me strengthen my concepts.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Aman Verma",
    role: "Frontend Developer",
    rating: 4.8,
    text: "One of the best learning platforms for aspiring developers. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sneha Gupta",
    role: "Full Stack Developer",
    rating: 5,
    text: "The projects and hands-on practice helped me gain confidence and improve my skills.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

export const Testimonials = () => {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-28 overflow-hidden border-b border-white/10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-xs text-yellow-400 mb-4 font-mono">
          ◆ COMMUNITY
        </div>

        <h2 className="font-black text-4xl md:text-5xl text-white max-w-3xl leading-tight">
          Hear from our{" "}
          <span className="text-yellow-400">
            students.
          </span>
        </h2>

        <p className="mt-4 text-zinc-400 max-w-2xl leading-relaxed">
          We help learners become industry-ready developers
          with real-world projects and mentorship.
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="relative overflow-hidden">
        <div
          className="animate-marquee flex gap-6"
          data-testid="testimonials-marquee"
        >
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="
                w-[340px]
                md:w-[400px]
                shrink-0
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/60
                p-6
                md:p-8
                hover:border-yellow-400/40
                transition-all
                duration-300
              "
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={`w-4 h-4 ${
                      starIndex < Math.round(testimonial.rating)
                        ? "text-yellow-400"
                        : "text-zinc-700"
                    }`}
                  />
                ))}

                <span className="ml-2 text-xs text-zinc-500 font-mono">
                  {testimonial.rating}
                </span>
              </div>

              {/* Review */}
              <p className="text-zinc-300 leading-relaxed text-sm mb-6">
                "{testimonial.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="
                    w-10
                    h-10
                    rounded-full
                    object-cover
                    border
                    border-zinc-700
                  "
                />

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </h4>

                  <p className="text-xs text-zinc-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};