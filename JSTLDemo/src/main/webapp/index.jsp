<%@ page language="java"
contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>

<%@ taglib prefix="fmt"
uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>

<html>

<head>

<meta charset="ISO-8859-1">

<title>Main Page</title>

</head>

<body>

<h2>
This is the content showing from the main file
</h2>

<%@ include file="secondpage.jsp" %>

<hr>

<h3>Example of JSTL Tags</h3>

<p>

Currency =
<fmt:formatNumber
value="145"
type="currency"/>

</p>

<p>

<c:set var="now"
value="<%= new java.util.Date() %>" />

Current Date and Time :

<fmt:formatDate
pattern="yyyy-MM-dd hh:mm:ss"
value="${now}" />

</p>

</body>

</html>