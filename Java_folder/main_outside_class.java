class Student{  
 int id;  
 String name;  
}  
class main_outside_class{  
 static public void main(String[] args){
  Student s1=new Student();  
  System.out.println(s1.id);  
  System.out.println(s1.name);  
 }  
}  
