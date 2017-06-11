#include <iostream>
#include <cstring>
using namespace std;

//recursive prototype using call by reference

int fibo_function(int * len);
// non recursive prototype 
int fib_function(int len);
//to debug the program
static int debug;
static int fib_seq_len;
static int first = 0;
static int second =1;
static int next;
int main(void) {
	
	//query
	char fib_query[25];
	cout << "debug?\n";
	cin >> debug;
	cout << "Please enter the amonut of numbers you want to see in the fibonacci sequence\n";
	cin >> fib_seq_len;
	//cout << "So this is the length that you want?   "  << fib_seq_len << endl;
	cout << "Would you like to have it done recursively\n";
	cin.getline(fib_query,25);
	cin >> fib_query;
	//function call
        cout << first << " " << second << " ";
	
	//conditional
	if (strcmp(fib_query,"yes") == 0 ) {
		fibo_function(&fib_seq_len);
		cout << endl;
	}
	else {
		fib_function(fib_seq_len);
                cout << endl;
	}
	return 0;

}	

//recursive function using call by reference
int fibo_function(int * len) {
	// the count would refer to the len in main and is shared that way
	if (*len == 2) {
		return 0;
	}
	else {
		next = first + second;
                if(debug == 0) {
                        cout << "the next number in the sequence" << next << endl;
                }
		else {
			cout << next << " "; 
		}
		first = second;
		second = next;	
		*len -= 1;
		if(debug == 0) {
			cout << "the current length" << *len << endl;	
		}
		fibo_function(len);
	}
		
}

int fib_function(int len) {
	//cout << "Executed properly\n";
	// use a for loop to make it execute without recursion
	for(int i = 2;i < len; i++) {
                next = first + second;
                cout << next << " ";
                first = second;
                second = next;	
		}
	}
	
