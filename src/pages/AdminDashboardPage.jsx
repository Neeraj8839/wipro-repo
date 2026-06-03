import { useEffect, useState } from "react";

import {
  Users,
  BookOpen,
  ShoppingBag,
  MessageSquare,
  Trash2,
  Plus,
  Check,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

import toast from "react-hot-toast";

import api from "../api/client";

import AdminCourses from "../components/AdminCourses";

import AdminTickets from "../components/AdminTickets.jsx";

import AdminEnrollments from "../components/AdminEnrollments";

export default function AdminDashboardPage() {




const [showEditModal, setShowEditModal] = useState(false);

const [editingStudent, setEditingStudent] = useState(null);

const [editForm, setEditForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});



const updateStudent = async () => {
  try {

    await api.put(
      `/admin/students/${editingStudent.id}`,
      editForm
    );

    setStudents((prev) =>
      prev.map((student) =>
        student.id === editingStudent.id
          ? {
              ...student,
              ...editForm,
            }
          : student
      )
    );

    setShowEditModal(false);

    alert("Student updated successfully");

  } catch (err) {

    console.error(err);

    alert("Failed to update student");
  }
};



const [showStudentModal, setShowStudentModal] = useState(false);

const [studentForm, setStudentForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
});


const createStudent = async () => {
  try {
    await api.post(
      "/admin/students",
      studentForm
    );

    alert("Student created successfully");

    setShowStudentModal(false);

    setStudentForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    });

    loadStudents();
  } catch (err) {
  console.error("CREATE ERROR:", err);
}
};





  const [tab, setTab] =
    useState("overview");

  const [stats, setStats] =
    useState({});

const [students, setStudents] =
  useState([]);

const [searchTerm, setSearchTerm] =
  useState("");

  const [courses, setCourses] =
    useState([]);

  const [tickets, setTickets] =
    useState([]);

  const [enrollments, setEnrollments] =
    useState([]);

  const [
    showCourseForm,
    setShowCourseForm,
  ] = useState(false);

  const [courseForm, setCourseForm] =
    useState({
      title: "",
      description: "",
      price: "",
      category: "",
      instructor: "",
      durationHours: "",
      thumbnailUrl: "",
      status: "DRAFT",
    });

  const [replyForms, setReplyForms] =
    useState({});

  const [loading, setLoading] =
    useState(true);

  // Load Data
  useEffect(() => {

    Promise.all([
      api.get("/admin/analytics"),
      api.get("/admin/students"),
      api.get("/admin/courses"),
      api.get("/admin/tickets"),
      api.get("/admin/enrollments"),
    ])

      .then(
        ([
          dashboard,
          studentsData,
          coursesData,
          ticketsData,
          enrollmentsData,
        ]) => {

          setStats(dashboard.data);

          setStudents(studentsData.data);

          setCourses(coursesData.data);

          setTickets(ticketsData.data);

          setEnrollments(
            enrollmentsData.data
          );
        }
      )

      .catch(() =>

        toast.error(
          "Failed to load admin data"
        )
      )

      .finally(() =>
        setLoading(false)
      );

  }, []);

  // Delete Student
  const deleteStudent = async (
    id
  ) => {

    if (
      !confirm(
        "Delete this student?"
      )
    ) return;

    try {

      await api.delete(
        `/admin/students/${id}`
      );

      setStudents((prev) =>
        prev.filter(
          (student) =>
            student.id !== id
        )
      );

      toast.success(
        "Student deleted"
      );

    } catch {

      toast.error(
        "Failed to delete student"
      );
    }
  };

  // Delete Course
  const deleteCourse = async (
    id
  ) => {

    if (
      !confirm(
        "Delete this course?"
      )
    ) return;

    try {

      await api.delete(
        `/admin/courses/${id}`
      );

      setCourses((prev) =>
        prev.filter(
          (course) =>
            course.id !== id
        )
      );

      toast.success(
        "Course deleted"
      );

    } catch {

      toast.error(
        "Failed to delete course"
      );
    }
  };

  // Create Course
  const createCourse = async (
    e
  ) => {

    e.preventDefault();

    try {

      const { data } =
        await api.post(
          "/admin/courses",
          {
            ...courseForm,

            price: Number(
              courseForm.price
            ),

            durationHours:
              Number(
                courseForm.durationHours
              ) || null,  
          }
        );

      setCourses((prev) => [
        data,
        ...prev,
      ]);

      setCourseForm({
        title: "",
        description: "",
        price: "",
        category: "",
        instructor: "",
        durationHours: "",
        thumbnailUrl: "",
        status: "DRAFT",
      });

      setShowCourseForm(false);

      toast.success(
        "Course created!"
      );

    } catch {

      toast.error(
        "Failed to create course"
      );
    }
  };

  // Reply Ticket
  const replyTicket = async (
    ticketId,
    status
  ) => {

    const reply =
      replyForms[ticketId] || "";

    try {

      const { data } =
        await api.patch(
          `/admin/tickets/${ticketId}`,
          {
            status,
            adminReply: reply,
          }
        );

      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === ticketId
            ? data
            : ticket
        )
      );

      setReplyForms((prev) => ({
        ...prev,
        [ticketId]: "",
      }));

      toast.success(
        "Ticket updated"
      );

    } catch {

      toast.error(
        "Failed to update ticket"
      );
    }
  };

  // Tab Style
  const tabStyle = (active) => ({
    padding: "0.625rem 1.25rem",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    background: active
      ? "white"
      : "transparent",
    color: active
      ? "#667eea"
      : "#64748b",
    borderRadius: "8px",
    fontSize: "0.85rem",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  });

  // Status Badge
  const statusBadge = (
    status,
    colors
  ) => (

    <span
      style={{
        background:
          (colors[status] ||
            "#94a3b8") + "20",

        color:
          colors[status] ||
          "#94a3b8",

        borderRadius: "100px",

        padding: "0.2rem 0.6rem",

        fontSize: "0.7rem",

        fontWeight: 700,
      }}
    >

      {status}

    </span>
  );




const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 25000 },
  { month: "Apr", revenue: 32000 },
  { month: "May", revenue: 45000 },
  { month: "Jun", revenue: 52000 },
];

const studentGrowthData = [
  { month: "Jan", students: 20 },
  { month: "Feb", students: 35 },
  { month: "Mar", students: 60 },
  { month: "Apr", students: 90 },
  { month: "May", students: 120 },
  { month: "Jun", students: 150 },
];





  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#18181b" ,
      }}
    >

      {/* Header */}
      <div
        style={{

          background:
            "linear-gradient(135deg, #1e293b 0%, #334155 100%)",

          padding: "2.5rem 2rem",

          color: "white",
        }}
      >

        <div
          style={{

            maxWidth: "1200px",

            margin: "0 auto",
          }}
        >

          <h1
            style={{

              fontSize: "1.75rem",

              fontWeight: 900,

              marginBottom: "0.5rem",
            }}
          >

            Admin Dashboard

          </h1>

          <p
            style={{
              opacity: 0.75,
              marginBottom: "2rem",
            }}
          >

            Manage your EduSpark
            platform

          </p>

          {/* Stats */}
          <div
            style={{

              display: "grid",

              gridTemplateColumns:
       "repeat(auto-fit,minmax(220px,1fr))",

              gap: "1rem",
            }}
          >

            {[
  {
    label: "Students",
    value: stats.totalStudents || 0,
    icon: <Users size={20} />,
  },

  {
    label: "Active Students",
    value: stats.activeStudents || 0,
    icon: <Check size={20} />,
  },

  {
    label: "Courses",
    value: stats.totalCourses || 0,
    icon: <BookOpen size={20} />,
  },

  {
    label: "Enrollments",
    value: stats.totalEnrollments || 0,
    icon: <ShoppingBag size={20} />,
  },

  {
    label: "Open Tickets",
    value: stats.openTickets || 0,
    icon: <MessageSquare size={20} />,
  },

  {
    label: "Resolved",
    value: stats.resolvedTickets || 0,
    icon: <Check size={20} />,
  },

  {
    label: "Certificates",
    value: stats.certificatesIssued || 0,
    icon: <Check size={20} />,
  },

  {
    label: "Revenue",
    value: `₹${stats.totalRevenue || 0}`,
    icon: <ShoppingBag size={20} />,
  },
].map((item, index) => (

              <div
                key={index}
                style={{

                  background:
                    "rgba(255,255,255,0.1)",

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

                    gap: "0.4rem",

                    opacity: 0.8,

                    marginBottom:
                      "0.5rem",

                    fontSize:
                      "0.85rem",
                  }}
                >

                  {item.icon}

                  {item.label}

                </div>

                <div
                  style={{

                    fontSize: "2rem",

                    fontWeight: 900,
                  }}
                >

                  {item.value}

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Content */}
      <div
        style={{

          maxWidth: "1200px",

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

            flexWrap: "wrap",
          }}
        >

          <button
            style={tabStyle(
              tab === "overview"
            )}
            onClick={() =>
              setTab("overview")
            }
          >

            Overview

          </button>

          <button
            style={tabStyle(
              tab === "students"
            )}
            onClick={() =>
              setTab("students")
            }
          >

            <Users size={15} />

            Students

          </button>

          <button
            style={tabStyle(
              tab === "courses"
            )}
            onClick={() =>
              setTab("courses")
            }
          >

            <BookOpen size={15} />

            Courses

          </button>

          <button
            style={tabStyle(
              tab === "tickets"
            )}
            onClick={() =>
              setTab("tickets")
            }
          >

            <MessageSquare
              size={15}
            />

            Tickets

          </button>

          <button
            style={tabStyle(
              tab ===
                "enrollments"
            )}
            onClick={() =>
              setTab(
                "enrollments"
              )
            }
          >

            <ShoppingBag
              size={15}
            />

            Enrollments

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

            {/* OVERVIEW */}
            {tab === "overview" && (

<div>

  <h2
    style={{
      fontWeight: 800,
      fontSize: "28px",
      marginBottom: "2rem",
    }}
  >
    Platform Analytics
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(500px,1fr))",
      gap: "1.5rem",
    }}
  >

    {/* Revenue Chart */}

    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
          fontWeight: 700,
        }}
      >
        Revenue Growth
      </h3>

      <div style={{ height: 320 }}>

        <ResponsiveContainer>

          <LineChart data={revenueData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#667eea"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

    {/* Student Growth */}

    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
          fontWeight: 700,
        }}
      >
        Student Growth
      </h3>

      <div style={{ height: 320 }}>

        <ResponsiveContainer>

          <BarChart data={studentGrowthData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="students"
              fill="#10b981"
              radius={[10,10,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  </div>

</div>

)}

            {/* STUDENTS */}
{tab === "students" && (
  <div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Students
      </h2>

      <button
        onClick={() =>
          setShowStudentModal(true)
        }
        style={{
          background: "#facc15",
          color: "#000",
          border: "none",
          padding: "12px 20px",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        + Add Student
      </button>


      {showEditModal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        background: "#18181b",
        padding: "30px",
        borderRadius: "20px",
        width: "450px",
      }}
    >
      <h2 style={{ color: "white" }}>
        Edit Student
      </h2>

      <input
  placeholder="First Name"
  value={editForm.firstName}
  onChange={(e) =>
    setEditForm({
      ...editForm,
      firstName: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
  }}
/>

<input
  placeholder="Last Name"
  value={editForm.lastName}
  onChange={(e) =>
    setEditForm({
      ...editForm,
      lastName: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
  }}
/>

<input
  placeholder="Email"
  value={editForm.email}
  onChange={(e) =>
    setEditForm({
      ...editForm,
      email: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
  }}
/>

<input
  placeholder="Phone"
  value={editForm.phone}
  onChange={(e) =>
    setEditForm({
      ...editForm,
      phone: e.target.value,
    })
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
  }}
/>

<button
    onClick={updateStudent}
  >
    Save Changes
  </button>

  <button
    onClick={() =>
      setShowEditModal(false)
    }
  ></button>

      <button
        onClick={() =>
          setShowEditModal(false)
        }
      >
        Cancel
      </button>
    </div>
  </div>
)}


    </div>




    <input
  placeholder="Search student..."
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
  style={{
    width: "100%",
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "12px",
    border: "1px solid #3f3f46",
    background: "#27272a",
    color: "white",
  }}
/>



    {students
  .filter((student) =>
    `${student.firstName} ${student.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .map((student) => (
  <div
    key={student.id}
    style={{
  background: "#27272a",
  color: "white",
  borderRadius: "16px",
  padding: "20px",
  marginBottom: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "0.3s",
  boxShadow:
    "0 4px 20px rgba(0,0,0,0.2)",
}}
  >
    <div>
      <h4>
        {student.firstName} {student.lastName}
      </h4>

      <p>{student.email}</p>
    </div>

    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <button
        onClick={() => {
          setEditingStudent(student);

          setEditForm({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            phone: student.phone || "",
          });

          setShowEditModal(true);
        }}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>

      <button
        onClick={() =>
          deleteStudent(student.id)
        }
        style={{
          background: "#dc2626",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  </div>
))}

  </div>
)}



{tab === "courses" && (
  <AdminCourses
    courses={courses}
    setCourses={setCourses}
  />
)}

{tab === "tickets" && (
  <AdminTickets
    tickets={tickets}
    setTickets={setTickets}
  />
)}

{tab === "enrollments" && (
  <AdminEnrollments
    enrollments={enrollments}
  />
)}

{/* COURSES */}
{/* old courses code */}
{/* COURSES */}
{/* {tab === "courses" && (
  <div>

    <h2
      style={{
        color: "white",
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "20px",
      }}
    >
      Courses
    </h2>

    <button
      onClick={() =>
        setShowCourseForm(true)
      }
      style={{
        background: "#facc15",
        color: "#000",
        border: "none",
        padding: "12px 20px",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: "bold",
        marginBottom: "20px",
      }}
    >
      + Add Course
    </button>

    {courses.map((course) => (
      <div
        key={course.id}
        style={{
          background: "#27272a",
          color: "white",
          padding: "16px",
          borderRadius: "12px",
          marginBottom: "12px",
        }}
      >
        <h3>{course.title}</h3>

        <p>
          Instructor:
          {course.instructor}
        </p>

        <p>
          Price:
          ₹{course.price}
        </p>

      </div>
    ))}

  </div>
)} */}






          </>
        )}

            </div>

      {showStudentModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#18181b",
              padding: "30px",
              borderRadius: "20px",
              width: "450px",
            }}
          >
            <h2 style={{ color: "white" }}>
              Add Student
            </h2>

            <input
              placeholder="First Name"
              value={studentForm.firstName}
              onChange={(e) =>
                setStudentForm({
                  ...studentForm,
                  firstName: e.target.value,
                })
              }
            />

            <input
              placeholder="Last Name"
              value={studentForm.lastName}
              onChange={(e) =>
                setStudentForm({
                  ...studentForm,
                  lastName: e.target.value,
                })
              }
            />

            <input
              placeholder="Email"
              value={studentForm.email}
              onChange={(e) =>
                setStudentForm({
                  ...studentForm,
                  email: e.target.value,
                })
              }
            />

            <input
              placeholder="Phone"
              value={studentForm.phone}
              onChange={(e) =>
                setStudentForm({
                  ...studentForm,
                  phone: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={studentForm.password}
              onChange={(e) =>
                setStudentForm({
                  ...studentForm,
                  password: e.target.value,
                })
              }
            />

            <div
  style={{
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  }}
>
  <button
    onClick={createStudent}
    style={{
      flex: 1,
      background: "#facc15",
      color: "#000",
      border: "none",
      padding: "14px",
      borderRadius: "10px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Create Student
  </button>

  <button
    onClick={() =>
      setShowStudentModal(false)
    }
    style={{
      flex: 1,
      background: "#3f3f46",
      color: "white",
      border: "none",
      padding: "14px",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
    Cancel
  </button>
</div>
          </div>
        </div>
      )}

    </div>
  );
}


// {tab === "courses" && (
//   <AdminCourses />
// )}

// {/* COURSES */}
// {tab === "courses" && (
//   <div>

//     <h2
//       style={{
//         color: "white",
//         fontSize: "28px",
//         fontWeight: "bold",
//         marginBottom: "20px",
//       }}
//     >
//       Courses
//     </h2>

//     <button
//       onClick={() =>
//         setShowCourseForm(true)
//       }
//       style={{
//         background: "#facc15",
//         color: "#000",
//         border: "none",
//         padding: "12px 20px",
//         borderRadius: "12px",
//         cursor: "pointer",
//         fontWeight: "bold",
//         marginBottom: "20px",
//       }}
//     >
//       + Add Course
//     </button>

//     {courses.map((course) => (
//       <div
//         key={course.id}
//         style={{
//           background: "#27272a",
//           color: "white",
//           padding: "16px",
//           borderRadius: "12px",
//           marginBottom: "12px",
//         }}
//       >
//         <h3>{course.title}</h3>

//         <p>
//           Instructor:
//           {course.instructor}
//         </p>

//         <p>
//           Price:
//           ₹{course.price}
//         </p>

//       </div>
//     ))}

//   </div>
// )}
