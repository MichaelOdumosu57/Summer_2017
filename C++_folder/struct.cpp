 #include <iostream>  
using namespace std;  
 struct Rectangle    
{    
   int width, height;    
	
    Rectangle(int w, int h) {
	width = w;		
  	height = h;

    } 
   void areaOfRectangle() {     
    cout<<"Area of Rectangle is: "<<(width*height); }    
     
 };    
int main(void) {  
    //struct Rectangle rec;  
 //   rec.width=8;  
   // rec.height=5;
    struct Rectangle wec = Rectangle(2,30);  
    cout<<"Area of Rectangle is: "<<(wec.width * wec.height)<<endl; 
    wec.areaOfRectangle();  
    return 0;  
}  
