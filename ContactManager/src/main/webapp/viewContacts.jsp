<%@ page import="java.util.ArrayList" %>
<%@ page import="com.contactmanager.model.Contact" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Contacts</title>

<style>

body{
    font-family:Arial;
    background:#f4f4f4;
}

.container{
    width:700px;
    margin:auto;
    margin-top:50px;
    background:white;
    padding:20px;
    border-radius:10px;
}

table{
    width:100%;
    border-collapse:collapse;
}

table, th, td{
    border:1px solid black;
    padding:10px;
}

th{
    background:blue;
    color:white;
}

a{
    text-decoration:none;
    background:green;
    color:white;
    padding:10px;
}

</style>

</head>
<body>

<div class="container">

<h2>All Contacts</h2>

<a href="addContact.jsp">
    Add More Contact
</a>

<br><br>

<table>

<tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
</tr>

<%
ArrayList<Contact> contacts =
(ArrayList<Contact>) session.getAttribute("contacts");

if(contacts != null){

    for(Contact c : contacts){
%>

<tr>

<td><%= c.getName() %></td>
<td><%= c.getPhone() %></td>
<td><%= c.getEmail() %></td>

</tr>

<%
    }
}
%>

</table>

</div>

</body>
</html>