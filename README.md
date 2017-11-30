 ##  Documentation
This app takes in three files and sends the contents of each as a string to a new index in an array.  

## File Reader Function

My file reader function takes in two parameters, the paths (array) and a callback (function).  The array must contain strings which are derived from the assets directory, each file contained within is mapped to a variable declared within the reader module.  

## File Reader Array Test

My file reader test passes in three correct files in the form of an array and shows an error if it were to be null, and the test passes if three text files are passed as expected.

## File Reader Invalid Array Test

My file reader invalid tests look at each index of the array passed to it and determines whether at index 0, 1, or 2 if an invalid text file is passed through.  If it is invalid, it throws an error.