// ~Chapter No.01~

//Question No-01
// var a=10
// document.write("<h1> Result </h1>"+"<br>"+"The value of a is: "+a+"<br>"+"...................................."+"<br>"+"<br>"+"<br>")
// ++a
// document.write("The Value of ++a is : "+a+"<br>"+"Now the value of a is : "+a+"<br>"+"<br>"+"<br>")

// document.write("The Value of a++ is : "+a+"<br>")
// a++
// document.write("Now the value of a is : "+a+"<br>"+"<br>"+"<br>")

// --a
// document.write("The Value of --a is : "+a+"<br>")
// document.write("Now the value of a is : "+a+"<br>"+"<br>"+"<br>")

// document.write("The Value of a-- is : "+a+"<br>")
// a--
// document.write("Now the value of a is : "+a+"<br>"+"<br>"+"<br>")

//Question No-02
// var a=2
// var b=1

// var result= --a - --b + ++b + b--
//             //1 -  0  +  1  + 1
// document.write("a is "+a+"<br>"+"b is "+b+"<br>"+"result is "+result)

//Question No-03
// var name=prompt("Please Enter Your Name: ")

// alert("Welcome "+name+ " "+"To Our Website")


//Question No-05

// var table = +prompt ("Enter the value of table");
// document.write ("<b>"+"Tables of "  + table+ "<br></br>")
// document.write (table + "  "+" x "+ "1" + "  "+"=" +"  "+ table*1 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "2" + "  "+"=" +"  "+ table*2 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "3" + "  "+"=" +"  "+ table*3 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "4" + "  "+"=" +"  "+ table*4 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "5" + "  "+"=" +"  "+ table*5 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "6" + "  "+"=" +"  "+ table*6 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "7" + "  "+"=" +"  "+ table*7 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "8" + "  "+"=" +"  "+ table*8 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "9" + "  "+"=" +"  "+ table*9 + "<br>" +"<br>")
// document.write (table + "  "+" x "+ "10" + "  "+"=" +"  "+ table*10 + "<br>")


//Question No-06

var subjectOne = prompt("Enter the name of subject One ");
var subjectOnemarks = +prompt("Enter the Obtained marks of subject One");

var subjectTwo = prompt("Enter the name of subject Two ");
var subjectTwomarks = +prompt("Enter the Obtained marks of subject Two");

var subjectThree = prompt("Enter the name of subject Three ");
var subjectThreemarks = +prompt("Enter the Obtained marks of subject Three");

var eachSubjectTotal = 100;

var SubjectOnePer = (subjectOnemarks / eachSubjectTotal) * 100;
var SubjectTwoPer = (subjectTwomarks / eachSubjectTotal) * 100;
var SubjectThreePer = (subjectThreemarks / eachSubjectTotal) * 100;

var totalMarks = 300;
var totalObtainedmarks = subjectOnemarks + subjectTwomarks + subjectThreemarks;

var Percentage = (totalObtainedmarks / totalMarks) * 100;

document.write(`
    <table border="1" cellpadding="10">
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${subjectOne}</td>
            <td>${eachSubjectTotal}</td>
            <td>${subjectOnemarks}</td>
            <td>${SubjectOnePer}%</td>
        </tr>
        <tr>
            <td>${subjectTwo}</td>
            <td>${eachSubjectTotal}</td>
            <td>${subjectTwomarks}</td>
            <td>${SubjectTwoPer}%</td>
        </tr>
        <tr>
            <td>${subjectThree}</td>
            <td>${eachSubjectTotal}</td>
            <td>${subjectThreemarks}</td>
            <td>${SubjectThreePer}%</td>
        </tr>
        <tr>
            <th>Total</th>
            <th>${totalMarks}</th>
            <th>${totalObtainedmarks}</th>
            <th>${Percentage}%</th>
        </tr>
    </table>
`)  



