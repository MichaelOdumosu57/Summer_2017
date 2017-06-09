#include <iostream>  
#include <cstring>  
using namespace std;  
int main()  
{  
    char key[25], buffer[25];  
    cout << "Enter the key string: ";  
    cin.getline(key, 25);  
    strcpy(buffer, key);  
    cout << "Key = "<< key << endl;  
    cout << "Buffer = "<< buffer<<endl;  
      

    char keys[25], buffers[25];
    cout << "Enter the key string: ";
    cin.getline(keys, 25);
    cout << "Enter the buffer string: ";
    cin.getline(buffers, 25);
    strcpy(buffers, keys);
    cout << "Key = "<< keys << endl;
    cout << "Buffer = "<< buffers <<endl;
    return 0;

}
