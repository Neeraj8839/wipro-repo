<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">

<title>Add Contact</title>

</head>

<body>

<h2>Add Contact</h2>

<form action="contact" method="post">

<input type="hidden"
name="action"
value="add">

ID:
<input type="number"
name="id">

<br><br>

Name:
<input type="text"
name="name">

<br><br>

Phone:
<input type="text"
name="phone">

<br><br>

Email:
<input type="email"
name="email">

<br><br>

<input type="submit"
value="Add Contact">

</form>

</body>
</html>