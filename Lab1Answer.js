function capitalizeFirstLetterOfEachWord(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}
const str = "the quick brown fox";
const capitalizedStr = capitalizeFirstLetterOfEachWord(str);
console.log(capitalizedStr); 

// Question 2
function findLargest(a, b, c) {
    let largest = a;
    if (b > largest) {
      largest = b;
    }
    if (c > largest) {
      largest = c;
    }
    return largest;
}
let num1 = 1000;
let num2 = 510;
let num3 = 440;
let largestNumber = findLargest(num1, num2, num3);
console.log(`The largest number is: ${largestNumber}`);

// Question 3
function moveLastThree(str) {
    if (str.length >= 3) {
      return str.slice(-3) + str.slice(0, -3);
    } else {
      return str;
    }
}
let str1 = "Python";
let str2 = "JavaScript";
let str3 = "Hi";
console.log(moveLastThree(str1));  
console.log(moveLastThree(str2));  
console.log(moveLastThree(str3));  

// Question 4
function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
      return "Acute angle";
    } else if (angle === 90) {
      return "Right angle";
    } else if (angle > 90 && angle < 180) {
      return "Obtuse angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else {
      return "Invalid angle";
    }
}
console.log(angle_Type(47));  
console.log(angle_Type(90));   
console.log(angle_Type(145));  
console.log(angle_Type(180));  

// Question 5
function maxSumOfKConsecutive(arr, k) {
    if (arr.length < k) {
      return "Array length is less than k";
    }
    let maxSum = 0;
    let currentSum = 0;
    
    for (let i = 0; i < k; i++) {
      currentSum += arr[i];
    }
    maxSum = currentSum;
    
    for (let i = k; i < arr.length; i++) {
      currentSum = currentSum + arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}


console.log(maxSumOfKConsecutive([1, 2, 3, 14, 5], 2)) 
console.log(maxSumOfKConsecutive([2, 3, 5, 1, 6], 3))  
console.log(maxSumOfKConsecutive([9, 3, 5, 1, 7], 2))  

let arr = [9, 3, 5, 1, 7];  
let k = 2;  
const maxSum = maxSumOfKConsecutive(arr, k);
console.log("The maximum sum of k consecutive numbers is:", maxSum);
