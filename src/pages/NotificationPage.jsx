import { useEffect, useState } from "react";
import api from "../api/client";
import toast from "react-hot-toast";
import {
  Bell,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Award,
} from "lucide-react";

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const res = await api.get("/student/notifications");
      setNotifications(res.data);
    } catch {
      toast.error("Failed to load notifications");
    }
  };

  const markAllRead = async () => {
    try {
      await api.post("/student/notifications/read-all");

      setNotifications((prev) =>
        prev.map((n) => ({
          ...n,
          read: true,
        }))
      );

      toast.success("All notifications marked as read");
    } catch {
      toast.error("Failed to update notifications");
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "QUIZ_RESULT":
        return <Award size={22} />;
      case "LECTURE_UNLOCK":
        return <BookOpen size={22} />;
      case "ENROLLMENT":
        return <CheckCircle size={22} />;
      default:
        return <AlertCircle size={22} />;
    }
  };

  const unreadCount = notifications.filter(
    (n) => !n.read
  ).length;

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-slate-800
      text-white
      p-8
    "
    >
      {/* Header */}

      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h1 className="text-5xl font-bold flex items-center gap-4">
              <Bell className="text-yellow-400" />
              Notifications
            </h1>

            <p className="text-slate-400 mt-2">
              Stay updated with your learning activity
            </p>
          </div>

          <div className="flex items-center gap-4">

            <div
              className="
              px-4 py-2 rounded-xl
              bg-yellow-400 text-black
              font-bold
            "
            >
              {unreadCount} Unread
            </div>

            <button
              onClick={markAllRead}
              className="
              px-5 py-3
              rounded-xl
              bg-gradient-to-r
              from-yellow-400
              to-orange-500
              text-black
              font-semibold
              hover:scale-105
              transition
            "
            >
              Mark All Read
            </button>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="max-w-6xl mx-auto">

        {notifications.length === 0 ? (
          <div
            className="
            bg-slate-900/70
            border border-slate-700
            rounded-3xl
            p-16
            text-center
          "
          >
            <Bell
              size={80}
              className="mx-auto text-slate-500 mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">
              No Notifications Yet
            </h2>

            <p className="text-slate-400">
              New updates will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`
                p-6
                rounded-2xl
                border
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-xl

                ${
                  n.read
                    ? `
                      bg-slate-900/60
                      border-slate-700
                    `
                    : `
                      bg-gradient-to-r
                      from-blue-900/50
                      to-indigo-900/40
                      border-blue-500
                      shadow-lg
                      shadow-blue-900/30
                    `
                }
              `}
              >
                <div className="flex gap-4">

                  <div
                    className="
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    bg-yellow-400
                    text-black
                    flex-shrink-0
                  "
                  >
                    {getIcon(n.type)}
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between items-start flex-wrap gap-2">

                      <h3 className="text-xl font-bold">
                        {n.title}
                      </h3>

                      {!n.read && (
                        <span
                          className="
                          bg-yellow-400
                          text-black
                          text-xs
                          px-3 py-1
                          rounded-full
                          font-bold
                        "
                        >
                          NEW
                        </span>
                      )}
                    </div>

                    <p className="text-slate-300 mt-2">
                      {n.message}
                    </p>

                    <div className="mt-4 text-sm text-slate-500">
                      {new Date(
                        n.createdAt
                      ).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}