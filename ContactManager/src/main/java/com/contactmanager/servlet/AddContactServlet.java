package com.contactmanager.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.contactmanager.model.Contact;

@WebServlet("/addContact")
public class AddContactServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");
        String phone = request.getParameter("phone");
        String email = request.getParameter("email");

        Contact contact = new Contact(name, phone, email);

        HttpSession session = request.getSession();

        ArrayList<Contact> contacts =
                (ArrayList<Contact>) session.getAttribute("contacts");

        if (contacts == null) {
            contacts = new ArrayList<Contact>();
        }

        contacts.add(contact);

        session.setAttribute("contacts", contacts);

        response.sendRedirect("viewContacts");
    }
}