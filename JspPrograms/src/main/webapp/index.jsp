<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" session="true"%>

<%
String email = (String)session.getAttribute("email");

if(email != null)
{
    response.sendRedirect("dashboard.jsp");
}
else
{
    response.sendRedirect("login.jsp");
}
%>