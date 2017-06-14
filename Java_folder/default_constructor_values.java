class default_constructor_values{
int id;
String name;
  
void display(){System.out.println(id+" "+name);}
  
public static void main(String args[]){
default_constructor_values s1=new default_constructor_values();
default_constructor_values s2=new default_constructor_values();
s1.display();
s2.display();
}
}
