import { useEffect, useState } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";

import {
  Clock,
  Users,
  BookOpen,
  Lock,
  PlayCircle,
  CheckCircle,
  ShoppingCart,
} from "lucide-react";

import toast from "react-hot-toast";

import api from "../api/client";

import { useAuth } from "../context/AuthContext";

export default function CourseDetailPage() {
  const { id } = useParams();

  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  const [lectures, setLectures] = useState([]);

  const [enrolling, setEnrolling] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Course
        const courseResponse = await api.get(
          isAuthenticated ? `/courses/${id}` : `/courses/public/${id}`,
        );

        setCourse(courseResponse.data);

        // Lectures
        if (isAuthenticated && courseResponse.data.enrolled) {
          const lectureResponse = await api.get(
            `/student/courses/${id}/lectures`,
          );

          setLectures(lectureResponse.data);
        } else {
          const lectureResponse = await api
            .get(`/student/courses/${id}/lectures`)

            .catch(() => ({
              data: [],
            }));

          setLectures(lectureResponse.data);
        }
      } catch {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, isAuthenticated]);

  // Purchase Course
  const handlePurchase = async () => {
    if (!isAuthenticated) {
      navigate("/login");

      return;
    }

    setEnrolling(true);

    try {
      await api.post("/student/enroll", {
        courseId: Number(id),
      });

      toast.success("Enrolled successfully!");

      setCourse((previous) =>
        previous
          ? {
              ...previous,
              enrolled: true,
            }
          : previous,
      );

      const lectureResponse = await api.get(`/student/courses/${id}/lectures`);

      setLectures(lectureResponse.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Enrollment failed");
    } finally {
      setEnrolling(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",

          padding: "4rem",

          color: "#64748b",
        }}
      >
        Loading course...
      </div>
    );
  }

  // Not Found
  if (!course) {
    return (
      <div
        style={{
          textAlign: "center",

          padding: "4rem",

          color: "#ef4444",
        }}
      >
        Course not found
      </div>
    );
  }

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
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",

          color: "white",

          padding: "3rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",

            margin: "0 auto",

            display: "grid",

            gridTemplateColumns: "1fr 380px",

            gap: "3rem",

            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <span
              style={{
                background: "#667eea",

                borderRadius: "6px",

                padding: "0.25rem 0.75rem",

                fontSize: "0.75rem",

                fontWeight: 700,

                marginBottom: "1rem",

                display: "inline-block",
              }}
            >
              {course.category}
            </span>

            <h1
              style={{
                fontSize: "2.25rem",

                fontWeight: 900,

                lineHeight: 1.2,

                marginBottom: "1rem",
              }}
            >
              {course.title}
            </h1>

            <p
              style={{
                opacity: 0.85,

                lineHeight: 1.6,

                marginBottom: "1.5rem",
              }}
            >
              {course.description}
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",

                gap: "2rem",

                opacity: 0.8,

                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "flex",

                  alignItems: "center",

                  gap: "0.4rem",
                }}
              >
                <Users size={16} />
                {course.enrolledCount} students
              </span>

              <span
                style={{
                  display: "flex",

                  alignItems: "center",

                  gap: "0.4rem",
                }}
              >
                <Clock size={16} />
                {course.durationHours}h total
              </span>

              <span
                style={{
                  display: "flex",

                  alignItems: "center",

                  gap: "0.4rem",
                }}
              >
                <BookOpen size={16} />
                {course.lectureCount} lectures
              </span>
            </div>

            <p
              style={{
                marginTop: "1rem",

                opacity: 0.75,
              }}
            >
              Created by <strong>{course.instructor}</strong>
            </p>
          </div>

          {/* Right Card */}
          <div
            style={{
              background: "white",

              borderRadius: "16px",

              overflow: "hidden",

              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",

              color: "#1e293b",
            }}
          >
            {/* Image */}
            <img
              src={
                course.thumbnailUrl ||
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400"
              }
              alt={course.title}
              style={{
                width: "100%",

                height: "200px",

                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "1.5rem",
              }}
            >
              {/* Price */}
              <div
                style={{
                  fontSize: "2.5rem",

                  fontWeight: 900,

                  color: "#667eea",

                  marginBottom: "1rem",
                }}
              >
                ${course.price}
              </div>

              {/* Enrolled */}
              {course.enrolled ? (
                <button
                  onClick={() => navigate(`/learn/${id}/1`)}
                  style={{
                    width: "100%",

                    background: "linear-gradient(135deg, #10b981, #059669)",

                    color: "white",

                    border: "none",

                    borderRadius: "10px",

                    padding: "1rem",

                    fontSize: "1rem",

                    fontWeight: 700,

                    cursor: "pointer",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    gap: "0.5rem",
                  }}
                >
                  <PlayCircle size={20} />
                  Continue Learning
                </button>
              ) : (
                <button
                  onClick={handlePurchase}
                  disabled={enrolling}
                  style={{
                    width: "100%",

                    background: "linear-gradient(135deg, #667eea, #764ba2)",

                    color: "white",

                    border: "none",

                    borderRadius: "10px",

                    padding: "1rem",

                    fontSize: "1rem",

                    fontWeight: 700,

                    cursor: enrolling ? "not-allowed" : "pointer",

                    opacity: enrolling ? 0.7 : 1,

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    gap: "0.5rem",
                  }}
                >
                  <ShoppingCart size={20} />

                  {enrolling ? "Enrolling..." : "Enroll Now"}
                </button>
              )}

              {/* Login Prompt */}
              {!isAuthenticated && (
                <p
                  style={{
                    textAlign: "center",

                    marginTop: "0.75rem",

                    fontSize: "0.85rem",

                    color: "#64748b",
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      color: "#667eea",

                      fontWeight: 700,
                    }}
                  >
                    Sign in
                  </Link>{" "}
                  to enroll
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lectures */}
      <div
        style={{
          maxWidth: "1100px",

          margin: "3rem auto",

          padding: "0 2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",

            fontWeight: 800,

            color: "#1e293b",

            marginBottom: "1.5rem",
          }}
        >
          Course Content
        </h2>

        <div
          style={{
            display: "flex",

            flexDirection: "column",

            gap: "0.75rem",
          }}
        >
          {lectures.map((lecture, index) => (
            <div
              key={lecture.id}
              style={{
                background: "white",

                borderRadius: "12px",

                padding: "1rem 1.5rem",

                display: "flex",

                alignItems: "center",

                gap: "1rem",

                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",

                opacity: lecture.unlocked || lecture.freePreview ? 1 : 0.65,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "36px",

                  height: "36px",

                  borderRadius: "50%",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  background: lecture.completed
                    ? "#dcfce7"
                    : lecture.unlocked
                      ? "#f0f4ff"
                      : "#f1f5f9",

                  flexShrink: 0,
                }}
              >
                {lecture.completed ? (
                  <CheckCircle size={18} color="#10b981" />
                ) : lecture.unlocked || lecture.freePreview ? (
                  <PlayCircle size={18} color="#667eea" />
                ) : (
                  <Lock size={18} color="#94a3b8" />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontWeight: 600,

                    color: "#1e293b",

                    fontSize: "0.95rem",
                  }}
                >
                  {index + 1}. {lecture.title}
                  {lecture.freePreview && (
                    <span
                      style={{
                        background: "#dcfce7",

                        color: "#10b981",

                        borderRadius: "4px",

                        padding: "0.1rem 0.4rem",

                        fontSize: "0.7rem",

                        fontWeight: 700,

                        marginLeft: "0.5rem",
                      }}
                    >
                      FREE
                    </span>
                  )}
                </div>

                {lecture.durationMinutes && (
                  <div
                    style={{
                      color: "#94a3b8",

                      fontSize: "0.8rem",

                      marginTop: "0.2rem",
                    }}
                  >
                    {lecture.durationMinutes} min
                  </div>
                )}
              </div>

              {/* Button */}
              {(lecture.unlocked || lecture.freePreview) && course.enrolled && (
                <button
                  onClick={() => navigate(`/learn/${id}/${lecture.id}`)}
                  style={{
                    background: "#f0f4ff",

                    color: "#667eea",

                    border: "none",

                    borderRadius: "8px",

                    padding: "0.4rem 1rem",

                    fontWeight: 600,

                    fontSize: "0.8rem",

                    cursor: "pointer",
                  }}
                >
                  {lecture.completed ? "Review" : "Start"}
                </button>
              )}
            </div>
          ))}

          {/* Empty */}
          {lectures.length === 0 && (
            <div
              style={{
                textAlign: "center",

                padding: "3rem",

                color: "#94a3b8",
              }}
            >
              <BookOpen
                size={40}
                style={{
                  marginBottom: "1rem",
                }}
              />

              <p>Lectures will appear here after enrollment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
