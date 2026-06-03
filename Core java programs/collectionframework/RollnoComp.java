package collectionframework;

import java.util.*;
import java.util.Comparator;




public class RollnoComp implements Comparator<Student> {

 

	@Override

	public int compare(Student o1, Student o2) {

		if (((Student) o1).getRollno() < ((Student) o2).getRollno())

			return -1;

		else if (((Student) o1).getRollno() == ((Student) o2).getRollno())

			return 0;

		else

			return 1;

	}

 

}

 

class NameComp implements Comparator<Student> {

 

	@Override

	public int compare(Student o1, Student o2) {

		return ((Student) o1).getName().compareToIgnoreCase(((Student) o2).getName());

	}

 

}










