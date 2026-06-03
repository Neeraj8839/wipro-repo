import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  Search,
  BookOpen,
  Clock,
  Users,
} from "lucide-react";

import api from "../api/client";

export default function CourseCatalogPage() {

  const [courses, setCourses] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    api.get("/courses/public/all")

      .then((response) => {

        setCourses(response.data);

        setLoading(false);
      })

      .catch(() => {

        setLoading(false);
      });

  }, []);

  // Categories
  const categories = [

    "All",

    ...Array.from(

      new Set(
        courses
          .map((course) => course.category)
          .filter(Boolean)
      )
    ),
  ];

  // Filtered Courses
  const filtered = courses.filter(
    (course) =>

      (category === "All" ||
        course.category === category)

      &&

      (
        course.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        course.description
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
      )
  );

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

          padding: "4rem 2rem",

          textAlign: "center",

          color: "white",
        }}
      >

        <h1
          style={{

            fontSize: "2.5rem",

            fontWeight: 900,

            marginBottom: "1rem",
          }}
        >

          Explore Courses

        </h1>

        <p
          style={{

            fontSize: "1.1rem",

            opacity: 0.9,

            marginBottom: "2rem",
          }}
        >

          Find the perfect course
          to level up your skills

        </p>

        {/* Search */}
        <div
          style={{

            maxWidth: "500px",

            margin: "0 auto",

            position: "relative",
          }}
        >

          <Search
            size={20}
            style={{

              position: "absolute",

              left: "1rem",

              top: "50%",

              transform:
                "translateY(-50%)",

              color: "#94a3b8",
            }}
          />

          <input
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
            placeholder="Search courses..."
            style={{

              width: "100%",

              padding:
                "1rem 1rem 1rem 3rem",

              borderRadius: "12px",

              border: "none",

              fontSize: "1rem",

              boxSizing: "border-box",

              outline: "none",
            }}
          />

        </div>

      </div>

      {/* Content */}
      <div
        style={{

          maxWidth: "1200px",

          margin: "0 auto",

          padding: "3rem 2rem",
        }}
      >

        {/* Categories */}
        <div
          style={{

            display: "flex",

            gap: "0.75rem",

            marginBottom: "2rem",

            flexWrap: "wrap",
          }}
        >

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() =>
                setCategory(cat)
              }
              style={{

                padding:
                  "0.5rem 1.25rem",

                borderRadius: "100px",

                border:
                  category === cat
                    ? "none"
                    : "2px solid #e2e8f0",

                background:
                  category === cat
                    ? "linear-gradient(135deg, #667eea, #764ba2)"
                    : "white",

                color:
                  category === cat
                    ? "white"
                    : "#64748b",

                fontWeight: 600,

                cursor: "pointer",

                fontSize: "0.875rem",
              }}
            >

              {cat}

            </button>
          ))}

        </div>

        {/* Loading */}
        {loading ? (

          <div
            style={{

              textAlign: "center",

              padding: "4rem",

              color: "#64748b",
            }}
          >

            Loading courses...

          </div>

        ) : filtered.length === 0 ? (

          /* Empty */
          <div
            style={{

              textAlign: "center",

              padding: "4rem",
            }}
          >

            <BookOpen
              size={48}
              color="#cbd5e1"
              style={{
                marginBottom: "1rem",
              }}
            />

            <p
              style={{

                color: "#64748b",

                fontSize: "1.1rem",
              }}
            >

              No courses found

            </p>

          </div>

        ) : (

          /* Courses Grid */
          <div
            style={{

              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fill, minmax(320px, 1fr))",

              gap: "2rem",
            }}
          >

            {filtered.map((course) => (

              <Link
                to={`/courses/${course.id}`}
                key={course.id}
                style={{
                  textDecoration: "none",
                }}
              >

                <div
                  style={{

                    background: "white",

                    borderRadius: "16px",

                    overflow: "hidden",

                    boxShadow:
                      "0 4px 20px rgba(0,0,0,0.08)",

                    cursor: "pointer",

                    transition:
                      "transform 0.2s, box-shadow 0.2s",
                  }}

                  onMouseEnter={(event) => {

                    event.currentTarget.style.transform =
                      "translateY(-4px)";

                    event.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(0,0,0,0.15)";
                  }}

                  onMouseLeave={(event) => {

                    event.currentTarget.style.transform =
                      "";

                    event.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.08)";
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

                      height: "180px",

                      objectFit: "cover",
                    }}
                  />

                  {/* Body */}
                  <div
                    style={{
                      padding: "1.5rem",
                    }}
                  >

                    {/* Category */}
                    <span
                      style={{

                        background: "#f0f4ff",

                        color: "#667eea",

                        borderRadius: "6px",

                        padding:
                          "0.25rem 0.75rem",

                        fontSize: "0.75rem",

                        fontWeight: 700,
                      }}
                    >

                      {course.category}

                    </span>

                    {/* Title */}
                    <h3
                      style={{

                        color: "#1e293b",

                        fontWeight: 700,

                        marginTop: "0.75rem",

                        marginBottom: "0.5rem",

                        fontSize: "1.1rem",

                        lineHeight: 1.3,
                      }}
                    >

                      {course.title}

                    </h3>

                    {/* Instructor */}
                    <p
                      style={{

                        color: "#64748b",

                        fontSize: "0.85rem",

                        marginBottom: "1rem",

                        lineHeight: 1.5,
                      }}
                    >

                      by {course.instructor}

                    </p>

                    {/* Stats */}
                    <div
                      style={{

                        display: "flex",

                        gap: "1rem",

                        marginBottom: "1rem",

                        color: "#94a3b8",

                        fontSize: "0.8rem",
                      }}
                    >

                      <span
                        style={{

                          display: "flex",

                          alignItems: "center",

                          gap: "0.25rem",
                        }}
                      >

                        <Clock size={14} />

                        {course.durationHours}h

                      </span>

                      <span
                        style={{

                          display: "flex",

                          alignItems: "center",

                          gap: "0.25rem",
                        }}
                      >

                        <Users size={14} />

                        {course.enrolledCount}
                        {" "}
                        students

                      </span>

                      <span
                        style={{

                          display: "flex",

                          alignItems: "center",

                          gap: "0.25rem",
                        }}
                      >

                        <BookOpen size={14} />

                        {course.lectureCount}
                        {" "}
                        lectures

                      </span>

                    </div>

                    {/* Footer */}
                    <div
                      style={{

                        display: "flex",

                        justifyContent:
                          "space-between",

                        alignItems: "center",
                      }}
                    >

                      <span
                        style={{

                          fontSize: "1.5rem",

                          fontWeight: 900,

                          color: "#667eea",
                        }}
                      >

                        ${course.price}

                      </span>

                      <span
                        style={{

                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",

                          color: "white",

                          borderRadius: "8px",

                          padding:
                            "0.5rem 1rem",

                          fontSize: "0.875rem",

                          fontWeight: 700,
                        }}
                      >

                        View Course

                      </span>

                    </div>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}