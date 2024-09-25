// ~Chapter No.09~

//Question No-01

// var cityName=prompt("Enter your City")

// if(cityName==='karachi'){
//     alert("Welcome To The City of Lights")
// }

//Question No-02

// var gender=prompt("Enter your gender")

// if(gender==='male'){
//     alert("Good Morning Sir")
// }
// else{
//     alert("Good Morning Ma'am")
// }

//Question No-03

// var trafficSignal=prompt("Enter the Color of the Signal")

// if(trafficSignal==='red'){
//     alert("Must Stop")
// }
// else if(trafficSignal==='yellow'){
//     alert("Ready To Move")
// }
// else{
//     alert("Move Now")
// }

//Question No-04
// var remainingFuel=+prompt("Enter the remaining fuel in car in litres")

// if(remainingFuel<0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("Don't need to refill")
// }

//Question No-05
// a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// Output:given condition for variable a is true

// b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Output:No Output

// c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// Output: condition 2 is true , condition 4 is true

// d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// Output: The cost equals

// e)
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// Output: True

// f)
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Output: car is smaller than cat


//Question No-06

// var subjectOne=+prompt("Enter First Subject Marks")
// var subjectTwo=+prompt("Enter Second Subject Marks")
// var subjectThree=+prompt("Enter Third Subject Marks")

// var obtainedMarks=subjectOne+subjectTwo+subjectThree
// var totalMarks=300

// var percentage=(obtainedMarks/totalMarks)*100

// var grade;
// var remarks;


// if(percentage>=80){
//     grade='A-One'
//     remarks='Excellent'
// }
// else if(percentage>=70){
//     grade='A'
//     remarks='Good'
// }
// else if(percentage>=60){
//     grade='B'
//     remarks='You need to improve'
// }
// else{
//     grade='Fail'
//     remarks='Sorry'
// }

// document.write(`<h1> Marks Sheet</h1> <br />
// Total Marks:${totalMarks}<br />
// Marks Obtained:${obtainedMarks} <br />
// Percentage:${percentage}%<br />
// Grade:${grade} <br />
// Remarks:${remarks}`)


//Question No-07
// var a=+prompt("Enter the Secret Number Ranging 1 to 10")
// var userNumber=+prompt("Enter the Number")

// if(userNumber===a){
//     alert("Bingo! Correct Answer")
// }
// else if(userNumber===++a) {
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Wrong Guess  ")
// }

//Question No-08
// var num=+prompt("Enter the number")

// if(num%3===0){
//     alert("It is divisible by 3")
// }
// else{
//     alert("It is not divisible by 3")
// }

//Question No-09
// var num=+prompt("Enter the number")

// if(num%2==0){
//     alert("It is an Even Number")
// }
// else{
//     alert("It is an Odd Number")
// }

//Question No-010

// var temp=+prompt("Enter the temperature")

// if(temp>40){
//     alert("It's too hot Outside")
// }
// else if(temp>30){
//     alert("The Weather today is Normal")
// }
// else if(temp>20){
//     alert("Today’s Weather is cool.")
// }
// else if(temp>10){
//     alert("OMG!Today's weather is so Cool")
// }

//Question No-011

// var firstNum=+prompt("Enter the First Number")

// var SecondNum=+prompt("Enter the Second Number")

// var operator=prompt("Enter the Operator")

// if(operator==='+'){
//     alert(firstNum+SecondNum)
// }
// else if(operator==='-'){
//     alert(firstNum-SecondNum)
    
// }
// else if(operator==='*'){
//     alert(firstNum*SecondNum)
// } 
// else if(operator==='/'){
//     alert(firstNum/SecondNum)
   
// }
// else if(operator==='%'){
//     alert(firstNum%SecondNum)
    
// }

