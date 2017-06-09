 #include <iostream>  
using namespace std;  
namespace First {    
    void sayHello() {   
        cout<<"Hello First Namespace"<<endl;          
    }    
}    
namespace Second  {    
       void sayHello() {   
           cout<<"Hello Second Namespace"<<endl;   
       }

	void repothis() {
		cout << "Error if i do not specify a namespace\n";
	}    
}   
int main()  
{  
 First::sayHello();  
 Second::sayHello();
 Second::repothis();
return 0;  
}  
