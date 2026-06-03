import { useEffect, useState } from "react";
import api from "../api/client";
import toast from "react-hot-toast";

export default function AdminCourses({
  courses,
  setCourses,
}) {

  const [loading, setLoading] =
    useState(false);

  const [showCourseModal, setShowCourseModal] =
    useState(false);

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

    const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #3f3f46",
  background: "#27272a",
  color: "white",
  fontSize: "15px",
  marginBottom: "12px",
};



const [showLectureModal, setShowLectureModal] =
  useState(false);

const [selectedCourse, setSelectedCourse] =
  useState(null);

const [lectureForm, setLectureForm] =
  useState({
    title: "",
    description: "",
    videoUrl: "",
    durationMinutes: "",
    orderIndex: "",
    freePreview: true,
    type: "VIDEO",
  });




const [showEditModal, setShowEditModal] =
  useState(false);

const [editingCourse, setEditingCourse] =
  useState(null);

  // Load Courses
  // const loadCourses = async () => {
  //   try {
  //     const { data } = await api.get(
  //       "/admin/courses"
  //     );

  //     setCourses(data);
  //   } catch (error) {
  //     toast.error(
  //       "Failed to load courses"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadCourses();
  // }, []);

  // Create Course
  const createCourse = async () => {
    try {
      const { data } = await api.post(
        "/admin/courses",
        {
          ...courseForm,
          price: Number(
            courseForm.price
          ),
          durationHours:
            Number(
              courseForm.durationHours
            ) || 0,
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

      setShowCourseModal(false);

      toast.success(
        "Course created successfully"
      );
    } catch (error) {
      console.error(error);
      toast.error(
        "Failed to create course"
      );
    }
  };


  const updateCourse = async () => {

  try {

    const { data } =
      await api.put(
        `/admin/courses/${editingCourse.id}`,
        {
          ...courseForm,
          price:
            Number(
              courseForm.price
            ),
          durationHours:
            Number(
              courseForm.durationHours
            ),
        }
      );

    setCourses((prev) =>
      prev.map((course) =>
        course.id === editingCourse.id
          ? data
          : course
      )
    );

    setShowEditModal(false);

    toast.success(
      "Course updated"
    );

  } catch (error) {

    console.error(error);

    toast.error(
      "Failed to update course"
    );
  }
};



const createLecture = async () => {

  try {

    await api.post(
      "/admin/lectures",
      {
        courseId:
          selectedCourse.id,

        ...lectureForm,

        durationMinutes:
          Number(
            lectureForm.durationMinutes
          ),

        orderIndex:
          Number(
            lectureForm.orderIndex
          ),
      }
    );

    toast.success(
      "Lecture Added Successfully"
    );

    setShowLectureModal(false);

  } catch (error) {

    console.error(error);

    toast.error(
      "Failed to add lecture"
    );
  }
};





  // Delete Course
  const deleteCourse = async (id) => {
    if (
      !window.confirm(
        "Delete this course?"
      )
    )
      return;

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
    } catch (error) {
      toast.error(
        "Failed to delete course"
      );
    }
  };

  if (loading) {
    return (
      <h2 style={{ color: "white" }}>
        Loading Courses...
      </h2>
    );
  }

  return (
    <div>
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Courses
        </h2>

        <button
          onClick={() =>
            setShowCourseModal(true)
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
          + Add Course
        </button>
      </div>

      {/* Course List */}

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            background: "#27272a",
            color: "white",
            padding: "20px",
            borderRadius: "14px",
            marginBottom: "15px",
          }}
        >
          <h3>{course.title}</h3>

          <p>
            Instructor:
            {course.instructor}
          </p>

          <p>
            Price: ₹{course.price}
          </p>

          <p>
            Category:
            {course.category}
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <button
  onClick={() => {

    setEditingCourse(course);

    setCourseForm({
      title: course.title || "",
      description:
        course.description || "",
      price: course.price || "",
      category:
        course.category || "",
      instructor:
        course.instructor || "",
      durationHours:
        course.durationHours || "",
      thumbnailUrl:
        course.thumbnailUrl || "",
      status:
        course.status || "DRAFT",
    });

    setShowEditModal(true);
  }}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Edit
</button>


<button
  onClick={() => {

    setSelectedCourse(
      course
    );

    setShowLectureModal(
      true
    );

  }}
  style={{
    background: "#16a34a",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Add Lecture
</button>

            <button
              onClick={() =>
                deleteCourse(
                  course.id
                )
              }
              style={{
                background:
                  "#dc2626",
                color: "white",
                border: "none",
                padding:
                  "8px 14px",
                borderRadius:
                  "8px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}


{showCourseModal && (
  <div
    style={{
      position: "fixed",
      inset: 0,
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
        width: "650px",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Create Course
      </h2>

      <input
        placeholder="Course Title"
        value={courseForm.title}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            title: e.target.value,
          })
        }
        style={inputStyle}
      />

      <textarea
        rows="4"
        placeholder="Course Description"
        value={courseForm.description}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            description: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="Instructor Name"
        value={courseForm.instructor}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            instructor: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="Category"
        value={courseForm.category}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            category: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Price ₹"
        value={courseForm.price}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            price: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Duration (Hours)"
        value={courseForm.durationHours}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            durationHours: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="Thumbnail URL"
        value={courseForm.thumbnailUrl}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            thumbnailUrl: e.target.value,
          })
        }
        style={inputStyle}
      />

      {courseForm.thumbnailUrl && (
        <img
          src={courseForm.thumbnailUrl}
          alt="Preview"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "15px",
          }}
        />
      )}

      

      <select
        value={courseForm.status}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            status: e.target.value,
          })
        }
        style={inputStyle}
      >
        <option value="DRAFT">
          Draft
        </option>

        <option value="PUBLISHED">
          Published
        </option>

        <option value="ARCHIVED">
          Archived
        </option>
      </select>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={createCourse}
          style={{
            flex: 1,
            background: "#facc15",
            color: "#000",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create Course
        </button>

        <button
          onClick={() =>
            setShowCourseModal(false)
          }
          style={{
            flex: 1,
            background: "#27272a",
            color: "white",
            border: "1px solid #3f3f46",
            padding: "14px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}



{showEditModal && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background:
        "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        background: "#18181b",
        width: "650px",
        padding: "30px",
        borderRadius: "20px",
      }}
    >

      <h2
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        Edit Course
      </h2>

      {/* Same fields as Create Modal */}

      <input
        placeholder="Course Title"
        value={courseForm.title}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            title: e.target.value,
          })
        }
        style={inputStyle}
      />

      <textarea
        rows="4"
        placeholder="Description"
        value={courseForm.description}
        onChange={(e) =>
          setCourseForm({
            ...courseForm,
            description:
              e.target.value,
          })
        }
        style={inputStyle}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={updateCourse}
          style={{
            flex: 1,
            background:
              "#2563eb",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
          }}
        >
          Save Changes
        </button>

        <button
          onClick={() =>
            setShowEditModal(
              false
            )
          }
          style={{
            flex: 1,
            background:
              "#27272a",
            color: "white",
            border:
              "1px solid #3f3f46",
            padding: "14px",
            borderRadius:
              "12px",
          }}
        >
          Cancel
        </button>
      </div>

    </div>

</div>
)}



{showLectureModal && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background:
        "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        background: "#18181b",
        width: "600px",
        padding: "30px",
        borderRadius: "20px",
      }}
    >

      <h2
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        Add Lecture
      </h2>

      <input
        placeholder="Lecture Title"
        value={lectureForm.title}
        onChange={(e) =>
          setLectureForm({
            ...lectureForm,
            title: e.target.value,
          })
        }
        style={inputStyle}
      />

      <textarea
        placeholder="Description"
        value={
          lectureForm.description
        }
        onChange={(e) =>
          setLectureForm({
            ...lectureForm,
            description:
              e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="Youtube URL"
        value={
          lectureForm.videoUrl
        }
        onChange={(e) =>
          setLectureForm({
            ...lectureForm,
            videoUrl:
              e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Duration"
        value={
          lectureForm.durationMinutes
        }
        onChange={(e) =>
          setLectureForm({
            ...lectureForm,
            durationMinutes:
              e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Order"
        value={
          lectureForm.orderIndex
        }
        onChange={(e) =>
          setLectureForm({
            ...lectureForm,
            orderIndex:
              e.target.value,
          })
        }
        style={inputStyle}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={createLecture}
          style={{
            flex: 1,
            background:
              "#16a34a",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
          }}
        >
          Save Lecture
        </button>

        <button
          onClick={() =>
            setShowLectureModal(
              false
            )
          }
          style={{
            flex: 1,
            background:
              "#27272a",
            color: "white",
            border:
              "1px solid #3f3f46",
            padding: "14px",
            borderRadius:
              "12px",
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
