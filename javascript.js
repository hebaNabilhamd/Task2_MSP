
//1- Check if a number is odd or even in JavaScript

function isEven(number) {
			return number % 2 === 0;
		}

		function checkNumber() {
			const input = document.getElementById("numberInput");
			const number = parseInt(input.value);
			if (isNaN(number)) {
				alert("Please enter the number !");
				return;
			}

			if (isEven(number)) {
				alert(number + " The number is even");
			} else {
				alert(number + "The number is odd");
			}
		}
//2- Find the largest of two number

function findLargest(num1, num2) {
    		  if (num1 > num2) {
    		    return num1;
    		  } else{
    		    return num2;
    		  }
    		}

    function showResult() {
    			const input1 = parseInt(document.getElementById("num1").value);
    			const input2 = parseInt(document.getElementById("num2").value);
    			const result = findLargest(input1, input2);
    			document.getElementById("result").innerHTML = "The largest number is " + result;
    		}

//3- Find the largest of three number

function findLargestThree(n1, n2, n3) {
	  if (n1 >= n2 && n1 >= n3) {
	    return n1;
	  } else if (n2 >= n1 && n2 >= n3) {
	    return n2;
	  } else {
	    return n3;
	  }
	}

   	function showResult2() {
		const in1 = parseInt(document.getElementById("n1").value);
		const in2 = parseInt(document.getElementById("n2").value);
		const in3 = parseInt(document.getElementById("n3").value);
		const result2 = findLargestThree(in1, in2, in3);
		document.getElementById("result2").innerHTML = "The largest number is " + result2;
	}

//4- Perform arithmetic operations on two numbers

  function calculator(num1, num2, operation) {
  let result;

  switch(operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "modulus":
      result = num1 % num2;
      break;
    case "power":
      result = num1 ** num2;
      break;
    default:
      result = "Invalid operation";
  }

  return result;
}

function calculate() {
  const num1 = Number(document.getElementById("number1").value);
  const num2 = Number(document.getElementById("number2").value);
  const operation = document.getElementById("operation").value;
  const result3 = calculator(num1, num2, operation);
  document.getElementById("result3").innerHTML = "Result =  " + result3;
}

//5- Find check if a year is leap year or not

function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "leap year";
  } else {
    return "not a leap year";
  }
}

function checkYear() {
  let year = document.getElementById("year-input").value;
  let resulty = checkLeapYear(year);
  document.getElementById("Resulty").innerHTML = resulty;
}

//6-  Find the grade for input marks

function calculateGrade(marks) {
  let grade;
  if (marks < 60) {
    grade = "F";
  } else if (marks < 70) {
    grade = "D";
  } else if (marks < 80) {
    grade = "C";
  } else if (marks < 90) {
    grade = "B";
  } else if (marks <= 100) {
    grade = "A";
  } else {
    grade = "Invalid marks";
  }
  return grade;
}

function calculateGradeResult() {
  let marks = document.getElementById("marks-input").value;
  let grade = calculateGrade(marks);
  document.getElementById("grade").innerHTML = grade;
}



//7- Find number of days in a given month

function getDaysInMonth(month, year) {
  // Months array starting from 0 to 11
  const daysInMonth = [
    31, // Jan
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28, // Feb
    31, // Mar
    30, // Apr
    31, // May
    30, // Jun
    31, // Jul
    31, // Aug
    30, // Sep
    31, // Oct
    30, // Nov
    31, // Dec
  ];
  return daysInMonth[month];
}

function getDays() {
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let days = getDaysInMonth(month,year);
    let result = document.getElementById("resultMonth");
    result.innerHTML = `Number of days in month ${month} for year ${year} is ${days} days`;
  }
