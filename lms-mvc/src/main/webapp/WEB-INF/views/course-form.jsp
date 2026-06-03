<%@ taglib prefix="form"
uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>

<html>

<head>

    <title>Add Course</title>

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
                    #4facfe,
                    #00f2fe
            );
        }

        .container{

            width:400px;

            background:white;

            padding:40px;

            border-radius:15px;

            box-shadow:0 10px 25px rgba(0,0,0,0.2);

            animation:slideIn 1s ease;
        }

        h2{

            text-align:center;

            margin-bottom:30px;

            color:#333;
        }

        .input-group{

            margin-bottom:20px;
        }

        label{

            display:block;

            margin-bottom:8px;

            font-weight:bold;

            color:#555;
        }

        input[type=text]{

            width:100%;

            padding:12px;

            border:1px solid #ccc;

            border-radius:8px;

            outline:none;

            transition:0.3s;
        }

        input[type=text]:focus{

            border-color:#4facfe;

            box-shadow:0 0 8px rgba(79,172,254,0.5);
        }

        .btn{

            width:100%;

            padding:12px;

            border:none;

            border-radius:8px;

            background:#4facfe;

            color:white;

            font-size:16px;

            cursor:pointer;

            transition:0.3s;
        }

        .btn:hover{

            background:#007bff;

            transform:scale(1.03);
        }

        @keyframes slideIn{

            from{
                opacity:0;
                transform:translateY(-50px);
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

    <h2>Add New Course</h2>

    <form:form action="saveCourse"
               modelAttribute="course">

        <div class="input-group">

            <label>Course Title</label>

            <form:input path="title"
                        placeholder="Enter Course Name"/>

        </div>

        <input type="submit"
               value="Save Course"
               class="btn"/>

    </form:form>

</div>

</body>

</html>