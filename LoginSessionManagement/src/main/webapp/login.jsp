<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Quick Cart - Login</title>

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
    background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.login-box{
    width:380px;
    background:white;
    padding:40px;
    border-radius:20px;
    box-shadow:0px 10px 25px rgba(0,0,0,0.2);
}

.login-box h1{
    text-align:center;
    margin-bottom:10px;
    color:#333;
}

.login-box p{
    text-align:center;
    color:gray;
    margin-bottom:30px;
}

.input-box{
    margin-bottom:20px;
}

.input-box label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
    color:#444;
}

.input-box input{
    width:100%;
    padding:12px;
    border:1px solid #ccc;
    border-radius:10px;
    font-size:15px;
}

.input-box input:focus{
    border-color:#4facfe;
    outline:none;
    box-shadow:0 0 8px rgba(79,172,254,0.5);
}

.login-btn{
    width:100%;
    padding:12px;
    border:none;
    border-radius:10px;
    background:#4facfe;
    color:white;
    font-size:16px;
    cursor:pointer;
    transition:0.3s;
}

.login-btn:hover{
    background:#008cdd;
}

.extra-links{
    margin-top:20px;
    text-align:center;
}

.extra-links a{
    text-decoration:none;
    color:#4facfe;
    font-size:14px;
}

.extra-links a:hover{
    text-decoration:underline;
}

</style>

</head>

<body>

<div class="login-box">

    <h1>Login Form </h1>

    <form action="login" method="post">

        <div class="input-box">
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter Username" required>
        </div>

        <div class="input-box">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter Password" required>
        </div>

        <button type="submit" class="login-btn">
            Login
        </button>

    </form>

    <div class="extra-links">
      
    </div>

</div>

</body>
</html>