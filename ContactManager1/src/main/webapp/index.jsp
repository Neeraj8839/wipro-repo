<%@page import="java.util.List"%>
<%@page import="com.contact.model.Contact"%>

<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">

<title>Contact Manager</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<h1>Contact Manager</h1>

<%
String msg = (String)request.getAttribute("msg");

if(msg != null){
%>

<h3 style="color:green;">
<%= msg %>
</h3>

<%
}
%>

<a href="addContact.jsp">
Add New Contact
</a>

<br><br>

<table border="1">

<tr>

<th>ID</th>
<th>Name</th>
<th>Phone</th>
<th>Email</th>
<th>Action</th>

</tr>

<%

List<Contact> list =
(List<Contact>)request.getAttribute("contacts");

if(list != null){

for(Contact c : list){

%>

<tr>

<td><%= c.getId() %></td>

<td><%= c.getName() %></td>

<td><%= c.getPhone() %></td>

<td><%= c.getEmail() %></td>

<td>

<a href="contact?action=edit&id=<%= c.getId() %>">
Edit
</a>

|

<a href="contact?action=delete&id=<%= c.getId() %>">
Delete
</a>

</td>

</tr>

<%
}
}
%>

</table>

</body>
</html>