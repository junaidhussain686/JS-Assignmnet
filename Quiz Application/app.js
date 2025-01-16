function signUp() {
  var signUpName = document
    .getElementById("NameFormControlInput1")
    .value.trim();
  var signUpEmail = document.getElementById("exampleInputEmail2").value.trim();
  var signUpPass = document
    .getElementById("exampleInputPassword2")
    .value.trim();

  if (signUpName === "") {
    alert("Enter Name");
  } else if (signUpEmail === "") {
    alert("Enter Email");
  } else if (signUpPass === "") {
    alert("Enter Password");
  } else {
    localStorage.setItem("name", signUpName);
    localStorage.setItem("email", signUpEmail);
    localStorage.setItem("pass", signUpPass);
    Swal.fire({
      title: "Signup Successfully!",
      icon: "success",
    });
    setTimeout(() => {
      var modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal1")
      );
      if (modal) modal.hide();
    }, 300);
  }
}

function login() {
  var logEmail = document.getElementById("exampleInputEmail1").value.trim();
  var logPass = document.getElementById("exampleInputPassword1").value.trim();

  if (!logEmail || !logPass) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all the fields!",
    });
    return;
  }
  var storedEmail = localStorage.getItem("email");
  var storedPass = localStorage.getItem("pass");

  if (logEmail === storedEmail) {
    if (logPass === storedPass) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Redirecting...",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "welcome.html";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Please try again!",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please try again!",
    });
  }
}

var body = document.body;
var switchBtn = document.getElementById("dark");
var ICONS = {
  light: '<i class="fa-regular fa-moon"></i>',
  dark: '<i class="fa-solid fa-moon"></i>',
};

function Dark() {
  if (body.classList.contains("darkMode")) {
    body.classList.remove("darkMode");
    localStorage.setItem("theme", "light");
    switchBtn.innerHTML = ICONS.light;
  } else {
    body.classList.add("darkMode");
    localStorage.setItem("theme", "dark");
    switchBtn.innerHTML = ICONS.dark;
  }
}
function theme() {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("darkMode");
    switchBtn.innerHTML = ICONS.dark;
  } else {
    switchBtn.innerHTML = ICONS.light;
  }
}
window.onload = theme;
var htmlCssQuiz = [
  {
    question: "What does HTML stand for?",
    option1: "Hyper Text Markup Language",
    option2: "Home Tool Markup Language",
    option3: "Hyperlinks and Text Markup Language",
    option4: "High-level Text Machine Language",
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which property in CSS is used to change the background color?",
    option1: "color",
    option2: "background-color",
    option3: "bg-color",
    option4: "background",
    answer: "background-color",
  },
  {
    question: "What is the purpose of the 'box-shadow' property in CSS?",
    option1: "To add shadows around an element",
    option2: "To add borders around an element",
    option3: "To set an element's width",
    option4: "To center an element",
    answer: "To add shadows around an element",
  },
  {
    question: "Which unit is NOT relative in CSS?",
    option1: "em",
    option2: "rem",
    option3: "px",
    option4: "%",
    answer: "px",
  },
  {
    question: "What does the 'overflow' property in CSS control?",
    option1: "How content fits inside a container",
    option2: "Visibility of elements",
    option3: "How content outside a container is handled",
    option4: "How elements float",
    answer: "How content outside a container is handled",
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    option1: "link",
    option2: "a",
    option3: "href",
    option4: "nav",
    answer: "anchor",
  },
  {
    question: "What does the 'z-index' property in CSS control?",
    option1: "Stacking order of elements",
    option2: "Color depth",
    option3: "Opacity of elements",
    option4: "Visibility of elements",
    answer: "Stacking order of elements",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    option1: "break",
    option2: "lb",
    option3: "br",
    option4: "hr",
    answer: "br",
  },
  {
    question: "Which attribute is used in HTML to specify an inline CSS style?",
    option1: "class",
    option2: "style",
    option3: "css",
    option4: "id",
    answer: "style",
  },
  {
    question: "What does the <ul> tag in HTML stand for?",
    option1: "Underlined List",
    option2: "Upper Level List",
    option3: "Unordered List",
    option4: "Universal List",
    answer: "Unordered List",
  },
  {
    question: "What is the default position of an HTML element?",
    option1: "absolute",
    option2: "relative",
    option3: "static",
    option4: "fixed",
    answer: "static",
  },
  {
    question: "Which tag is used to define a table in HTML?",
    option1: "tr",
    option2: "td",
    option3: "table",
    option4: "th",
    answer: "table",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    option1: "Defines metadata about an HTML document",
    option2: "Creates hyperlinks",
    option3: "Adds images to the document",
    option4: "Defines lists",
    answer: "Defines metadata about an HTML document",
  },
  {
    question:
      "Which CSS property is used to specify the space between letters?",
    option1: "line-height",
    option2: "letter-spacing",
    option3: "text-spacing",
    option4: "font-spacing",
    answer: "letter-spacing",
  },
  {
    question: "Which property is used to create animations in CSS?",
    option1: "transition",
    option2: "transform",
    option3: "animation",
    option4: "keyframes",
    answer: "animation",
  },
];

var aiMlQuiz = [
  {
    question: "What does AI stand for?",
    option1: "Automated Intelligence",
    option2: "Artificial Intelligence",
    option3: "Algorithmic Intelligence",
    option4: "Applied Intelligence",
    answer: "Artificial Intelligence",
  },
  {
    question: "What is the goal of machine learning?",
    option1: "Optimization",
    option2: "Automation",
    option3: "Prediction",
    option4: "Interaction",
    answer: "Prediction",
  },
  {
    question: "What is supervised learning?",
    option1: "Training on labeled data",
    option2: "Training on unlabeled data",
    option3: "Reinforced training",
    option4: "Unsupervised training",
    answer: "Training on labeled data",
  },
  {
    question: "What does 'unsupervised learning' focus on?",
    option1: "Clusters",
    option2: "Labels",
    option3: "Predictions",
    option4: "Optimization",
    answer: "Clusters",
  },
  {
    question: "What does NLP stand for?",
    option1: "Natural Level Parsing",
    option2: "Natural Language Processing",
    option3: "Neutral Layer Processing",
    option4: "None",
    answer: "Natural Language Processing",
  },
  {
    question: "What does overfitting mean?",
    option1: "Poor generalization",
    option2: "High accuracy",
    option3: "Excessive training",
    option4: "Balanced training",
    answer: "Poor generalization",
  },
  {
    question: "Which is NOT an activation function?",
    option1: "ReLU",
    option2: "Sigmoid",
    option3: "Tanh",
    option4: "KNN",
    answer: "KNN",
  },
  {
    question: "What is a perceptron?",
    option1: "Neuron model",
    option2: "Classifier",
    option3: "Optimizer",
    option4: "Activation function",
    answer: "Neuron model",
  },
  {
    question: "What does CNN specialize in?",
    option1: "Images",
    option2: "Text",
    option3: "Audio",
    option4: "Graphs",
    answer: "Images",
  },
  {
    question: "Which algorithm is best for clustering?",
    option1: "K-means",
    option2: "Linear Regression",
    option3: "Decision Tree",
    option4: "SVM",
    answer: "K-means",
  },
  {
    question: "What is the key task of regression?",
    option1: "Continuous value prediction",
    option2: "Categorization",
    option3: "Clustering",
    option4: "Model evaluation",
    answer: "Continuous value prediction",
  },
  {
    question: "What does reinforcement learning rely on?",
    option1: "Rewards",
    option2: "Labels",
    option3: "Clusters",
    option4: "Samples",
    answer: "Rewards",
  },
  {
    question: "What is a hyperparameter in ML?",
    option1: "Model tuning variable",
    option2: "Training sample",
    option3: "Data attribute",
    option4: "Result metric",
    answer: "Model tuning variable",
  },
  {
    question: "What is dimensionality reduction?",
    option1: "Feature compression",
    option2: "Model optimization",
    option3: "Sample grouping",
    option4: "Weight initialization",
    answer: "Feature compression",
  },
  {
    question: "What is backpropagation used for?",
    option1: "Training models",
    option2: "Data collection",
    option3: "Gradient computation",
    option4: "Cluster mapping",
    answer: "Gradient computation",
  },
];

var pythonQuiz = [
  {
    question: "What does Python primarily emphasize?",
    option1: "Performance",
    option2: "Readability",
    option3: "Compilation",
    option4: "Low-level programming",
    answer: "Readability",
  },
  {
    question: "Which symbol is used for comments in Python?",
    option1: "#",
    option2: "//",
    option3: "/* */",
    option4: "**",
    answer: "#",
  },
  {
    question: "How do you create a dictionary?",
    option1: "[]",
    option2: "{}",
    option3: "()",
    option4: "<>",
    answer: "{}",
  },
  {
    question: "Which keyword defines a function?",
    option1: "def",
    option2: "function",
    option3: "define",
    option4: "create",
    answer: "def",
  },
  {
    question: "What is the correct file extension for Python files?",
    option1: ".python",
    option2: ".py",
    option3: ".pyt",
    option4: ".pt",
    answer: ".py",
  },
  {
    question: "Which operator is used for exponentiation?",
    option1: "**",
    option2: "^",
    option3: "*",
    option4: "exp()",
    answer: "**",
  },
  {
    question: "Which method adds an element to a list?",
    option1: "append()",
    option2: "insert()",
    option3: "add()",
    option4: "push()",
    answer: "append()",
  },
  {
    question: "How do you handle exceptions in Python?",
    option1: "try-except",
    option2: "try-catch",
    option3: "try-finally",
    option4: "try-error",
    answer: "try-except",
  },
  {
    question: "Which loop is used for iteration over sequences?",
    option1: "for",
    option2: "while",
    option3: "foreach",
    option4: "loop",
    answer: "for",
  },
  {
    question: "What does `len()` function return?",
    option1: "Size",
    option2: "Length",
    option3: "Index",
    option4: "Range",
    answer: "Length",
  },
  {
    question: "What is a tuple in Python?",
    option1: "Immutable list",
    option2: "Mutable list",
    option3: "Dynamic object",
    option4: "Custom data type",
    answer: "Immutable list",
  },
  {
    question: "Which keyword is used to import modules?",
    option1: "import",
    option2: "include",
    option3: "require",
    option4: "load",
    answer: "import",
  },
  {
    question: "What is the output of `bool(0)`?",
    option1: "True",
    option2: "False",
    option3: "0",
    option4: "None",
    answer: "False",
  },
  {
    question: "How do you declare a set in Python?",
    option1: "[]",
    option2: "()",
    option3: "{}",
    option4: "set()",
    answer: "set()",
  },
  {
    question: "What does `is` keyword check?",
    option1: "Identity",
    option2: "Equality",
    option3: "Comparison",
    option4: "Index",
    answer: "Identity",
  },
];
var count = 0;
var score = 0;
var currentQuiz = [];
var selectWindow = document.getElementById("selectWindow");
var quizWindow = document.getElementById("quizWindow");
var quizOptions = document.getElementsByName("option");
var quizWin = document.getElementById("quizWindow");
var resultWin = document.getElementById("resultWindow");
var resultQuiz = document.getElementById("resultQuizName");
var noOfQues = document.getElementById("numQues");
var correctAns = document.getElementById("score");
var percentagevalue = document.getElementById("percentage");
var comment = document.getElementById("comment");
function selectQuiz(type) {
  localStorage.setItem("selectedQuiz", type);
  if (type === "html") {
    currentQuiz = htmlCssQuiz;
  } else if (type === "python") {
    currentQuiz = pythonQuiz;
  } else if (type === "ai") {
    currentQuiz = aiMlQuiz;
  }
  load();
  selectWindow.style.display = "none";
  quizWindow.style.display = "block";
}

function load() {
  var question = document.getElementById("question");
  question.innerHTML = currentQuiz[count].question;
  var label1 = document.getElementById("label1");
  label1.innerHTML = currentQuiz[count].option1;
  var label2 = document.getElementById("label2");
  label2.innerHTML = currentQuiz[count].option2;
  var label3 = document.getElementById("label3");
  label3.innerHTML = currentQuiz[count].option3;
  var label4 = document.getElementById("label4");
  label4.innerHTML = currentQuiz[count].option4;
  var option1 = document.getElementById("option1");
  option1.value = currentQuiz[count].option1;
  var option2 = document.getElementById("option2");
  option2.value = currentQuiz[count].option2;
  var option3 = document.getElementById("option3");
  option3.value = currentQuiz[count].option3;
  var option4 = document.getElementById("option4");
  option4.value = currentQuiz[count].option4;
}

function next() {
  var radiocheck = false;
  for (var i = 0; i < quizOptions.length; i++) {
    if (quizOptions[i].checked) {
      radiocheck = true;
      if (quizOptions[i].value === currentQuiz[count].answer) {
        score++;
      }
      count++;
      quizOptions[i].checked = false;
      if (count < currentQuiz.length) {
        load();
      } else {
        quizWin.style.display = "none";
        resultWin.style.display = "block";
        resultQuiz.style.color = "black";
        resultQuiz.innerHTML =
          localStorage.getItem("selectedQuiz").toUpperCase() +
          " Quiz Completed!";
        noOfQues.innerHTML = currentQuiz.length;
        noOfQues.style.color = "black";
        correctAns.innerHTML = score;
        var percentage = (score / currentQuiz.length) * 100;
        percentagevalue.innerHTML = Math.round(percentage) + "%";
        if (percentage <= 33) {
          comment.innerHTML = "You are Failed!";
          comment.style.color = "red";
          percentagevalue.style.border = "1px solid red";
        }
        if (percentage > 33) {
          comment.innerHTML = "Congratulations you are pass!";
          comment.style.color = "green";
          percentagevalue.style.border = "1px solid green";
        }
        alert("quiz complete");
        currentQuiz = [];
      }
    }
  }
  if (!radiocheck) {
    alert("select option");
  }
}
