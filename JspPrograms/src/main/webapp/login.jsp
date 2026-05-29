<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body class="container mt-5">

<h2 class="mb-4">Login Page</h2>

<form action="add.jsp" method="post">

    <input type="email"
           name="email"
           class="form-control mb-3"
           placeholder="Enter Email">

    <input type="password"
           name="password"
           class="form-control mb-3"
           placeholder="Enter Password">

    <button class="btn btn-primary">
        Login
    </button>

</form>

</body>
</html>