import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import api from "../api/client";

export default function StudentDetailPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const { data } = await api.get(`/admin/students/${id}`);
      setStudent(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!student) return <h2>Loading...</h2>;

  return (
    <div
      style={{
        padding: "2rem",
        background: "#f5f3ef",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={() => navigate("/students")}
        style={{
          border: "none",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2rem",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        <ArrowLeft size={18} />
        Back to Students
      </button>

      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#e5d5c5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: "700",
                color: "#a16207",
              }}
            >
              {student.firstName[0]}
              {student.lastName[0]}
            </div>

            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: "2.5rem",
                  color: "#1f2937",
                }}
              >
                {student.firstName} {student.lastName}
              </h1>

              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginTop: "0.8rem",
                  color: "#6b7280",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Mail size={16} />
                  {student.email}
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Phone size={16} />
                  {student.phone || "No phone"}
                </span>
              </div>
            </div>
          </div>

          <span
            style={{
              background: "#dcfce7",
              color: "#166534",
              padding: "0.6rem 1rem",
              borderRadius: "999px",
              fontWeight: "600",
            }}
          >
            Active
          </span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Card
          title="Courses"
          value={student.enrolledCourses}
        />

        <Card
          title="Lectures"
          value={student.completedLectures}
        />

        <Card
          title="Quiz Score"
          value={student.correctQuizAnswers}
        />

        <Card
          title="Status"
          value={student.active ? "Active" : "Inactive"}
        />
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "2rem",
          border: "1px solid #e5e7eb",
        }}
      >
        <h2>Student Progress</h2>

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <ProgressBar
            label="Courses Completed"
            value={student.enrolledCourses * 20}
          />

          <ProgressBar
            label="Lecture Progress"
            value={student.completedLectures * 10}
          />

          <ProgressBar
            label="Quiz Performance"
            value={student.correctQuizAnswers * 10}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "2rem",
        borderRadius: "18px",
        border: "1px solid #e5e7eb",
      }}
    >
      <h1
        style={{
          margin: 0,
          color: "#1f2937",
        }}
      >
        {value}
      </h1>

      <p
        style={{
          marginTop: "0.5rem",
          color: "#6b7280",
        }}
      >
        {title}
      </p>
    </div>
  );
}

function ProgressBar({ label, value }) {
  return (
    <div
      style={{
        marginBottom: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div
        style={{
          width: "100%",
          height: "10px",
          background: "#e5e7eb",
          borderRadius: "999px",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "#a16207",
            borderRadius: "999px",
          }}
        />
      </div>
    </div>
  );
}