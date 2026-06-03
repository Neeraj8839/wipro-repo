import { useEffect, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../api/client";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const { data } = await api.get("/admin/students");
      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  const filtered = students.filter((s) =>
    `${s.firstName} ${s.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "2rem",
        background: "#f5f3ef",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "0.5rem",
          color: "#1f2937",
        }}
      >
        Students
      </h1>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "2rem",
        }}
      >
        Track productivity and progress across your courses
      </p>

      <div
        style={{
          background: "white",
          padding: "1rem",
          borderRadius: "12px",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          border: "1px solid #e5e7eb",
        }}
      >
        <Search size={20} color="#6b7280" />

        <input
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "1rem",
            background: "transparent",
          }}
        />
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "18px",
          border: "1px solid #e5e7eb",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "1.5rem",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ margin: 0 }}>All Students</h2>

          <p style={{ color: "#6b7280" }}>
            {filtered.length} students
          </p>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#fafafa",
                textAlign: "left",
              }}
            >
              <th style={thStyle}>STUDENT</th>
              <th style={thStyle}>STATUS</th>
              <th style={thStyle}>COURSES</th>
              <th style={thStyle}>LECTURES</th>
              <th style={thStyle}>QUIZ SCORE</th>
              <th style={thStyle}></th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((student) => (
              <tr
                key={student.id}
                style={{
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <td style={tdStyle}>
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        color: "#1f2937",
                      }}
                    >
                      {student.firstName} {student.lastName}
                    </h4>

                    <p
                      style={{
                        margin: 0,
                        color: "#6b7280",
                        fontSize: "0.9rem",
                      }}
                    >
                      {student.email}
                    </p>
                  </div>
                </td>

                <td style={tdStyle}>
                  <span
                    style={{
                      background: student.active
                        ? "#dcfce7"
                        : "#fee2e2",
                      color: student.active
                        ? "#166534"
                        : "#991b1b",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "999px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {student.active ? "Active" : "Inactive"}
                  </span>
                </td>

                <td style={tdStyle}>
                  {student.enrolledCourses}
                </td>

                <td style={tdStyle}>
                  {student.completedLectures}
                </td>

                <td style={tdStyle}>
                  {student.correctQuizAnswers}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      navigate(`/students/${student.id}`)
                    }
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "1rem",
  color: "#6b7280",
  fontSize: "0.85rem",
};

const tdStyle = {
  padding: "1.2rem 1rem",
};