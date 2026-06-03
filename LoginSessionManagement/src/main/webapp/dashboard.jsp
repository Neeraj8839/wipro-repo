<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dashboard</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Arial, sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(135deg, #43cea2, #185a9d);
}

.dashboard-box{
    width:450px;
    background:white;
    padding:40px;
    border-radius:20px;
    text-align:center;
    box-shadow:0px 10px 25px rgba(0,0,0,0.2);
}

.dashboard-box h1{
    color:#333;
    margin-bottom:15px;
}

.dashboard-box h2{
    color:#555;
    margin-bottom:30px;
}

.username{
    color:#4facfe;
    font-weight:bold;
}

.logout-btn{
    display:inline-block;
    padding:12px 25px;
    background:#ff4b5c;
    color:white;
    text-decoration:none;
    border-radius:10px;
    transition:0.3s;
    font-size:16px;
}

.logout-btn:hover{
    background:#d63031;
}

</style>

</head>

<body>

<div class="dashboard-box">

    <h1>Login Form</h1>

    <h2>
        Hello,
        <span class="username">
            <%= session.getAttribute("user") %>
        </span>
    </h2>

    <a href="logout" class="logout-btn">
        Logout
    </a>

</div>

</body>
</html>