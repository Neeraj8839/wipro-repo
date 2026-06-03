import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Lock,
  BookOpen,
} from "lucide-react";

import toast from "react-hot-toast";

import api from "../api/client";

export default function LecturePlayerPage() {

  const { courseId, lectureId } =
    useParams();

  const navigate = useNavigate();

  const [lectures, setLectures] =
    useState([]);

  const [current, setCurrent] =
    useState(null);

  const [quizzes, setQuizzes] =
    useState([]);

  const [answers, setAnswers] =
    useState({});

  const [results, setResults] =
    useState({});

  const [completing, setCompleting] =
    useState(false);

  // Load Lectures
  useEffect(() => {

    api.get(
      `/student/courses/${courseId}/lectures`
    )

    //   .then((response) => {

    //     setLectures(response.data);

    //     const found =
    //       response.data.find(
    //         (lecture) =>
    //           lecture.id === Number(lectureId)
    //       ) || response.data[0];

    //     setCurrent(found);
    //   })


/////////////////////

    .then((response) => {

  console.log("LECTURES =", response.data);
  console.log("COURSE ID =", courseId);
  console.log("LECTURE ID =", lectureId);

  setLectures(response.data);

  if (!response.data || response.data.length === 0) {
    toast.error("No lectures found");
    return;
  }

  const found =
    response.data.find(
      (lecture) =>
        lecture.id === Number(lectureId)
    );

  console.log("FOUND LECTURE =", found);

  setCurrent(found || response.data[0]);
})


////////////////////



      .catch(() =>
        navigate("/dashboard")
      );

  }, [courseId, lectureId]);

  // Load Quizzes
// Load Quizzes
useEffect(() => {

  if (current?.id && current?.completed) {

    api.get(
      `/student/lectures/${current.id}/quizzes`
    )
      .then((response) =>
        setQuizzes(response.data)
      )
      .catch(() =>
        setQuizzes([])
      );

  } else {

    setQuizzes([]);
  }

  setAnswers({});
  setResults({});

}, [current]);

  // Navigate Lecture
  const goToLecture = (lecture) => {

    if (
      !lecture.unlocked &&
      !lecture.freePreview
    ) {

      toast.error(
        "Complete previous lectures first"
      );

      return;
    }

    navigate(
      `/learn/${courseId}/${lecture.id}`
    );

    setCurrent(lecture);
  };

  // Mark Complete
  const markComplete = async () => {

    if (!current || completing) return;

    setCompleting(true);

    try {

      await api.post(
        `/student/lectures/${current.id}/complete`
      );

      toast.success(
        "Lecture marked complete!"
      );

      const response = await api.get(
        `/student/courses/${courseId}/lectures`
      );

      setLectures(response.data);

      setCurrent(

        response.data.find(
          (lecture) =>
            lecture.id === current.id
        ) || current
      );

    } catch {

      toast.error(
        "Could not mark complete"
      );

    } finally {

      setCompleting(false);
    }
  };

  // Submit Quiz
  const submitQuiz = async (quizId) => {

    const selected =
      answers[quizId];

    if (!selected) {

      toast.error(
        "Select an answer first"
      );

      return;
    }

    try {

      const response =
        await api.post(
          "/student/quizzes/submit",
          {
            quizId,
            selectedAnswer: selected,
          }
        );

      setResults((previous) => ({

        ...previous,

        [quizId]: {

          correct:
            response.data.correct,

          correctAnswer:
            response.data.correctAnswer,
        },
      }));

      if (response.data.correct) {

        toast.success("Correct!");

      } else {

        toast.error(
          `Wrong! Answer: ${response.data.correctAnswer}`
        );
      }

    } catch {

      toast.error(
        "Failed to submit"
      );
    }
  };

  // Current Index
  const currentIndex =
    lectures.findIndex(
      (lecture) =>
        lecture.id === current?.id
    );

  const prevLecture =
    currentIndex > 0
      ? lectures[currentIndex - 1]
      : null;

  const nextLecture =
    currentIndex < lectures.length - 1
      ? lectures[currentIndex + 1]
      : null;


      const isLastLecture =
        currentIndex === lectures.length - 1;

     const canTakeFinalQuiz =
          isLastLecture &&
           current?.completed;

  // Loading
//   if (!current) {

//     return (

//       <div
//         style={{

//           textAlign: "center",

//           padding: "4rem",

//           color: "#64748b",
//         }}
//       >

//         Loading...

//       </div>
//     );
//   }




if (!current) {

  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem",
        color: "#64748b",
      }}
    >
      <h2>No Lecture Loaded</h2>

      <p>
        Check browser console (F12)
      </p>
    </div>
  );
}





  return (

    <div
      style={{

        display: "flex",

        height: "calc(100vh - 64px)",

        overflow: "hidden",
      }}
    >

      {/* Sidebar */}
      <div
        style={{

          width: "300px",

          background: "white",

          borderRight:
            "1px solid #e2e8f0",

          overflowY: "auto",

          flexShrink: 0,
        }}
      >

        {/* Header */}
        <div
          style={{

            padding: "1rem",

            borderBottom:
              "1px solid #e2e8f0",

            background: "#f8fafc",
          }}
        >

          <h3
            style={{

              margin: 0,

              fontSize: "0.9rem",

              fontWeight: 700,

              color: "#1e293b",
            }}
          >

            Course Content

          </h3>

        </div>

        {/* Lecture List */}
        {lectures.map(
          (lecture, index) => (

            <div
              key={lecture.id}

              onClick={() =>
                goToLecture(lecture)
              }

              style={{

                padding:
                  "0.875rem 1rem",

                cursor:
                  lecture.unlocked ||
                  lecture.freePreview
                    ? "pointer"
                    : "not-allowed",

                background:
                  current.id ===
                  lecture.id
                    ? "#f0f4ff"
                    : "transparent",

                borderLeft:
                  current.id ===
                  lecture.id
                    ? "3px solid #667eea"
                    : "3px solid transparent",

                display: "flex",

                alignItems: "center",

                gap: "0.75rem",

                borderBottom:
                  "1px solid #f1f5f9",

                opacity:
                  lecture.unlocked ||
                  lecture.freePreview
                    ? 1
                    : 0.5,
              }}
            >

              {/* Icon */}
              <div
                style={{
                  flexShrink: 0,
                }}
              >

                {lecture.completed ? (

                  <CheckCircle
                    size={18}
                    color="#10b981"
                  />

                ) : !lecture.unlocked &&
                  !lecture.freePreview ? (

                  <Lock
                    size={18}
                    color="#94a3b8"
                  />

                ) : (

                  <div
                    style={{

                      width: "18px",

                      height: "18px",

                      borderRadius: "50%",

                      border:
                        "2px solid #667eea",

                      display: "flex",

                      alignItems: "center",

                      justifyContent:
                        "center",

                      fontSize: "10px",

                      color: "#667eea",

                      fontWeight: 700,
                    }}
                  >

                    {index + 1}

                  </div>
                )}

              </div>

              {/* Content */}
              <div
                style={{

                  flex: 1,

                  minWidth: 0,
                }}
              >

                <div
                  style={{

                    fontSize: "0.825rem",

                    fontWeight: 600,

                    color: "#1e293b",

                    whiteSpace: "nowrap",

                    overflow: "hidden",

                    textOverflow:
                      "ellipsis",
                  }}
                >

                  {lecture.title}

                </div>

                {lecture.durationMinutes && (

                  <div
                    style={{

                      fontSize: "0.75rem",

                      color: "#94a3b8",
                    }}
                  >

                    {lecture.durationMinutes}
                    {" "}
                    min

                  </div>
                )}

              </div>

            </div>
          )
        )}

      </div>

      {/* Main */}
      <div
        style={{

          flex: 1,

          overflowY: "auto",

          background: "#f8fafc",
        }}
      >

        {/* Locked */}
        {!current.unlocked &&
        !current.freePreview ? (

          <div
            style={{

              display: "flex",

              flexDirection: "column",

              alignItems: "center",

              justifyContent:
                "center",

              height: "100%",

              color: "#64748b",
            }}
          >

            <Lock
              size={64}
              color="#cbd5e1"
              style={{
                marginBottom: "1rem",
              }}
            />

            <h2
              style={{
                color: "#1e293b",
              }}
            >

              Lecture Locked

            </h2>

            <p>
              Complete the previous
              lecture to unlock this
              one.
            </p>

          </div>

        ) : (

          <div
            style={{

              maxWidth: "860px",

              margin: "0 auto",

              padding: "2rem",
            }}
          >

            {/* Title */}
            <h1
              style={{

                fontSize: "1.5rem",

                fontWeight: 800,

                color: "#1e293b",

                marginBottom: "1rem",
              }}
            >

              {current.title}

            </h1>

            {/* Video */}
            {current.videoUrl && (

              <div
                style={{

                  borderRadius: "12px",

                  overflow: "hidden",

                  marginBottom: "1.5rem",

                  boxShadow:
                    "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >

                <iframe
                  src={current.videoUrl}
                  title={current.title}
                  style={{

                    width: "100%",

                    aspectRatio: "16/9",

                    border: "none",
                  }}
                  allowFullScreen
                />

              </div>
            )}

            {/* Description */}
            {current.description && (

              <div
                style={{

                  background: "white",

                  borderRadius: "12px",

                  padding: "1.5rem",

                  marginBottom: "1.5rem",

                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >

                <h3
                  style={{

                    fontSize: "1rem",

                    fontWeight: 700,

                    color: "#1e293b",

                    marginBottom: "0.75rem",
                  }}
                >

                  About this lecture

                </h3>

                <p
                  style={{

                    color: "#64748b",

                    lineHeight: 1.7,

                    margin: 0,
                  }}
                >

                  {current.description}

                </p>

              </div>
            )}

            {/* Quizzes */}
            {quizzes.length > 0 && (

              <div
                style={{

                  background: "white",

                  borderRadius: "12px",

                  padding: "1.5rem",

                  marginBottom: "1.5rem",

                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >

                <h3
                  style={{

                    fontSize: "1rem",

                    fontWeight: 700,

                    color: "#1e293b",

                    marginBottom: "1.25rem",

                    display: "flex",

                    alignItems: "center",

                    gap: "0.5rem",
                  }}
                >

                  <BookOpen
                    size={18}
                    color="#667eea"
                  />

                  Quiz Time

                </h3>

                {quizzes.map((quiz) => (

                  <div
                    key={quiz.id}
                    style={{

                      marginBottom: "2rem",

                      paddingBottom:
                        "2rem",

                      borderBottom:
                        "1px solid #f1f5f9",
                    }}
                  >

                    <p
                      style={{

                        fontWeight: 600,

                        color: "#1e293b",

                        marginBottom: "1rem",
                      }}
                    >

                      {quiz.question}

                    </p>

                    {["A", "B", "C", "D"].map(
                      (option) => {

                        const value =
                          quiz[
                            `option${option}`
                          ];

                        const selected =
                          answers[
                            quiz.id
                          ] === option;

                        const result =
                          results[
                            quiz.id
                          ];

                        const isCorrect =
                          result?.correctAnswer ===
                          option;

                        const isWrong =
                          selected &&
                          result &&
                          !result.correct;

                        return (

                          <div
                            key={option}

                            onClick={() =>

                              !result &&

                              setAnswers(
                                (
                                  previous
                                ) => ({

                                  ...previous,

                                  [quiz.id]:
                                    option,
                                })
                              )
                            }

                            style={{

                              padding:
                                "0.75rem 1rem",

                              borderRadius:
                                "8px",

                              marginBottom:
                                "0.5rem",

                              cursor:
                                result
                                  ? "default"
                                  : "pointer",

                              border:
                                `2px solid ${
                                  result
                                    ? isCorrect
                                      ? "#10b981"
                                      : isWrong
                                      ? "#ef4444"
                                      : "#e2e8f0"
                                    : selected
                                    ? "#667eea"
                                    : "#e2e8f0"
                                }`,

                              background:
                                result
                                  ? isCorrect
                                    ? "#dcfce7"
                                    : isWrong
                                    ? "#fee2e2"
                                    : "white"
                                  : selected
                                  ? "#f0f4ff"
                                  : "white",

                              display: "flex",

                              alignItems:
                                "center",

                              gap: "0.75rem",

                              transition:
                                "all 0.15s",
                            }}
                          >

                            <span
                              style={{

                                width: "24px",

                                height: "24px",

                                borderRadius:
                                  "50%",

                                background:
                                  selected
                                    ? "#667eea"
                                    : "#f1f5f9",

                                color:
                                  selected
                                    ? "white"
                                    : "#64748b",

                                display: "flex",

                                alignItems:
                                  "center",

                                justifyContent:
                                  "center",

                                fontWeight: 700,

                                fontSize:
                                  "0.8rem",

                                flexShrink: 0,
                              }}
                            >

                              {option}

                            </span>

                            <span
                              style={{

                                color:
                                  "#1e293b",

                                fontSize:
                                  "0.9rem",
                              }}
                            >

                              {value}

                            </span>

                            {result &&
                              isCorrect && (

                              <CheckCircle
                                size={16}
                                color="#10b981"
                                style={{
                                  marginLeft:
                                    "auto",
                                }}
                              />
                            )}

                          </div>
                        );
                      }
                    )}

                    {!results[quiz.id] && (

                      <button
                        onClick={() =>
                          submitQuiz(
                            quiz.id
                          )
                        }
                        style={{

                          marginTop:
                            "0.75rem",

                          background:
                            "#667eea",

                          color: "white",

                          border: "none",

                          borderRadius:
                            "8px",

                          padding:
                            "0.625rem 1.5rem",

                          fontWeight: 700,

                          cursor:
                            "pointer",
                        }}
                      >

                        Submit Answer

                      </button>
                    )}

                  </div>
                ))}

              </div>
            )}



            {/* Final Quiz Button */}

{canTakeFinalQuiz && (
  <div
    style={{
      marginBottom: "2rem",
      textAlign: "center",
    }}
  >
    <button
      onClick={() =>
        navigate(
          `/courses/${courseId}/final-quiz`
        )
      }
      style={{
        background:
          "linear-gradient(135deg,#f59e0b,#ef4444)",
        color: "white",
        border: "none",
        padding: "16px 32px",
        borderRadius: "12px",
        fontWeight: "700",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Take Final Course Quiz
    </button>
  </div>
)}




            {/* Navigation */}
            <div
              style={{

                display: "flex",

                justifyContent:
                  "space-between",

                alignItems: "center",

                gap: "1rem",

                flexWrap: "wrap",
              }}
            >

              {/* Previous */}
              <button
                onClick={() =>
                  prevLecture &&
                  goToLecture(
                    prevLecture
                  )
                }

                disabled={!prevLecture}

                style={{

                  display: "flex",

                  alignItems: "center",

                  gap: "0.5rem",

                  background:
                    prevLecture
                      ? "white"
                      : "#f1f5f9",

                  color:
                    prevLecture
                      ? "#1e293b"
                      : "#94a3b8",

                  border:
                    "2px solid #e2e8f0",

                  borderRadius:
                    "10px",

                  padding:
                    "0.75rem 1.25rem",

                  cursor:
                    prevLecture
                      ? "pointer"
                      : "not-allowed",

                  fontWeight: 600,
                }}
              >

                <ChevronLeft size={18} />

                Previous

              </button>

              {/* Complete */}
              {!current.completed && (

                <button
                  onClick={markComplete}

                  disabled={completing}

                  style={{

                    display: "flex",

                    alignItems: "center",

                    gap: "0.5rem",

                    background:
                      "linear-gradient(135deg, #10b981, #059669)",

                    color: "white",

                    border: "none",

                    borderRadius:
                      "10px",

                    padding:
                      "0.75rem 1.5rem",

                    cursor:
                      completing
                        ? "not-allowed"
                        : "pointer",

                    fontWeight: 700,

                    opacity:
                      completing
                        ? 0.7
                        : 1,
                  }}
                >

                  <CheckCircle size={18} />

                  {completing
                    ? "Marking..."
                    : "Mark Complete"}

                </button>
              )}

              {/* Next */}
              <button
                onClick={() =>
                  nextLecture &&
                  goToLecture(
                    nextLecture
                  )
                }

                disabled={!nextLecture}

                style={{

                  display: "flex",

                  alignItems: "center",

                  gap: "0.5rem",

                  background:
                    nextLecture
                      ? "linear-gradient(135deg, #667eea, #764ba2)"
                      : "#f1f5f9",

                  color:
                    nextLecture
                      ? "white"
                      : "#94a3b8",

                  border: "none",

                  borderRadius:
                    "10px",

                  padding:
                    "0.75rem 1.25rem",

                  cursor:
                    nextLecture
                      ? "pointer"
                      : "not-allowed",

                  fontWeight: 600,
                }}
              >

                Next

                <ChevronRight size={18} />

              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}