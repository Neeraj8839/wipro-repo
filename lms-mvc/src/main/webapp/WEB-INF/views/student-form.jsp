<%@ taglib prefix="form"
uri="http://www.springframework.org/tags/form" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core"
           prefix="c" %>

<!DOCTYPE html>

<html>

<head>

    <title>Add Student</title>

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

            background: linear-gradient(
                    135deg,
                    #667eea,
                    #764ba2
            );
        }

        .container{

            width:420px;

            background:white;

            padding:40px;

            border-radius:20px;

            box-shadow:0 10px 30px rgba(0,0,0,0.2);

            animation:fadeIn 1s ease;
        }

        h2{

            text-align:center;

            margin-bottom:30px;

            color:#333;
        }

        .input-group{

            margin-bottom:25px;
        }

        label{

            display:block;

            margin-bottom:8px;

            font-weight:bold;

            color:#555;
        }

        input[type=text]{

            width:100%;

            padding:14px;

            border:1px solid #ccc;

            border-radius:10px;

            outline:none;

            font-size:15px;

            transition:0.3s;
        }

        input[type=text]:focus{

            border-color:#667eea;

            box-shadow:0 0 10px rgba(102,126,234,0.5);
        }

        .btn{

            width:100%;

            padding:14px;

            border:none;

            border-radius:10px;

            background:#667eea;

            color:white;

            font-size:16px;

            cursor:pointer;

            transition:0.3s;
        }

        .btn:hover{

            background:#5a67d8;

            transform:scale(1.03);
        }

        .icon{

            text-align:center;

            font-size:50px;

            margin-bottom:15px;
        }

        @keyframes fadeIn{

            from{
                opacity:0;
                transform:translateY(-40px);
            }

            to{
                opacity:1;
                transform:translateY(0);
            }
        }

    </style>

</head>

<body>

<div class="container">

    <div class="icon">

    </div>

    <h2>Student Registration</h2>

    <form:form action="saveStudent"
               modelAttribute="student">

        <div class="input-group">

            <label>Student Name</label>

            <form:input path="name"
                        placeholder="Enter Student Name"/>




                        <h3>Select Courses</h3>

                        <c:forEach var="c" items="${courseList}">

                            <input type="checkbox"
                                   name="courseIds"
                                   value="${c.id}"/>

                            ${c.title}

                            <br>

                        </c:forEach>

        </div>

        <input type="submit"
               value="Register Student"
               class="btn"/>

    </form:form>

</div>

</body>

</html>