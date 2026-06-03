<%@page import="java.util.List"%>

<!DOCTYPE html>
<html>

<head>

<title>Dashboard</title>

<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
rel="stylesheet">

</head>

<body>

<div class="container mt-5">

<h2 class="text-success">
Login Successful
</h2>

<h4 class="mt-4">
Product List
</h4>

<ul class="list-group mt-3">

<%

List<String> products =
(List<String>)
request.getAttribute("productList");

for(String p : products){

%>

<li class="list-group-item">

<%= p %>

</li>

<%
}
%>

</ul>

</div>

</body>
</html>