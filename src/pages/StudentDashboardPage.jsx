import {
  useEffect,
  useState,
} from "react";

import { Link,  useNavigate  } from "react-router-dom";
import { BarChart3 } from "lucide-react";

import {
  BookOpen,
  MessageSquare,
  Bell,
  TrendingUp,
  Plus,
  Send,
  CheckCircle,
} from "lucide-react";

import toast from "react-hot-toast";

import api from "../api/client";

import {
  useAuth,
} from "../context/AuthContext";

export default function StudentDashboardPage() {

  const navigate = useNavigate();

  const { user } = useAuth();

  const [tab, setTab] =
    useState("courses");

  const [enrollments, setEnrollments] =
    useState([]);

  const [tickets, setTickets] =
    useState([]);

  const [notifications, setNotifications] =
    useState([]);

  const [showTicketForm, setShowTicketForm] =
    useState(false);

  const [ticketForm, setTicketForm] =
    useState({

      subject: "",

      description: "",

      priority: "MEDIUM",
    });

  const [loading, setLoading] =
    useState(true);

  // Load Dashboard Data
  useEffect(() => {

    Promise.all([

      api.get("/student/enrollments"),

      api.get("/student/tickets"),

      api.get("/student/notifications"),

    ])

      .then(
        ([
          enrollmentsResponse,
          ticketsResponse,
          notificationsResponse,
        ]) => {

          setEnrollments(
            enrollmentsResponse.data
          );

          setTickets(
            ticketsResponse.data
          );

          setNotifications(
            notificationsResponse.data
          );
        }
      )

      .catch(() =>

        toast.error(
          "Failed to load dashboard"
        )
      )

      .finally(() =>
        setLoading(false)
      );

  }, []);

  // Submit Ticket
  const submitTicket = async (
    event
  ) => {

    event.preventDefault();

    try {

      const { data } =
        await api.post(
          "/student/tickets",
          ticketForm
        );

      setTickets((previous) => [

        data,

        ...previous,
      ]);

      setTicketForm({

        subject: "",

        description: "",

        priority: "MEDIUM",
      });

      setShowTicketForm(false);

      toast.success(
        "Ticket submitted!"
      );

    } catch {

      toast.error(
        "Failed to submit ticket"
      );
    }
  };

  // Mark Notifications Read
  const markAllRead =
    async () => {

      await api.post(
        "/student/notifications/read-all"
      );

      setNotifications(
        (previous) =>

          previous.map(
            (notification) => ({

              ...notification,

              read: true,
            })
          )
      );

      toast.success(
        "All notifications marked as read"
      );
    };

  // Tabs Style
  const tabStyle = (active) => ({

    padding: "0.75rem 1.5rem",

    fontWeight: 700,

    border: "none",

    cursor: "pointer",

    background: active
      ? "white"
      : "transparent",

    color: active
      ? "#667eea"
      : "#64748b",

    borderRadius: "10px",

    fontSize: "0.875rem",

    display: "flex",

    alignItems: "center",

    gap: "0.5rem",
  });

  // Status Colors
  const statusColors = {

    OPEN: "#f59e0b",

    IN_PROGRESS: "#3b82f6",

    RESOLVED: "#10b981",

    CLOSED: "#94a3b8",
  };

  return (

    <div
      style={{

        minHeight: "100vh",

        background: "#f8fafc",
      }}
    >

      {/* Hero */}
      <div
        style={{

          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

          padding: "3rem 2rem",

          color: "white",
        }}
      >

        <div
          style={{

            maxWidth: "1100px",

            margin: "0 auto",
          }}
        >

          <h1
            style={{

              fontSize: "2rem",

              fontWeight: 900,

              marginBottom: "0.5rem",
            }}
          >

            Hello, {user?.firstName}!

          </h1>

          <p
            style={{
              opacity: 0.85,
            }}
          >

            Track your learning
            progress and manage your
            account

          </p>

          {/* Stats */}
          <div
            style={{

              display: "grid",

              gridTemplateColumns:
                "repeat(3, 1fr)",

              gap: "1rem",

              marginTop: "2rem",
            }}
          >

            {[
              {
                label:
                  "Enrolled Courses",

                value:
                  enrollments.length,

                icon: (
                  <BookOpen size={20} />
                ),
              },

              {
                label:
                  "Support Tickets",

                value: tickets.length,

                icon: (
                  <MessageSquare
                    size={20}
                  />
                ),
              },

              {
                label:
                  "Notifications",

                value:
                  notifications.filter(
                    (
                      notification
                    ) =>
                      !notification.read
                  ).length,

                icon: (
                  <Bell size={20} />
                ),
              },
            ].map((stat, index) => (

              <div
                key={index}
                style={{

                  background:
                    "rgba(255,255,255,0.15)",

                  borderRadius:
                    "12px",

                  padding: "1.25rem",

                  backdropFilter:
                    "blur(10px)",
                }}
              >

                <div
                  style={{

                    display: "flex",

                    alignItems:
                      "center",

                    gap: "0.5rem",

                    marginBottom:
                      "0.5rem",

                    opacity: 0.85,
                  }}
                >

                  {stat.icon}

                  {stat.label}

                </div>

                <div
                  style={{

                    fontSize: "2rem",

                    fontWeight: 900,
                  }}
                >

                  {stat.value}

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Content */}
      <div
        style={{

          maxWidth: "1100px",

          margin: "2rem auto",

          padding: "0 2rem",
        }}
      >

        {/* Tabs */}
        <div
          style={{

            background: "#f1f5f9",

            borderRadius: "12px",

            padding: "0.375rem",

            display: "inline-flex",

            gap: "0.25rem",

            marginBottom: "2rem",
          }}
        >

          <button
            style={tabStyle(
              tab === "courses"
            )}
            onClick={() =>
              setTab("courses")
            }
          >

            <BookOpen size={16} />

            My Courses

          </button>
          

<button
  style={tabStyle(false)}
  onClick={() => {
    console.log("Clicked");
    navigate("/support");
  }}
>
  <MessageSquare size={16} />
  Support Tickets
</button>



          <button
  style={tabStyle(false)}
  onClick={() =>
    navigate("/notifications")
  }
>
  <Bell size={16} />
  Notifications
</button>


<button
  style={tabStyle(false)}
  onClick={() => navigate("/progress")}
>
  <BarChart3 size={16} />
  Progress
</button>


        </div>

        {/* Loading */}
        {loading ? (

          <div
            style={{

              textAlign: "center",

              padding: "3rem",

              color: "#64748b",
            }}
          >

            Loading...

          </div>

        ) : (

          <>
            {/* COURSES */}
            {tab === "courses" && (

              <div>

                {enrollments.length ===
                0 ? (

                  <div
                    style={{

                      textAlign:
                        "center",

                      padding: "4rem",

                      background:
                        "white",

                      borderRadius:
                        "16px",

                      boxShadow:
                        "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >

                    <BookOpen
                      size={48}
                      color="#cbd5e1"
                      style={{
                        marginBottom:
                          "1rem",
                      }}
                    />

                    <h3
                      style={{

                        color:
                          "#1e293b",

                        marginBottom:
                          "0.5rem",
                      }}
                    >

                      No enrollments yet

                    </h3>

                    <p
                      style={{

                        color:
                          "#64748b",

                        marginBottom:
                          "1.5rem",
                      }}
                    >

                      Browse our
                      catalog and
                      enroll in a
                      course

                    </p>

                    <Link
                      to="/courses"
                      style={{

                        background:
                          "linear-gradient(135deg, #667eea, #764ba2)",

                        color:
                          "white",

                        textDecoration:
                          "none",

                        borderRadius:
                          "10px",

                        padding:
                          "0.875rem 2rem",

                        fontWeight: 700,
                      }}
                    >

                      Browse Courses

                    </Link>

                  </div>

                ) : (

                  <div
                    style={{

                      display: "grid",

                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(300px, 1fr))",

                      gap: "1.5rem",
                    }}
                  >

                    {enrollments.map(
                      (
                        enrollment
                      ) => (

                        <div
                          key={
                            enrollment.id
                          }
                          style={{

                            background:
                              "white",

                            borderRadius:
                              "16px",

                            padding:
                              "1.5rem",

                            boxShadow:
                              "0 2px 8px rgba(0,0,0,0.06)",
                          }}
                        >

                          <h3
                            style={{

                              color:
                                "#1e293b",

                              fontWeight: 700,

                              marginBottom:
                                "0.75rem",

                              fontSize:
                                "1rem",
                            }}
                          >

                            {
                              enrollment.courseTitle
                            }

                          </h3>

                          {/* Progress */}
                          <div
                            style={{
                              marginBottom:
                                "1rem",
                            }}
                          >

                            <div
                              style={{

                                display:
                                  "flex",

                                justifyContent:
                                  "space-between",

                                marginBottom:
                                  "0.375rem",
                              }}
                            >

                              <span
                                style={{

                                  fontSize:
                                    "0.8rem",

                                  color:
                                    "#64748b",
                                }}
                              >

                                Progress

                              </span>

                              <span
                                style={{

                                  fontSize:
                                    "0.8rem",

                                  fontWeight: 700,

                                  color:
                                    "#667eea",
                                }}
                              >

                                {
                                  enrollment.progressPercent
                                }
                                %

                              </span>

                            </div>

                            <div
                              style={{

                                background:
                                  "#f1f5f9",

                                borderRadius:
                                  "100px",

                                height: "8px",

                                overflow:
                                  "hidden",
                              }}
                            >

                              <div
                                style={{

                                  width:
                                    `${enrollment.progressPercent}%`,

                                  height:
                                    "100%",

                                  background:
                                    "linear-gradient(135deg, #667eea, #764ba2)",

                                  borderRadius:
                                    "100px",

                                  transition:
                                    "width 0.5s",
                                }}
                              />

                            </div>

                          </div>

                          <Link
                            to={`/courses/${enrollment.courseId}`}
                            style={{

                              display:
                                "flex",

                              alignItems:
                                "center",

                              justifyContent:
                                "center",

                              gap: "0.5rem",

                              background:
                                "linear-gradient(135deg, #667eea, #764ba2)",

                              color:
                                "white",

                              textDecoration:
                                "none",

                              borderRadius:
                                "10px",

                              padding:
                                "0.75rem",

                              fontWeight: 700,

                              fontSize:
                                "0.875rem",
                            }}
                          >

                            <TrendingUp
                              size={16}
                            />

                            Continue
                            Learning

                            {enrollment.progressPercent === 100 && (
  <Link
    to={`/certificate/${enrollment.courseId}`}
    style={{
      display: "block",
      textAlign: "center",
      marginTop: "12px",
      padding: "12px",
      borderRadius: "10px",
      textDecoration: "none",
      background:
        "linear-gradient(135deg,#facc15,#f59e0b)",
      color: "#111827",
      fontWeight: "700",
    }}
  >
    🏆 View Certificate
  </Link>
)}

                          </Link>

                        </div>
                      )
                    )}

                  </div>
                )}

              </div>
            )}

          </>
        )}

      </div>

    </div>
  );
}