<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" session="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Page</title>
</head>
<body>

<jsp:include page="header.jsp"></jsp:include>

<%
String email = request.getParameter("email");
String password = request.getParameter("password");

if(email == null || password == null ||
   email.isEmpty() || password.isEmpty())
{
    response.sendRedirect("error.jsp");
    return;
}

session.setAttribute("email", email);
%>

<h2>Welcome, <%= email %></h2>

<a href="dashboard.jsp">
    Go To Dashboard
</a>

</body>
</html>