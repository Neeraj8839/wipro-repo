Introduction

Introduction to servlets :
	Window / Standalone application -- CLI - Based on console
	Web Application --- Browser -  Based on the web related files / Web Server
			SourceCode --deployed on a server--output on Browser
			Web server  --  Apache Tomcat 
			Servlet & Jsp
			Servlet --- Core Java File but we call it as servlet that resides on a server and
			            a web page as an response the client is getting is jsp that also reside on a server
			Struts was introduced -- which is a framework(An architecture of required files & folders you will be getting and also having set of libraries / Binaries
	Enterprise Application ( Large Scale) 
	        SourceCode --deployed on a server--output on Browser
	        Web Server -- Jboss / GlassFish 
	        Many servers are configured for different purpose
	        	File Server ( FTP )
	        	Web Server
	        	Back Up
	        	Database Server
	 Roadmap of IT Career 
	 		Software Developer ( design / create ,module testing)
	 		FSD (Design(React) create (BackEnd is your spring) /Database (Mysql/ Mongodb) /pushing the sc on github ) / 
	 			devops , CI/CD tool ( Devops) / Jenkins , Docker Hub pushing
	 			images of your app , Kubernetes ( clusturing) , architect , Business team ,Scrum Master
	 		Spring Framework / Spring Boot  / Microservice based architecture 
	 		Spring with AI
	
	************************************************
	
	1) What happen when you open a website
		1) www.greatlearning.com/signin
		2) request( will be send by an HTML page) will go to the server( Tomcat)
		3) Tomcat will identify:
			Static pages : HTMl/CSS
			Dynamic : Servlet
		4) servlet will processes request 
		5) Response will be generated ( HTML)
		6) Browser renders UI  
	2) Http Protocol : Type of requests:
		1) GET  -- Fetch data
		2) POST -- Send data
		3) PUT -- Update
		4) Delete -- Remove 
		
	3) Dynamic login page
	
	Request(frontend)(HTML/CSS)JS ----> Backend(Servlet& JSP)JS -----> Database 
	
	4) Structure of Servlet
	     Create a Dynamic Web Project	 
	 
	 For preferences on mac pc (use cmd + ,)    
	 
	 
	 
	 
	 
Servlet container plays an important here just like you jvm in core java

doGET vs doPost  -- HTTP Methods

doGet -->  Fetch data  -- > for eg : searchProducts , fetch dashboard data , pagination APIs

let's say you have passed the data in two textboxes (mail & password) and in form action you have mentioned method ="get"

It is visible on Browser (in url) and the data will be exposed ( which is not acceptable ) which is not secured
// URL( querystring)
http:/localhost:8080/LoginSystem/login?mail=abc@gmail.com&pass=admin

can be cached

doPost  --> Submit data ---> for eg : login , payment , registration

Data sent inside request body(hidden) which is safe

Not cached 

use for submit / modify the data 

https://docs.oracle.com/javaee/7/api/javax/servlet/Servlet.html 

(To follow an api)

RequestDispatcher ( is an interface that gives two methods forward(request , response) / include ()

 It is used to transfer the control inside server 

 
 forward()
 
 syntax : request.getRequestParameter("dashboard.jsp").forward(request,response);
  use it for server side transfer
 same request + response object
 URL does not change 
 for navigation  -- MVC ( architecture)
 
 include() 
 
 request.getRequestParameter("error.jsp").include(request,response);
  
 It includes the content of another resource
 response gets appended
 
 Reusable components (like header & footer)
 

sendRedirect()

response.sendRedirect("products.jsp")
client-side redirect
Browser makes a new request
URL changes


ServletConfig & ServletContext

We have different types of scopes

ServletConfig scope : Per Servlet

api key , db config for one servlet , policy for one servlet

define in web.xml
<servlet>
    <servlet-name>MyServlet</servlet-name>
    <servlet-class>com.example.MyServlet</servlet-class>
    
    <!-- Servlet-specific parameter (ServletConfig) -->
    <init-param>
        <param-name>admin_email</param-name>
        <param-value>admin@example.com</param-value>
    </init-param>
</servlet>

ServletContext : Entire Application 

global userid or password or a globalkey 
logging 
<!-- Application-wide parameter (ServletContext) -->
<context-param>
    <param-name>db_name</param-name>
    <param-value>ProductionDB</param-value>
</context-param>

--------------------------------------------------------------------------------------------------------------------------------------


Session Management


ususally the HTTP it is a stateless protocol so to maintain the state of a page we use session management

Session be handled client side / server side

client side  :  cookies  / url rewriting / hidden form field
server side   : HttpSession ( by default it is disabled we have to enable it)
				session.setMaxInteractiveInterval(300); // Set timeout
                   or you can set in web.xml    
        <session-config><session-timeout>10</session-timeout></session-config>
Flow : -

Login ---> session created ---> cookie stored 
|
|
|
Next request ---> cookie will be sent ---> session will be identified

create a session  ->  HttpSession session = request.getSession();
store the data        session.setAttribute("user", "admin");
get the data      ->  String user = (String)session.getAttribute("user");
destroy session   ->  session.invalid();

cookie --> JSessionID will be stored on browser ( automatically)
create a cookie  :   Cookie cookie = new Cookie("user" , "admin");
                     response.addCookie(cookie);
retrieve the info from cookie    : Cookie[] cookies = request.getCookies();
                      
url rewriting ->  /dashboard?Jsessionid=343434
<input type="hidden" name="user" value="admin">
