const questions = [
    {
        question: "Какво е основното предназначение на HTML?",
        optionA: "За стилизиране на уеб страници.",
        optionB: "За дефиниране на структурата и съдържанието на уеб страници",
        optionC: "За програмиране на динамично поведение на уеб страници.",
        optionD: "За изпълнение на сървърни операции.",
        correctOption: "optionB"
    },

    {
        question: "Коя от следните технологии се използва за стилизиране на уеб страници?",
        optionA: "JavaScript",
        optionB: "PHP",
        optionC: "CSS",
        optionD: "HTML",
        correctOption: "optionC"

    },

    {
        question: "Кои са основните елементи на уеб дизайна?",
        optionA: "HTML и PHP",
        optionB: "CSS и JavaScript",
        optionC: "HTML, CSS и JavaScript",
        optionD: "JavaScript и Ruby",
        correctOption: "optionC"
    },

    {
        question: "Какво представлява JavaScript в уеб разработката?",
        optionA: "Език за структуриране на съдържанието на уеб страници.",
        optionB: "Език за стилизиране на уеб страници.",
        optionC: "Език за програмиране на динамично поведение на уеб страници.",
        optionD: "Език за сървърни операции.",
        correctOption: "optionC"
    },

    {
        question: "За какво се използва PHP, Python или Ruby в уеб разработката?",
        optionA: "За създаване на структура на уеб страници.",
        optionB: "За стилизиране на уеб страници.",
        optionC: "За програмиране на динамично поведение на уеб страници.",
        optionD: "За изпълнение на клиентски операции.",
        correctOption: "optionC"
    },

    {
        question: "Как се нарича методът за оптимизиране на уеб сайтове с цел подобряване на тяхната видимост в резултатите от търсенето?",
        optionA: "CSS Optimization",
        optionB: "HTML Optimization",
        optionC: "SEO (Search Engine Optimization)",
        optionD: "PHP Optimization",
        correctOption: "optionC"
    },

    {
        question: "Какъв е първият етап от жизнения цикъл на уеб проекта, който включва събиране на информация и анализ на изискванията?",
        optionA: "Design",
        optionB: "Development",
        optionC: "Planning",
        optionD: "Testing",
        correctOption: "optionC"
    },

    {
        question: "Как се нарича техниката, която позволява на уеб страници да се зареждат по-бързо чрез кеширане на ресурси на клиентската страна?",
        optionA: "Caching",
        optionB: "HTML Minification",
        optionC: "HTTP Compression",
        optionD: "Lazy Loading",
        correctOption: "optionA"
        
    },

    {
        question: "Какъв е популярен подход за разработване на уеб приложения, който включва разделение на приложението на клиентска и сървърна част?",
        optionA: "MVC (Model-View-Controller)",
        optionB: "ORM (Object-Relational Mapping)",
        optionC: "AJAX (Asynchronous JavaScript and XML)",
        optionD: "RESTful (Representational State Transfer)",
        correctOption: "optionA"

    },

    {
        question: `Каква е ролята на CMS (Content Management System) в уеб разработката?`,
        optionA: "За управление на съдържанието на уеб сайтове",
        optionB: "За дефиниране на структурата на уеб страници",
        optionC: "За програмиране на динамично поведение на уеб страници",
        optionD: "За изграждане на графични интерфейси на уеб приложения",
        correctOption: "optionA"
    },

{
        question: " Какво представлява моделът на цветовете RGB в уеб разработката?",
        optionA: "Модел за управление на съдържанието на уеб страниците.",
        optionB: "Модел за представяне на цветовете чрез комбинация от червен, зелен и син цвят.",
        optionC: "Модел за стилизиране на уеб страници.",
        optionD: "Модел за програмиране на динамично поведение на уеб страници.",
        correctOption: "optionB"

    },

    {
        question: `Каква е ролята на CMS (Content Management System) в уеб разработката?`,
        optionA: "За управление на съдържанието на уеб сайтове",
        optionB: "За дефиниране на структурата на уеб страници",
        optionC: "За програмиране на динамично поведение на уеб страници",
        optionD: "За изграждане на графични интерфейси на уеб приложения",
        correctOption: "optionA"
    },

{
        question: "Кой HTML таг се използва за създаване на заглавие на уеб страница?",
        optionA: "header",
        optionB: "h1",
        optionC: "title",
        optionD: "head",
        correctOption: "optionC"

    },

    {
        question: "Кой HTML таг се използва за създаване на връзка към друг уеб ресурс?",
        optionA: "a",
        optionB: "link",
        optionC: "href",
        optionD: "url",
        correctOption: "optionA"

    },
    {
        question: "Кой HTML таг се използва за създаване на списък с номерирани елементи?",
        optionA: "ul",
        optionB: "li",
        optionC: "list",
        optionD: "ol",
        correctOption: "optionD"

    },
    {
        question: "Кой HTML таг се използва за създаване на таблица?",
        optionA: "tr",
        optionB: "table",
        optionC: "td",
        optionD: "tab",
        correctOption: "optionB"

    },
    {
        question: "Кой HTML таг се използва за вграждане на мултимедийни съдържания като аудио, видео или изображения?",
        optionA: "embed",
        optionB: "media",
        optionC: "multimedia",
        optionD: "iframe",
        correctOption: "optionA"

    },
    {
        question: "Кой HTML таг се използва за създаване на форма за въвеждане на данни?",
        optionA: "form",
        optionB: "input",
        optionC: "data",
        optionD: "submit",
        correctOption: "optionA"

    },
    {
        question: "Кой таг се използва за създаване на заглавие на уеб страница или на секция от нея?",
        optionA: "header",
        optionB: "title",
        optionC: "h1",
        optionD: "section",
        correctOption: "optionC"

    },  
        {
        question: "Кой HTML таг се използва за създаване на неномериран списък?",
        optionA: "ol",
        optionB: "li",
        optionC: "ul",
        optionD: "list",
        correctOption: "optionC"

    },

        {
        question: "Кой HTML таг се използва за вграждане на снимка в уеб страница?",
        optionA: "img",
        optionB: "picture",
        optionC: "photo",
        optionD: "image",
        correctOption: "optionA"

    },


        {
        question: "Кой HTML таг се използваза дефиниране на ключови думи за търсачки (SEO)?",
        optionA: "meta",
        optionB: "keyword",
        optionC: "description",
        optionD: "tag",
        correctOption: "optionA"

    },


        {
        question: "Кой HTML таг се използва за представяне на текстово съдържание на уеб страница?",
        optionA: "text",
        optionB: "content",
        optionC: "paragraph",
        optionD: "p",
        correctOption: "optionD"

    },

        {
        question: "Кой HTML таг се използва за включване на външен скрипт в уеб страница?",
        optionA: "src",
        optionB: "script",
        optionC: "include",
        optionD: "exeternal",
        correctOption: "optionB"

    },

        {
        question: "Кой HTML таг се използва за определяне на заглавие на колона в таблица?",
        optionA: "th",
        optionB: "title",
        optionC: "td",
        optionD: "caption",
        correctOption: "optionA"

    },  
            {
        question: "Кой HTML таг се използва за създаване на хоризонтална линия за разделяне на секции в уеб страница?",
        optionA: "line",
        optionB: "hr",
        optionC: "div",
        optionD: "separator",
        correctOption: "optionB"

    },  
            {
        question: "Кой HTML таг се използва за определяне на контекст на уеб страницата за търсачки и социални мрежи?",
        optionA: "content",
        optionB: "meta",
        optionC: "description",
        optionD: "keyword",
        correctOption: "optionB"

    },  
            {
        question: "Как се задава цвета на фона на елемент в CSS?",
        optionA: "background-color",
        optionB: "color",
        optionC: "text-color",
        optionD: "bgcolor",
        correctOption: "optionA"

    },  
            {
        question: "Коя единица за измерване се използва за широчината на граница на елемент в CSS?",
        optionA: "px",
        optionB: "em",
        optionC: "cm",
        optionD: "pt",
        correctOption: "optionA"

    },  
            {
        question: "Каква е функцията за псевдокласа :hover в CSS?",
        optionA: "За стилизиране на елемент, когато е избран",
        optionB: "За стилизиранена елемент, когато е наведен с мишката върху него",
        optionC: "За стилизиране на елемент, когато е фокусиран",
        optionD: "За стилизиране на елемент, когато е скролиран в най-горната позиция",
        correctOption: "optionB"

    },  
            {
        question: "Какво CSS свойство се използва за задаване на шрифт?",
        optionA: "font",
        optionB: "font-family",
        optionC: "text-font",
        optionD: "font-style",
        correctOption: "optionB"

    },  
                {
        question: "Как се задава височината на елемент в CSS?",
        optionA: "height",
        optionB: "width",
        optionC: "size",
        optionD: "lenght",
        correctOption: "optionA"

    },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Лошa оценкa, продължавайте да практикувате."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Среднa оценкa, можете да се справите по-добре."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Отлично, продължавайте с добрата работа."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}