package patternquestions;




public class ProtoTypeDemo {

 

	public static void main(String[] args) {

 

		Employee e1=new Employee("Sakshi","IT"); //existing object

		Employee e2=new Employee("Mohit","HR");

	

		

		Employee e3= new Employee(e1);//cloning the 

		                              //existing object into new

		e1.setDepartment("Finance");

		e3.display();

		e1.display();

		e2.display();

	}

 

}

 

class Employee

{

	

	

	

	String name,department;

	

	

	Employee(Employee other)

	{

		this.name=other.name;

		this.department=other.department;

	}

 

	

	public String getName() {

		return name;

	}

 

 

 

 

 

	public void setName(String name) {

		this.name = name;

	}

 

 

 

 

 

	public String getDepartment() {

		return department;

	}

 

 

 

 

 

	public void setDepartment(String department) {

		this.department = department;

	}

 

 

 

 

 

	public Employee(String name, String department) {

		this.name = name;

		this.department = department;

	}

 

 

 

 

 

	void display()

	{

		System.out.println("name: "+name+" & department: "+department);

	}

	

}




