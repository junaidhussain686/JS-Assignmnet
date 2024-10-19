// ~Chapter No.14~ To // ~Chapter No.16~

//Question No-01

// var studentNames = []

// console.log(studentNames)

//Question No-02
// var studentNames= new Array

// console.log(studentNames)

//Question No-03

// var arr =['Hamza','Ali','Mustafa','Rizwan']

//Question No-04

// var numArray =[10,23,54,68]

//Question No-05

// var booleanArray =[true,false,true]

//Question No-06

// var mixedArray =['Faisal',20,true,65,'ali',false]

//Question No-07

// var degree = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PhD"];

// document.write(`<h1>Qualification:</h1>
//     <ol><li>${degree[0]}</li>
//     <li>${degree[1]}</li>
//     <li>${degree[2]}</li>
//     <li>${degree[3]}</li>
//     <li>${degree[4]}</li>
//     <li>${degree[5]}</li>
//     <li>${degree[6]}</li>
//     <li>${degree[7]}</li>
//     </ol>`);

//Question No-08

// var student =['Michael','John','Tony']

// var studentScore=[320,230,480]

// var percentage=(studentScore[0]/500)*100
// document.write(`<p>Score of ${student[0]} is ${studentScore[0]} Percentage:${percentage}%`)
// percentage=(studentScore[1]/500)*100
// document.write(`<p>Score of ${student[1]} is ${studentScore[1]} Percentage:${percentage}%`)
// percentage=(studentScore[2]/500)*100
// document.write(`<p>Score of ${student[2]} is ${studentScore[2]} Percentage:${percentage}%`)

//Question No-09
// a)
// var color =['Blue','Green','Violet','Red']
// var userName=prompt("What color you want to add to the beginning of the array?")
// color.unshift(userName)
// console.log(color)

// b)
// var color =['Blue','Green','Violet','Red']
// var userName=prompt("What color you want to add to the beginning of the array?")
// color.push(userName)
// console.log(color)

// c)
// var color =['Blue','Green','Violet','Red']
// var userName=prompt("What color you want to add to the beginning of the array?")
// var usercolor=prompt("What color you want to add to the beginning of the array?")
// color.unshift(userName)
// color.unshift(usercolor)
// console.log(color)

// d)
// var originalarr =['Blue','Green','Violet','Red']
// console.log(originalarr)
// var updatedarr = originalarr.shift(originalarr)
// console.log(updatedarr)

// e)

// var originalarr =['Blue','Green','Violet','Red']
// console.log(originalarr)
// var updatedarr = originalarr.pop(originalarr)
// console.log(updatedarr)

// f)
var originalarr =['Blue','Green','Violet','Red']
var desiredIndex =+prompt("Which Index you want to add Color ")
var desiredColor =prompt("Which Color you want to add to the array")
originalarr.splice(desiredIndex,0,desiredColor)
console.log(originalarr)

// g)
// var originalarr =['Blue','Green','Violet','Red']
// var desiredIndex =+prompt("Which Index you want to delete Color ")
// var desiredColor =+prompt("Which Color you want to delete from the array")
// originalarr.splice(desiredIndex,desiredColor)
// console.log(originalarr)

//Question No-10
// var studentScore =[320,230,450,120,250]
// var sortedArr = studentScore.sort()
// console.log(studentScore)

//Question No-11
// var citiesList=['Karachi','Lahore','Islamabad','Quetta','Peshawar']
// console.log(citiesList)
// var selectedCities = citiesList.slice(2,4)
// console.log(selectedCities)

//Question No-12
// var arr=['This','is','my','cat'];
// var updatedArr =arr.join(' ')
// document.write(updatedArr)

//Question No-13

// var fifoArr=['Keyboard','Mouse','Printer','Monitor']
// console.log(fifoArr)
// fifoArr.shift(fifoArr)
// console.log(fifoArr)
// fifoArr.shift(fifoArr)
// console.log(fifoArr)
// fifoArr.shift(fifoArr)
// console.log(fifoArr)
// fifoArr.shift(fifoArr)
// console.log(fifoArr)
// fifoArr.shift(fifoArr)
// console.log(fifoArr)

//Question No-14
// var lifoArr=['Keyboard','Mouse','Printer','Monitor']
// console.log(lifoArr)
// lifoArr.pop(lifoArr)
// console.log(lifoArr)
// lifoArr.pop(lifoArr)
// console.log(lifoArr)
// lifoArr.pop(lifoArr)
// console.log(lifoArr)
// lifoArr.pop(lifoArr)
// console.log(lifoArr)
// lifoArr.pop(lifoArr)
// console.log(lifoArr)

//Question No-15
// var mobileArray = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write(`<nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">${mobileArray[0]}</a></li>
//             <li><a class="dropdown-item" href="#">${mobileArray[1]}</a></li>
//             <li><a class="dropdown-item" href="#">${mobileArray[2]}</a></li>
//             <li><a class="dropdown-item" href="#">${mobileArray[3]}</a></li>
//             <li><a class="dropdown-item" href="#">${mobileArray[4]}</a></li>
//             <li><a class="dropdown-item" href="#">${mobileArray[5]}</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>`);
