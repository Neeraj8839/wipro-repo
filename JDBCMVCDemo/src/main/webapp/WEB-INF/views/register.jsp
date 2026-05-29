<%-- <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> --%>

<%-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> --%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"

    pageEncoding="ISO-8859-1"%>

    

     <%@page isELIgnored="false" %>

<html>

<head><title>Register User</title></head>

<body>

<h2>Register User</h2>

<form action="register" method="post" >

	Id : <input type= text  name="id">

    Name: <input type =text name="name"/><br/>

    Email: <input type= text name="email"/><br/>

    <input type="submit" value="Register"/>

</form>

 

<%--  <c:if test="${not empty message}">

    <p style="color:green;">${message}</p>

</c:if>  --%>

</body>

</html>




