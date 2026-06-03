package studentERM;
public class Main {
public static void main(String[] args) {
  Student obj=new Student("sakshi","123"); //50 students
  
  obj.display();
  obj.updateCollege();// UPDATING COLLEGE TO ABC

  Student.show();

  Student obj1=new Student(" neha","126"); //50 students

  obj1.display();

}
}
class Student

{
static void show()


{

  System.out.println("class static method is working");

}

String name,rollno; //50 students  // non static variable  or instance variable

static String college="xyz";   // 1 copy

public Student(String name, String rollno) {

  super();

  this.name = name;

  this.rollno = rollno;

}

void updateCollege()

{

  college="ABC";

}



void display()

{

  System.out.println(name+" "+rollno+" "+college);

}

}
