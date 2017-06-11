#include <iostream>
#include <cstring>
using namespace std;
static char debug[25];
// recusive loop for every word
int converter(long int  val);
int main (void) {
	cout << "debug\n";
	cin >> debug;
	//cout << debug[0] << endl;
	long int word_number;
	cout << "Please enter a number to be converted to words digit by digit\n";
	cin >> word_number;
	if (strcmp(debug,"yes") == 0){
		cout << "this is your number " << word_number << endl;
	}
	converter(word_number);
	cout << endl;
	return 0;

}
int converter(long int  val) {
		long int digits = 1;
		long int size = val;
		long int keep = val;

		while(size/digits > 10){
			digits *= 10;	
		}

		while(digits != 0) {
			
		size = keep/digits;
		if (strcmp(debug,"yes") == 0) {
			cout << "the digit should change" << digits << endl;
			cout << "the number should change here" << size << endl;
		}
		// switch statemenet to print numbers as words
		switch(size) {
            	    case 0:
                	cout << "zero ";
                	break;
            	    case 1:
                	cout << "one ";
                	break;
            	    case 2:
                	cout << "two ";
                	break;
            	    case 3:
                	cout << "three ";
                	break;
            	    case 4:
               	 	cout << "four ";
                	break;
            	    case 5:
                	cout << "five ";
                	break;
            	    case 6:
                	cout << "six ";
                	break;
            	    case 7:
                	cout << "seven ";
                	break;
            	    case 8:
                	cout << "eight ";
                	break;
            	    case 9:
                	cout << "nine ";
                	break;

		}
                keep = keep - (size*digits);
		digits /= 10;
		if (strcmp(debug,"yes") == 0 ) {
			cout << "has the number changed" << size << endl;
		}
	}
	
}
