import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/client";
import toast from "react-hot-toast";

export default function FinalQuizPage() {

  const { courseId } = useParams();

  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {

    api
      .get(`/student/courses/${courseId}/quizzes`)
      .then((res) => {
        setQuizzes(res.data);
      })
      .catch(() => {
        toast.error("Failed to load quiz");
      });

  }, [courseId]);

  const submitQuiz = async () => {

    let score = 0;

    for (const quiz of quizzes) {

      const selectedAnswer =
        answers[quiz.id];

      const result =
        await api.post(
          "/student/quizzes/submit",
          {
            quizId: quiz.id,
            selectedAnswer,
          }
        );

      if (result.data.correct) {
        score++;
      }
    }

    toast.success(
      `Quiz Submitted! Score: ${score}/${quizzes.length}`
    );
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>Final Quiz</h1>

      {quizzes.map((quiz) => (

        <div
          key={quiz.id}
          style={{
            background: "#fff",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>{quiz.question}</h3>

          {[
            quiz.optionA,
            quiz.optionB,
            quiz.optionC,
            quiz.optionD,
          ].map((option) => (

            <label
              key={option}
              style={{
                display: "block",
                marginBottom: "10px",
              }}
            >
              <input
                type="radio"
                name={`quiz-${quiz.id}`}
                value={option}
                onChange={() =>
                  setAnswers({
                    ...answers,
                    [quiz.id]: option,
                  })
                }
              />

              {" "}
              {option}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={submitQuiz}
        style={{
          background: "#667eea",
          color: "#fff",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Submit Quiz
      </button>
    </div>
  );
}