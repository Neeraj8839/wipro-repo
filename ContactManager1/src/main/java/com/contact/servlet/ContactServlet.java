package com.contact.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.contact.dao.ContactDAO;
import com.contact.model.Contact;

@WebServlet("/contact")
public class ContactServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    ContactDAO dao = new ContactDAO();

    // GET METHOD
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String action = request.getParameter("action");

        // VIEW CONTACTS
        if (action == null) {

            request.setAttribute(
                    "contacts",
                    dao.getAllContacts());

            request.getRequestDispatcher("index.jsp")
                    .forward(request, response);
        }

        // DELETE
        else if (action.equals("delete")) {

            int id = Integer.parseInt(
                    request.getParameter("id"));

            dao.deleteContact(id);

            response.sendRedirect("contact");
        }

        // EDIT
        else if (action.equals("edit")) {

            int id = Integer.parseInt(
                    request.getParameter("id"));

            Contact c = dao.getContactById(id);

            request.setAttribute("contact", c);

            request.getRequestDispatcher(
                    "editContact.jsp")
                    .forward(request, response);
        }
    }

    // POST METHOD
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String action = request.getParameter("action");

        int id = Integer.parseInt(
                request.getParameter("id"));

        String name = request.getParameter("name");

        String phone = request.getParameter("phone");

        String email = request.getParameter("email");

        Contact c = new Contact(
                id,
                name,
                phone,
                email);

        // ADD
        if (action.equals("add")) {

            dao.addContact(c);

            request.setAttribute(
                    "msg",
                    "Contact Added Successfully");
        }

        // UPDATE
        else if (action.equals("update")) {

            dao.updateContact(c);

            request.setAttribute(
                    "msg",
                    "Contact Updated Successfully");
        }

        request.setAttribute(
                "contacts",
                dao.getAllContacts());

        request.getRequestDispatcher("index.jsp")
                .forward(request, response);
    }
}
