package studentsdetails;
class Student {
    String name;
    int rollNo;
    int marks;

    Student(String name, int rollNo, int marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    String calculateGrade() {
        if (marks >= 75) {
            return "A";
        } else if (marks >= 60) {
            return "B";
        } else if (marks >= 40) {
            return "C";
        } else {
            return "Fail";
        }
    }

    void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("Marks: " + marks);
        System.out.println("Grade: " + calculateGrade());
        System.out.println("----------------------");
    }
}

public class Main {
    public static void main(String[] args) {

        Student s1 = new Student("Rahul", 101, 80);
        Student s2 = new Student("Amit", 102, 65);
        Student s3 = new Student("Neha", 103, 35);

        s1.displayDetails();
        s2.displayDetails();
        s3.displayDetails();
    }
}