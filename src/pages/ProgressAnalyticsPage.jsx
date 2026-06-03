import { useEffect, useState } from "react";
import api from "../api/client";

import {
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle,
  Clock,
  Brain,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function ProgressAnalyticsPage() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const res = await api.get("/student/progress");
      setAnalytics(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!analytics) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl">
        Loading Analytics...
      </div>
    );
  }

  const accuracy =
    analytics.totalQuizAttempts > 0
      ? (
          (analytics.correctQuizAnswers /
            analytics.totalQuizAttempts) *
          100
        ).toFixed(1)
      : 0;

  const pieData = [
    {
      name: "Completed",
      value: analytics.completedCourses,
    },
    {
      name: "Pending",
      value:
        analytics.enrolledCourses -
        analytics.completedCourses,
    },
  ];

  const barData = [
    {
      name: "Lectures",
      Completed: analytics.completedLectures,
      Pending: analytics.pendingLectures,
    },
    {
      name: "Quizzes",
      Completed: analytics.completedQuizzes,
      Pending: analytics.pendingQuizzes,
    },
  ];



  const activityData =
  analytics.activity || [];






  const COLORS = ["#facc15", "#7c3aed"];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Progress Analytics
        </h1>

        <p className="text-zinc-400 mt-3">
          Track your complete learning journey
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <Card
          icon={<BookOpen />}
          title="Enrolled Courses"
          value={analytics.enrolledCourses}
        />

        <Card
          icon={<Award />}
          title="Completed Courses"
          value={analytics.completedCourses}
        />

        <Card
          icon={<Award />}
          title="Certificates"
          value={analytics.certificatesEarned}
        />

        <Card
          icon={<TrendingUp />}
          title="Performance"
          value={`${analytics.overallPerformance.toFixed(
            1
          )}%`}
        />
      </div>

      {/* Learning Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <Card
          icon={<CheckCircle />}
          title="Completed Lectures"
          value={analytics.completedLectures}
        />

        <Card
          icon={<Clock />}
          title="Pending Lectures"
          value={analytics.pendingLectures}
        />

        <Card
          icon={<CheckCircle />}
          title="Completed Quizzes"
          value={analytics.completedQuizzes}
        />

        <Card
          icon={<Brain />}
          title="Pending Quizzes"
          value={analytics.pendingQuizzes}
        />
      </div>

      {/* Progress Bars */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <ProgressCard
          title="Attendance"
          value={analytics.attendancePercentage}
        />

        <ProgressCard
          title="Quiz Accuracy"
          value={Number(accuracy)}
        />
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">
            Course Completion
          </h2>

          <div className="h-[320px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={120}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">
            Learning Progress
          </h2>

          <div className="h-[320px]">
            <ResponsiveContainer>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="Completed"
                  fill="#facc15"
                />

                <Bar
                  dataKey="Pending"
                  fill="#7c3aed"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Daily Activity Chart */}
      <div className="mt-10 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
        <h2 className="text-2xl font-bold mb-6">
          Daily Learning Activity
        </h2>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="lecturesWatched"
                stroke="#facc15"
                strokeWidth={4}
              />

              <Line
                type="monotone"
                dataKey="quizzesAttempted"
                stroke="#7c3aed"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}


/* Card Component */
function Card({ icon, title, value }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <div className="text-yellow-400 mb-3">
        {icon}
      </div>

      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );}



      // {/* Daily Activity Chart */}

      // <div className="mt-10 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

      //   <h2 className="text-2xl font-bold mb-6">
      //     Daily Learning Activity
      //   </h2>

      //   <div className="h-[400px]">

      //     <ResponsiveContainer width="100%" height="100%">

      //       <LineChart >

      //         <CartesianGrid strokeDasharray="3 3" />
      //         <XAxis dataKey="day" />
      //         <YAxis />
      //         <Tooltip />
      //         <Legend />

      //         <Line
      //           type="monotone"
      //           dataKey="lecturesWatched"
      //           stroke="#facc15"
      //           strokeWidth={4}
      //         />

      //         <Line
      //           type="monotone"
      //           dataKey="quizzesAttempted"
      //           stroke="#7c3aed"
      //           strokeWidth={4}
      //         />

      //       </LineChart>

      //     </ResponsiveContainer>

      //   </div>

      // </div>

    
  
 








/* Progress Card */
function ProgressCard({ title, value }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <div className="flex justify-between mb-3">
        <span>{title}</span>
        <span>{value.toFixed(1)}%</span>
      </div>

      <div className="w-full h-3 bg-zinc-800 rounded-full">
        <div
          className="h-3 bg-yellow-400 rounded-full"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}