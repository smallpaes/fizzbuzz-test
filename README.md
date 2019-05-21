# FizzBuzz Game Unit Test
Implementing unit test on FizzBuzz Game with the help of Mocha and Jasmine

## Installation
* Homebrew
* Node.js & npm
* mocha & chai


## Defining the FizzBuzz Game
In [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) game, we will write a function that takes a positive number and returns:
* **‘Fizz’**: if the input is divisible by 3
* **‘Buzz’**: if the input is divisible by 5
* **‘FizzBuzz’**: if the input is divisible by both 3 and 5
* The original input number if otherwise

An example: 
```
fizzBuzz(3) //Output: 'Fizz'
fizzBuzz(4) //Output: 4
fizzBuzz(5) //Output: 'Buzz'
```


## Preparing the fizzBuzz function
### Go to fizz buzz.js
Write a fizzBuzz function to wait for a positive number input and return respectively
```
function fizzBuzz(num) {
  let str = ''
  if (num % 3 === 0) {
    str += 'Fizz'
  }
  if (num % 5 === 0) {
    str += 'Buzz'
  }
  if (str != '') {
    return str
  } else {
    return num
  }
}
```

## Run tests with Macha
### 1. Initialization in the terminal: 
 `$ npm init`  

### 2. Install Mocha and Chai with npm in the terminal:
 `$ npm install mocha chai —save-dev`  

### 3. Go to fizzbuzz_spec.js in the editor:
Write unit tests for the fizzBuzz function. Test cases are: 

* [case 1] input: 9, expect output : Fizz  
* [case 2] input: 10, expect output : Buzz  
* [case 3] input: 15, expect output : FizzBuzz  
* [case 4] input: 16, expect output : 16  
  
### 4. Show Test Result in the browser:
Open index.html in the browser to view the results:
![image](https://drive.google.com/uc?export=view&id=10EoChPkCs72hhBfzKJqbkw5B2zqPkv_y)