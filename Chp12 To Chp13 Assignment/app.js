// ~Chapter No.12~

//Question No-01

// var asciiValue=prompt("Enter a Character:")

// if(asciiValue>='48' && asciiValue<='57'){
//     alert("This is a Number")
// }
// else if(asciiValue>='65' && asciiValue<='90'){
//     alert("This is a Uppercase Letter")
// }
// else if(asciiValue>='97' && asciiValue<='122'){
//     alert("This is a Lowercase Letter")
// }

//Question No-02

// var num1 =+prompt("Enter first Integer ")
// var num2 =+prompt("Enter Second Integer ")


// if(num1 === num2){
//     alert("Both Integers are Equal")
// }
// else if(num1 >num2){
//     alert("num1 is greater than num2 ")
// }
// else{
//     alert("num2 is greater than num1 ")
// }

//Question No-03
// var num=+prompt("Enter a Number :")

// if(num === 0){
//     alert("This is Zero ")
// }
// else if(num > 0 ){
//     alert("This is a Positive Number")
// }
// else{
//     alert("This is a Negative Number")   
// }

//Question No-04
// var char=prompt("Enter a Character")

// if(char ==='a' || char==='e' || char==='i' ||char ==='o' ||char ==='u'){
//     alert("True")
// }
// else{
//     alert("False")
// }

//Question No-05
var password=prompt("Enter your Password")
var correctPass='admin12'

if(password === ""){
    alert("Please Enter Your Password")
}
else if(password === correctPass){
    alert("“Correct! The password you entered matches the original password”.")
}
else{
    alert("Incorrect Password")
}


//Question No-06

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting)
// }

//Question No-06
// var userTime=prompt("Enter the time in 24 hour format ")

// if(userTime >='00:00' && userTime <'12:00'){
//     alert("Good Morning")
// }
// else if(userTime>='12:00' && userTime < '17:00'){
//     alert("Good Afternoon")
// }
// else if(userTime>='17:00' && userTime < '21:00'){
//     alert("Good Evening")
// }
// else if(userTime>='21:00' && userTime <= '23:59'){
//     alert("Good Night")
// }