import { useState } from "react";
import api from "../api/client";
import toast from "react-hot-toast";

export default function AdminTickets({
  tickets,
  setTickets,
}) {

  const [replyForms, setReplyForms] =
    useState({});

  const replyTicket = async (
    ticketId,
    status
  ) => {

    try {

      const { data } =
        await api.patch(
          `/admin/tickets/${ticketId}`,
          {
            status,
            adminReply:
              replyForms[ticketId] || "",
          }
        );

      setTickets((prev) =>
        prev.map((t) =>
          t.id === ticketId
            ? data
            : t
        )
      );

      toast.success(
        status === "RESOLVED"
          ? "Ticket Resolved"
          : "Reply Sent"
      );

    } catch {

      toast.error(
        "Failed to update ticket"
      );
    }
  };

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
        🎫 Support Tickets
      </h2>

      {tickets.length === 0 && (
        <div
          style={{
            background: "#27272a",
            padding: "40px",
            borderRadius: "20px",
            color: "#a1a1aa",
            textAlign: "center",
          }}
        >
          No tickets found
        </div>
      )}

      {tickets.map((ticket) => (

        <div
          key={ticket.id}
          style={{
            background: "#27272a",
            color: "white",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "20px",
            border: "1px solid #3f3f46",
            boxShadow:
              "0 8px 20px rgba(0,0,0,0.25)",
          }}
        >

          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >

            <div>

              <h3
                style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                {ticket.subject}
              </h3>

              <p
                style={{
                  marginTop: "8px",
                  color: "#a1a1aa",
                  fontSize: "14px",
                }}
              >
                Ticket ID: #{ticket.id}
              </p>

            </div>

            <span
              style={{
                background:
                  ticket.status ===
                  "RESOLVED"
                    ? "#16a34a"
                    : "#dc2626",
                color: "white",
                padding:
                  "8px 14px",
                borderRadius:
                  "20px",
                fontSize: "12px",
                fontWeight:
                  "bold",
              }}
            >
              {ticket.status}
            </span>

          </div>

          {/* Description */}
          <div
            style={{
              background:
                "#18181b",
              padding: "18px",
              borderRadius:
                "12px",
              marginBottom:
                "20px",
            }}
          >

            <div
              style={{
                color:
                  "#facc15",
                fontWeight:
                  "bold",
                marginBottom:
                  "10px",
              }}
            >
              Issue Description
            </div>

            <p
              style={{
                color:
                  "#d4d4d8",
                lineHeight:
                  "1.8",
                margin: 0,
              }}
            >
              {ticket.message ||
                ticket.description ||
                ticket.content ||
                "No description"}
            </p>

          </div>

          {/* Admin Reply */}
          {ticket.adminReply && (

            <div
              style={{
                background:
                  "#1e293b",
                padding:
                  "18px",
                borderRadius:
                  "12px",
                marginBottom:
                  "20px",
                border:
                  "1px solid #334155",
              }}
            >

              <div
                style={{
                  color:
                    "#60a5fa",
                  fontWeight:
                    "bold",
                  marginBottom:
                    "10px",
                }}
              >
                Admin Reply
              </div>

              <p
                style={{
                  margin: 0,
                  color:
                    "#e5e7eb",
                }}
              >
                {ticket.adminReply}
              </p>

            </div>
          )}

          {/* Reply Box */}
          <textarea
            placeholder="Write your reply..."
            value={
              replyForms[
                ticket.id
              ] || ""
            }
            onChange={(e) =>
              setReplyForms({
                ...replyForms,
                [ticket.id]:
                  e.target.value,
              })
            }
            style={{
              width: "100%",
              minHeight: "120px",
              padding: "15px",
              borderRadius:
                "12px",
              border:
                "1px solid #3f3f46",
              background:
                "#18181b",
              color:
                "white",
              resize:
                "vertical",
              outline:
                "none",
              marginBottom:
                "18px",
            }}
          />

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap:
                "wrap",
            }}
          >

            {ticket.status !==
              "RESOLVED" && (

              <button
                onClick={() =>
                  replyTicket(
                    ticket.id,
                    "RESOLVED"
                  )
                }
                style={{
                  background:
                    "#16a34a",
                  color:
                    "white",
                  border:
                    "none",
                  padding:
                    "12px 22px",
                  borderRadius:
                    "10px",
                  cursor:
                    "pointer",
                  fontWeight:
                    "bold",
                }}
              >
                ✓ Resolve
              </button>
            )}

            <button
              onClick={() =>
                replyTicket(
                  ticket.id,
                  "OPEN"
                )
              }
              style={{
                background:
                  "#2563eb",
                color:
                  "white",
                border:
                  "none",
                padding:
                  "12px 22px",
                borderRadius:
                  "10px",
                cursor:
                  "pointer",
                fontWeight:
                  "bold",
              }}
            >
              📩 Send Reply
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}