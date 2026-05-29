package collectionframework;

public class Student implements Comparable<Student>{

	 

	private String name;

	private int rollno;

	

	

	

 

	public Student(String name, int rollno) {

		this.name = name;

		this.rollno = rollno;

	

	}
	
	
	public String getName() {
		return name;
	}
	
	
	public int getRollno() {
		return rollno;
	}

 

	

	

	@Override

	public String toString() {

		return "Student [name=" + name + ", rollno=" + rollno + "]";

	}

 

 

 

	public void displayDetails()

	{

		System.out.println("Name : "+name+" \n Rollno : "+rollno);

	}

	

	@Override

    public int compareTo(Student other) {

      

		if(this.rollno<other.rollno)

        	 return -1;

		else if(this.rollno==other.rollno)

			return 0;

		else

			return 1;

      

    }

}














