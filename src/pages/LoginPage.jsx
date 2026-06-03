import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  BookOpen,
  LogIn,
} from "lucide-react";

import toast from "react-hot-toast";

import api from "../api/client";

import {
  useAuth,
} from "../context/AuthContext";

export default function LoginPage() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {

    event.preventDefault();

    setLoading(true);

    try {

      const { data } =
        await api.post(
          "/auth/login",
          form
        );

      login(data);

      toast.success(
        `Welcome back, ${data.firstName}!`
      );

      if (data.role === "ADMIN") {

        navigate("/admin");

      } else {

        navigate("/dashboard");
      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Invalid credentials"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div
      style={{

        minHeight: "100vh",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        background:
          "linear-gradient(135deg, #f0f4ff 0%, #f8f4ff 100%)",

        padding: "2rem",
      }}
    >

      <div
        style={{

          background: "white",

          borderRadius: "24px",

          padding: "3rem",

          width: "100%",

          maxWidth: "420px",

          boxShadow:
            "0 20px 60px rgba(102,126,234,0.15)",
        }}
      >

        {/* Logo */}
        <div
          style={{

            textAlign: "center",

            marginBottom: "2rem",
          }}
        >

          <div
            style={{

              display: "inline-flex",

              alignItems: "center",

              gap: "0.5rem",

              color: "#667eea",

              marginBottom: "1rem",
            }}
          >

            <BookOpen size={32} />

            <span
              style={{

                fontSize: "1.75rem",

                fontWeight: 900,
              }}
            >

              EduSpark

            </span>

          </div>

          <h1
            style={{

              fontSize: "1.5rem",

              fontWeight: 800,

              color: "#1e293b",

              margin: 0,
            }}
          >

            Welcome back

          </h1>

          <p
            style={{

              color: "#64748b",

              marginTop: "0.5rem",
            }}
          >

            Sign in to continue learning

          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{

            display: "flex",

            flexDirection: "column",

            gap: "1rem",
          }}
        >

          {/* Email */}
          <div>

            <label
              style={{

                display: "block",

                fontWeight: 600,

                color: "#374151",

                marginBottom: "0.375rem",

                fontSize: "0.875rem",
              }}
            >

              Email

            </label>

            <input
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  email: event.target.value,
                }))
              }
              placeholder="you@example.com"
              style={{

                width: "100%",

                padding: "0.75rem 1rem",

                borderRadius: "10px",

                border:
                  "2px solid #e2e8f0",

                fontSize: "1rem",

                outline: "none",

                boxSizing: "border-box",

                transition: "border 0.2s",
              }}
              onFocus={(event) =>
                event.target.style.border =
                  "2px solid #667eea"
              }
              onBlur={(event) =>
                event.target.style.border =
                  "2px solid #e2e8f0"
              }
            />

          </div>

          {/* Password */}
          <div>

            <label
              style={{

                display: "block",

                fontWeight: 600,

                color: "#374151",

                marginBottom: "0.375rem",

                fontSize: "0.875rem",
              }}
            >

              Password

            </label>

            <input
              type="password"
              required
              value={form.password}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  password:
                    event.target.value,
                }))
              }
              placeholder="••••••••"
              style={{

                width: "100%",

                padding: "0.75rem 1rem",

                borderRadius: "10px",

                border:
                  "2px solid #e2e8f0",

                fontSize: "1rem",

                outline: "none",

                boxSizing: "border-box",

                transition: "border 0.2s",
              }}
              onFocus={(event) =>
                event.target.style.border =
                  "2px solid #667eea"
              }
              onBlur={(event) =>
                event.target.style.border =
                  "2px solid #e2e8f0"
              }
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            style={{

              background:
                "linear-gradient(135deg, #667eea, #764ba2)",

              color: "white",

              border: "none",

              borderRadius: "10px",

              padding: "0.875rem",

              fontSize: "1rem",

              fontWeight: 700,

              cursor:
                loading
                  ? "not-allowed"
                  : "pointer",

              opacity:
                loading ? 0.7 : 1,

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              gap: "0.5rem",

              marginTop: "0.5rem",
            }}
          >

            {loading ? (

              "Signing in..."

            ) : (

              <>

                <LogIn size={18} />

                Sign In

              </>
            )}

          </button>

        </form>

        {/* Demo Accounts */}
        <div
          style={{

            marginTop: "1.5rem",

            padding: "1rem",

            background: "#f8fafc",

            borderRadius: "10px",

            fontSize: "0.8rem",

            color: "#64748b",
          }}
        >

          <strong>
            Demo accounts:
          </strong>

          <br />

          Admin:
          admin@eduspark.com /
          admin123

          <br />

          Student:
          student@eduspark.com /
          student123

        </div>

        {/* Signup */}
        <p
          style={{

            textAlign: "center",

            marginTop: "1.5rem",

            color: "#64748b",

            fontSize: "0.9rem",
          }}
        >

          No account?{" "}

          <Link
            to="/signup"
            style={{

              color: "#667eea",

              fontWeight: 700,

              textDecoration: "none",
            }}
          >

            Sign up free

          </Link>

        </p>

      </div>

    </div>
  );
}