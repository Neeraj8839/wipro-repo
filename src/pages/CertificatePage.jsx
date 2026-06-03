import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Award, Calendar, User, BookOpen, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import api from "../api/client";

export default function CertificatePage() {
  const { courseId } = useParams();

  const [certificate, setCertificate] = useState(null);

  const certificateRef = useRef(null);

  useEffect(() => {
    api
      .get(`/student/certificate/${courseId}`)
      .then((res) => setCertificate(res.data))
      .catch((err) => console.error(err));
  }, [courseId]);

  const downloadCertificate = async () => {
    const element = certificateRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF(
      "landscape",
      "mm",
      "a4"
    );

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) /
      canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(
      `${certificate.courseTitle}-Certificate.pdf`
    );
  };

  if (!certificate) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Loading Certificate...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        ref={certificateRef}
        style={{
          width: "100%",
          maxWidth: "1000px",
          background:
            "rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          border:
            "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: "80px 60px",
          textAlign: "center",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.4)",
          position: "relative",
          overflow: "visible",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "250px",
            height: "250px",
            background:
              "rgba(250,204,21,0.15)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />





        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "12px",
              background: "#facc15",
              color: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "900",
              fontSize: "24px",
            }}
          >
            E
          </div>

          <h2
            style={{
              fontSize: "30px",
              fontWeight: "800",
              color: "#111827",
            }}
          >
            EduSpark
          </h2>
        </div>






        <Award
          size={90}
          color="#facc15"
          style={{
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1.2",
            fontWeight: "900",
            marginBottom: "10px",
            background:
              "linear-gradient(135deg,#facc15,#f59e0b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor:
              "transparent",
          }}
        >
          Certificate
        </h1>

        <h2
          style={{
            color: "#fff",
            fontSize: "2rem",
            marginBottom: "40px",
          }}
        >
          Of Completion
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
          }}
        >
          This certifies that
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "56px",
            fontWeight: "800",
            margin: "25px 0",
          }}
        >
          {certificate.studentName}
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
          }}
        >
          has successfully completed
        </p>

        <h3
          style={{
            color: "#facc15",
            fontSize: "42px",
            marginTop: "25px",
            marginBottom: "40px",
          }}
        >
          {certificate.courseTitle}
        </h3>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "16px",
              minWidth: "220px",
            }}
          >
            <User color="#667eea" />
            <p style={{ color: "#94a3b8" }}>
              Student
            </p>
            <h4 style={{ color: "#fff" }}>
              {certificate.studentName}
            </h4>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "16px",
              minWidth: "220px",
            }}
          >
            <BookOpen color="#10b981" />
            <p style={{ color: "#94a3b8" }}>
              Course
            </p>
            <h4 style={{ color: "#fff" }}>
              {certificate.courseTitle}
            </h4>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "16px",
              minWidth: "220px",
            }}
          >
            <Calendar color="#f59e0b" />
            <p style={{ color: "#94a3b8" }}>
              Completion Date
            </p>
            <h4 style={{ color: "#fff" }}>
              {certificate.completionDate}
            </h4>
          </div>
        </div>

        <p
          style={{
            color: "#64748b",
            marginTop: "40px",
          }}
        >
          Issued by EduSpark Learning Platform
        </p>
      </div>

      <button
        onClick={downloadCertificate}
        style={{
          marginTop: "30px",
          background:
            "linear-gradient(135deg,#facc15,#f59e0b)",
          color: "#111827",
          border: "none",
          padding: "14px 30px",
          borderRadius: "12px",
          fontWeight: "700",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Download size={18} />
        Download Certificate
      </button>
    </div>
  );
}