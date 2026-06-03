import { useEffect, useState } from "react";
import api from "../api/client";
import toast from "react-hot-toast";

export default function SupportTicketPage() {

  const [tickets, setTickets] = useState([]);

  const [form, setForm] = useState({
    subject: "",
    description: "",
    priority: "MEDIUM",
  });

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {

      const res =
        await api.get("/student/tickets");

      setTickets(res.data);

    } catch {

      toast.error(
        "Failed to load tickets"
      );
    }
  };

  const submitTicket = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "/student/tickets",
        form
      );

      toast.success(
        "Ticket Submitted"
      );

      setForm({
        subject: "",
        description: "",
        priority: "MEDIUM",
      });

      loadTickets();

    } catch {

      toast.error(
        "Failed to submit ticket"
      );
    }
  };

  const getStatusColor = (status) => {

    switch (status) {

      case "OPEN":
        return "bg-red-500";

      case "IN_PROGRESS":
        return "bg-yellow-500";

      case "RESOLVED":
        return "bg-green-500";

      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Support Center
        </h1>

        {/* Create Ticket */}

        <div className="bg-slate-900 rounded-2xl p-6 mb-10">

          <h2 className="text-2xl font-bold mb-4">
            Raise New Ticket
          </h2>

          <form
            onSubmit={submitTicket}
            className="space-y-4"
          >

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) =>
                setForm({
                  ...form,
                  subject:
                    e.target.value,
                })
              }
              className="w-full p-3 rounded-lg bg-slate-800"
              required
            />

            <textarea
              placeholder="Describe your issue..."
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description:
                    e.target.value,
                })
              }
              rows={5}
              className="w-full p-3 rounded-lg bg-slate-800"
              required
            />

            <select
              value={form.priority}
              onChange={(e) =>
                setForm({
                  ...form,
                  priority:
                    e.target.value,
                })
              }
              className="w-full p-3 rounded-lg bg-slate-800"
            >
              <option value="LOW">
                Low
              </option>

              <option value="MEDIUM">
                Medium
              </option>

              <option value="HIGH">
                High
              </option>
            </select>

            <button
              type="submit"
              className="
                bg-yellow-400
                text-black
                px-6
                py-3
                rounded-xl
                font-bold
              "
            >
              Submit Ticket
            </button>

          </form>
        </div>

        {/* Ticket List */}

        <div className="space-y-5">

          {tickets.map((ticket) => (

            <div
              key={ticket.id}
              className="
                bg-slate-900
                rounded-2xl
                p-6
              "
            >

              <div className="
                flex
                justify-between
                items-center
                mb-3
              ">

                <h3 className="text-xl font-bold">
                  {ticket.subject}
                </h3>

                <span
  style={{
    background:
      ticket.status === "RESOLVED"
        ? "#16a34a"
        : "#ef4444",
    color: "white",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
  }}
>
  {ticket.status}
</span>

              </div>

              <p className="text-slate-300">
                {ticket.description}
              </p>

              {ticket.adminReply && (

                <div
                  className="
                    mt-4
                    bg-slate-800
                    p-4
                    rounded-xl
                  "
                >

                  <strong>
                    Admin Reply:
                  </strong>

                  <p>
                    {ticket.adminReply}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}