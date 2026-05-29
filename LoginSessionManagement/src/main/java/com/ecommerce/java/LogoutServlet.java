package com.ecommerce.java;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        // Destroy Session
        HttpSession session = request.getSession(false);

        if(session != null) {

            session.invalidate();
        }

        // Remove Cookies
        Cookie cookies[] = request.getCookies();

        if(cookies != null) {

            for(Cookie c : cookies) {

                c.setMaxAge(0);

                response.addCookie(c);
            }
        }

        response.sendRedirect("login.jsp");
    }
}