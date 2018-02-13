// for else loops for 99 lines of code

let names = ["Tyler", "Stephen", "John", "Skyler", "Ronnie"];

 for(i=0; i<names.length; i++){
     for(j=99; j>0; j--){
         if(j==1){
             console.log("1 line of code in the file, 1 line of code; " + names[i] + " strikes one out, clears it all out, no more lines of code in the file")
         }
         else{
             console.log(j + " lines of code in the file, " + j + " lines of code; " + names[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file" )
         }
     }
 }


 // names is my array
//  first for loop vaiable i, goes thru my arry until its .length
// first for loop checks for that array is less than the .length
// second for loop checks if variable j is greater than 0 and subtracts 1 after each round
// if j is greater than zero, it checks condition of j=1, if it is, it prints the
// first console.log in body of if statement.  else it prints whats in body of else statment.
