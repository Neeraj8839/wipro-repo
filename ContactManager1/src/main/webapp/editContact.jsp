<%@page import="com.contact.model.Contact"%>

<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">

<title>Edit Contact</title>

</head>

<body>

<%

Contact c =
(Contact)request.getAttribute("contact");

%>

<h2>Edit Contact</h2>

<form action="contact" method="post">

<input type="hidden"
name="action"
value="update">

ID:
<input type="number"
name="id"
value="<%= c.getId() %>"
readonly>

<br><br>

Name:
<input type="text"
name="name"
value="<%= c.getName() %>">

<br><br>

Phone:
<input type="text"
name="phone"
value="<%= c.getPhone() %>">

<br><br>

Email:
<input type="email"
name="email"
value="<%= c.getEmail() %>">

<br><br>

<input type="submit"
value="Update Contact">

</form>

</body>
</html>