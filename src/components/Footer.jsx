import { Link } from "react-router-dom";
import {
  BookOpen,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-black" />
              </div>

              <span className="text-3xl font-bold text-white">
                EduSpark
              </span>

            </div>

            <p className="text-zinc-400 leading-relaxed">
              Learn modern technologies, build projects,
              and become industry ready with EduSpark.
            </p>

          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Platform
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-zinc-400 hover:text-yellow-400"
              >
                Home
              </Link>

              <Link
                to="/courses"
                className="text-zinc-400 hover:text-yellow-400"
              >
                Courses
              </Link>

              <Link
                to="/login"
                className="text-zinc-400 hover:text-yellow-400"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="text-zinc-400 hover:text-yellow-400"
              >
                Sign Up
              </Link>

            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Resources
            </h3>

            <div className="flex flex-col gap-3">

              <span className="text-zinc-400">
                Documentation
              </span>

              <span className="text-zinc-400">
                Certifications
              </span>

              <span className="text-zinc-400">
                Community
              </span>

              <span className="text-zinc-400">
                Support
              </span>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-yellow-400 transition"
              >
                <Github size={18} className="text-white" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-yellow-400 transition"
              >
                <Linkedin size={18} className="text-white" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-yellow-400 transition"
              >
                <Twitter size={18} className="text-white" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 EduSpark. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <span className="text-zinc-500 hover:text-yellow-400 cursor-pointer">
              Privacy Policy
            </span>

            <span className="text-zinc-500 hover:text-yellow-400 cursor-pointer">
              Terms of Service
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}