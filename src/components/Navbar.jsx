import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LogOut,
  Bell,
  LayoutDashboard,
  ShieldCheck,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { useState, useEffect } from "react";
import api from "../api/client";

export default function Navbar() {
  const {
    user,
    logout,
    isAuthenticated,
    isAdmin,
  } = useAuth();

  const navigate = useNavigate();

  const [unread, setUnread] = useState(0);

  useEffect(() => {
    if (isAuthenticated && !isAdmin) {
      api
        .get("/student/notifications")
        .then((response) => {
          const unreadNotifications =
            response.data.filter(
              (notification) => !notification.read
            );

          setUnread(
            unreadNotifications.length
          );
        })
        .catch(() => {
          setUnread(0);
        });
    }
  }, [isAuthenticated, isAdmin]);

  const handleLogout = () => {
    logout();

    localStorage.removeItem(
      "eduspark_token"
    );

    localStorage.removeItem(
      "eduspark_user"
    );

    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center font-black text-black">
            E
          </div>

          <span className="text-white text-3xl font-bold">
            EduSpark
          </span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-12">

          <Link
            to="/"
            className="text-yellow-400 font-medium"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Courses
          </Link>

          {isAuthenticated && !isAdmin && (
            <Link
              to="/dashboard"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              My Learning
            </Link>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {isAuthenticated ? (
            <>
              {isAdmin ? (
                <Link
                  to="/admin"
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <ShieldCheck size={18} />
                  Admin
                </Link>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Link>

                  <Link
                    to="/notifications"
                    className="relative text-white hover:text-yellow-400 transition-colors"
                  >
                    <Bell size={20} />

                    {unread > 0 && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                        {unread}
                      </span>
                    )}
                  </Link>
                </>
              )}

              {/* User */}
              <span className="text-zinc-400 text-sm">
                Hi, {user?.firstName}
              </span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:border-yellow-400 transition-all"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-7 py-3 rounded-full transition-all duration-300"
              >
                Start Journey →
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}