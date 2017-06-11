#include <iostream>
using namespace std;
static int debug;
int main (){
	// variable that program starts with
	int integer;
	//divisor
	int divide_by;
	cout << "debug?";
	cin >> debug;
	cout << "This program checks to see if a number is a prime number\n";
	cout << "Please enter a  number" << "  ";
	cin >> integer;
	//icout << integer;
	divide_by = integer;
	while(divide_by != 2) {
                divide_by -= 1;
		if( debug == 0)  {
			cout << integer << "/" <<divide_by << "=" << integer%divide_by <<endl;
			
		}
                                 
		if( integer % divide_by == 0) {
                        cout <<" composite number\n";
			return 0;
		}
	}
        cout <<" prime number\n";
	
	return 0;
	
}
