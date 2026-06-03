export default function AdminEnrollments({
  enrollments,
}) {
  return (
    <div>

      <h2
        style={{
          color: "white",
          marginBottom: "25px",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        🎓 Enrollments
      </h2>

      {enrollments.map((enrollment) => (

        <div
          key={enrollment.id}
          style={{
            background:
              "linear-gradient(135deg,#27272a,#18181b)",
            color: "white",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "20px",
            border: "1px solid #3f3f46",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow:
              "0 8px 20px rgba(0,0,0,0.25)",
          }}
        >

          {/* LEFT SIDE */}

          <div>

            <h3
              style={{
                margin: 0,
                fontSize: "24px",
                marginBottom: "12px",
              }}
            >
              👨‍🎓 {enrollment.studentName}
            </h3>

            <p
              style={{
                color: "#d4d4d8",
                marginBottom: "8px",
              }}
            >
              📚 Course:
              {" "}
              {enrollment.courseTitle}
            </p>

            <p
              style={{
                color: "#d4d4d8",
                marginBottom: "8px",
              }}
            >
              💰 Amount Paid:
              {" "}
              ₹{enrollment.amountPaid}
            </p>

            <p
              style={{
                color: "#d4d4d8",
              }}
            >
              📅 Enrolled:
              {" "}
              {new Date(
                enrollment.enrolledAt
              ).toLocaleDateString()}
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div
            style={{
              minWidth: "250px",
            }}
          >

            <div
              style={{
                textAlign: "right",
                marginBottom: "20px",
              }}
            >

              <span
                style={{
                  background:
                    enrollment.paymentStatus ===
                    "COMPLETED"
                      ? "#16a34a"
                      : "#dc2626",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                {enrollment.paymentStatus}
              </span>

            </div>

            <div>

              <p
                style={{
                  marginBottom: "8px",
                  color: "#e4e4e7",
                  fontWeight: "600",
                }}
              >
                Progress:
                {" "}
                {enrollment.progressPercent}%
              </p>

              <div
                style={{
                  height: "12px",
                  background: "#3f3f46",
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >

                <div
                  style={{
                    width:
                      `${enrollment.progressPercent || 0}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg,#facc15,#eab308)",
                    borderRadius: "30px",
                    transition:
                      "width 0.5s ease",
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      ))}

      {enrollments.length === 0 && (
        <div
          style={{
            textAlign: "center",
            color: "#a1a1aa",
            padding: "50px",
            background: "#27272a",
            borderRadius: "20px",
          }}
        >
          No enrollments found 📭
        </div>
      )}

    </div>
  );
}