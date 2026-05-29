package com.ecommerce.java;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if(username.equals("admin") &&
                password.equals("1234")) {

            // Create Session
            HttpSession session = request.getSession();

            // Store Data
            session.setAttribute("user", username);

            // Session Timeout
            session.setMaxInactiveInterval(300);

            // Create Cookie
            Cookie cookie = new Cookie("user", username);

            // Add Cookie
            response.addCookie(cookie);

            // Redirect
            response.sendRedirect("dashboard");

        } else {

            response.getWriter().println("Invalid Username or Password");
        }
    }
}