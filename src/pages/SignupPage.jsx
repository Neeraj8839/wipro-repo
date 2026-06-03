import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  BookOpen,
  UserPlus,
} from "lucide-react";

import toast from "react-hot-toast";

import api from "../api/client";

import {
  useAuth,
} from "../context/AuthContext";

export default function SignupPage() {

  const [form, setForm] = useState({

    firstName: "",

    lastName: "",

    email: "",

    password: "",

    phone: "",
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
          "/auth/register",
          form
        );

      login(data);

      toast.success(
        "Account created! Welcome to EduSpark!"
      );

      navigate("/courses");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration failed"
      );

    } finally {

      setLoading(false);
    }
  };

  // Input Style
  const inputStyle = {

    width: "100%",

    padding: "0.75rem 1rem",

    borderRadius: "10px",

    border: "2px solid #e2e8f0",

    fontSize: "1rem",

    outline: "none",

    boxSizing: "border-box",

    transition: "border 0.2s",
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

          maxWidth: "460px",

          boxShadow:
            "0 20px 60px rgba(102,126,234,0.15)",
        }}
      >

        {/* Header */}
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

            Create your account

          </h1>

          <p
            style={{

              color: "#64748b",

              marginTop: "0.5rem",
            }}
          >

            Start learning today — it's free!

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

          {/* First & Last Name */}
          <div
            style={{

              display: "grid",

              gridTemplateColumns:
                "1fr 1fr",

              gap: "1rem",
            }}
          >

            {/* First Name */}
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

                First Name

              </label>

              <input
                type="text"
                required
                value={form.firstName}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    firstName:
                      event.target.value,
                  }))
                }
                placeholder="John"
                style={inputStyle}
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

            {/* Last Name */}
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

                Last Name

              </label>

              <input
                type="text"
                required
                value={form.lastName}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    lastName:
                      event.target.value,
                  }))
                }
                placeholder="Doe"
                style={inputStyle}
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

          </div>

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
              style={inputStyle}
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

          {/* Phone */}
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

              Phone (optional)

            </label>

            <input
              type="tel"
              value={form.phone}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  phone:
                    event.target.value,
                }))
              }
              placeholder="+1 (555) 000-0000"
              style={inputStyle}
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
              minLength={6}
              value={form.password}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  password:
                    event.target.value,
                }))
              }
              placeholder="At least 6 characters"
              style={inputStyle}
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

          {/* Submit Button */}
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

              "Creating account..."

            ) : (

              <>

                <UserPlus size={18} />

                Create Account

              </>
            )}

          </button>

        </form>

        {/* Login */}
        <p
          style={{

            textAlign: "center",

            marginTop: "1.5rem",

            color: "#64748b",

            fontSize: "0.9rem",
          }}
        >

          Already have an account?{" "}

          <Link
            to="/login"
            style={{

              color: "#667eea",

              fontWeight: 700,

              textDecoration: "none",
            }}
          >

            Sign in

          </Link>

        </p>

      </div>

    </div>
  );
}