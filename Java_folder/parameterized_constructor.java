class parameterized_constructor{
    int id;
    String name;
      
    parameterized_constructor(int i,String n){
    id = i;
    name = n;
    }
    void display(){System.out.println(id+" "+name);}
   
    public static void main(String args[]){
    parameterized_constructor s1 = new parameterized_constructor(111,"Karan");
    parameterized_constructor s2 = new parameterized_constructor(222,"Aryan");
    s1.display();
    s2.display();
   }
}
