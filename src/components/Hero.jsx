import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative border-b border-white/10 min-h-[85vh] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://static.prod-images.emergentagent.com/jobs/6d817be1-767a-4897-a7c8-0dba63b9b372/images/5a66d2c7da1b1db4bbd3cfa1ada455f077d2e48f13e83011d90854e01095ac67.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        
        {/* Small Heading */}
        <div className="font-mono-accent text-xs tracking-[0.3em] text-yellow-400 mb-6">
          ◆ LEARN. BUILD. GET PLACED.
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white max-w-6xl">
          Become the Software Engineer
          <br />
          that companies want to{" "}
          <span className="text-stroke text-yellow-400">
            hire.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
          Join a growing community of 1 Million+ students learning real-world
          tech. Live cohorts, hands-on projects and mentor support — all in one
          place.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-5">
          
          <Link to="/courses">
            <button
              type="button"
              className="group px-8 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg flex items-center gap-3 transition-all duration-300"
            >
              Start Journey

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link to="/signup">
            <button
              type="button"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300"
            >
              Create Account
            </button>
          </Link>
        </div>

        {/* Students Section */}
        <div className="mt-16 flex items-center gap-5">

          {/* Small Circular Images */}
          <div className="flex -space-x-4">

            {[
              "https://px.pixxo.io/sheryians/students/1764611471979-a5146ade-8ab9-4b7f-9855-83e80edf2e3f-1_all_6810_55Ht7UJe6.jpg",

              "https://px.pixxo.io/sheryians/students/1763358465375-4932_9bX0q8pkf.jpg",

              "https://px.pixxo.io/sheryians/students/1763450438835-1763450213822_GyFFcHso3.jpg",

              "https://px.pixxo.io/sheryians/students/1763383043355-1000245810_Qyc5r9LWS.jpg",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="student"
                className="w-14 h-14 min-w-[56px] max-w-[56px] rounded-full object-cover border-4 border-black flex-shrink-0"
              />
            ))}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-black text-white">
              1Million+
            </h3>

            <p className="text-xs tracking-[0.35em] uppercase text-zinc-400 mt-1">
              Students Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
