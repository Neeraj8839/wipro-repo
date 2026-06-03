<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" session="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dashboard</title>
</head>
<body>

<%
String email = (String)session.getAttribute("email");

if(email == null)
{
    response.sendRedirect("login.jsp");
    return;
}
%>

<jsp:include page="header.jsp"></jsp:include>

<h2>Dashboard</h2>

<%
int a = 30;
int b = 40;

String s = "Hi! Your email id is:";
%>

<p>
<%= s.toUpperCase() %>
<%= email %>
</p>

<p>
Sum of two numbers:
<%= (a+b) %>
</p>

</body>
</html>