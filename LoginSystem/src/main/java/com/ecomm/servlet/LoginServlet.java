package com.ecomm.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String mail =
                request.getParameter("mail");

        String pass =
                request.getParameter("pass");

        out.println("<html><body>");

        // Validation
        if(mail == null || mail.isEmpty()
                || pass == null || pass.isEmpty()) {

            out.println(
            "<h3 style='color:red'>Please enter all details</h3>");
        }

        // Correct Password
        else if(pass.equals("neeraj123")) {

            out.println(
            "<h3 style='color:green'>Welcome "
            + mail +
            " Login Successful</h3>");
        }

        // Wrong Password
        else {

            out.println(
            "<h3 style='color:red'>Incorrect Password</h3>");
        }

        out.println("</body></html>");
    }

    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        response.sendRedirect("index.jsp");
    }
}
