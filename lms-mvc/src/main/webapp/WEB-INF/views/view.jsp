<%@ page import="java.util.*" %>
<%@ page import="com.lms.entity.Student" %>
<%@ page import="com.lms.entity.Course" %>

<html>

<head>

<title>Student Details</title>

<style>

body{
    font-family: Arial;
    background:#f1f5f9;
}

table{
    width:80%;
    margin:auto;
    border-collapse: collapse;
    background:white;
}

th{
    background:#4f46e5;
    color:white;
    padding:15px;
}

td{
    padding:15px;
    text-align:center;
    border-bottom:1px solid #ddd;
}

h2{
    text-align:center;
    margin-top:30px;
}

tr:hover{
    background:#f5f5f5;
}

</style>

</head>

<body>

<h2>Student Enrollment Details</h2>

<table>

<tr>

<th>ID</th>
<th>Student Name</th>
<th>Courses</th>

</tr>

<%

List<Student> students =
(List<Student>)request.getAttribute("students");

if(students != null){

for(Student s : students){

%>

<tr>

<td><%= s.getId() %></td>

<td><%= s.getName() %></td>

<td>

<%

if(s.getCourses() != null){

for(Course c : s.getCourses()){

%>

<%= c.getTitle() %><br>

<%

}

}

%>

</td>

</tr>

<%

}

}

%>

</table>

</body>
</html>