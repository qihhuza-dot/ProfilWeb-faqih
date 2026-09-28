// ==========================================
// LOADING
// ==========================================

const loadingScreen =
    document.getElementById("loadingScreen");

function hideLoading() {

    if (!loadingScreen) return;

    loadingScreen.classList.add("hide");

    document.body.classList.remove("loading");
}

window.addEventListener("load", () => {
    setTimeout(hideLoading, 700);
});

setTimeout(hideLoading, 3000);


// ==========================================
// CURSOR LIGHT
// ==========================================

const cursorLight =
    document.querySelector(".cursor-light");

document.addEventListener("mousemove", (event) => {

    if (!cursorLight) return;

    cursorLight.style.left =
        event.clientX + "px";

    cursorLight.style.top =
        event.clientY + "px";
});


// ==========================================
// LOGO
// ==========================================
// Tidak ada kode untuk menggerakkan logo.
// Logo kiri atas tetap diam.


// ==========================================
// CARD 3D
// ==========================================

document
    .querySelectorAll(".card")
    .forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateX =
                    (y - rect.height / 2) / 18;

                const rotateY =
                    (rect.width / 2 - x) / 18;

                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `perspective(800px)
                     rotateX(0deg)
                     rotateY(0deg)
                     translateY(0)`;
            }
        );

    });


// ==========================================
// TYPING
// ==========================================

const typingText =
    document.getElementById("typingText");

const typingMessages = [

    'Console.WriteLine("Welcome to PPLG");',

    'string skill = "Programming";',

    'CreateProject("PPLG");',

    'string future = "Developer";',

    'StartCoding();'

];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;


function typingAnimation() {

    if (!typingText) return;

    const currentMessage =
        typingMessages[messageIndex];


    if (!deleting) {

        typingText.textContent =
            currentMessage.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentMessage.length
        ) {

            deleting = true;

            setTimeout(
                typingAnimation,
                1800
            );

            return;
        }

    } else {

        typingText.textContent =
            currentMessage.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            messageIndex =
                (messageIndex + 1) %
                typingMessages.length;
        }
    }


    setTimeout(
        typingAnimation,
        deleting ? 45 : 75
    );
}

typingAnimation();


// ==========================================
// BACK TO TOP
// ==========================================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// ==========================================
// C# QUIZ
// ==========================================

const questions = [

    {
        question:
            "Apa output dari kode berikut?",

        code:
`int x = 5;
int y = 3;

Console.WriteLine(x + y);`,

        options: [
            "2",
            "8",
            "15",
            "53"
        ],

        answer: 1
    },


    {
        question:
            "Apa output dari kode berikut?",

        code:
`int x = 10;

if (x > 5)
{
    Console.WriteLine("A");
}
else
{
    Console.WriteLine("B");
}`,

        options: [
            "A",
            "B",
            "10",
            "Error"
        ],

        answer: 0
    },


    {
        question:
            "Berapa nilai akhir dari x?",

        code:
`int x = 5;

x += 3;
x *= 2;`,

        options: [
            "10",
            "13",
            "16",
            "20"
        ],

        answer: 2
    },


    {
        question:
            "Apa output dari kode berikut?",

        code:
`for (int i = 0; i < 3; i++)
{
    Console.WriteLine(i);
}`,

        options: [
            "0 1 2",
            "1 2 3",
            "0 1 2 3",
            "3"
        ],

        answer: 0
    },


    {
        question:
            "Apa nilai dari hasil?",

        code:
`int a = 10;
int b = 3;

int hasil = a / b;`,

        options: [
            "3",
            "3.33",
            "4",
            "30"
        ],

        answer: 0
    },


    {
        question:
            "Apa output dari kode berikut?",

        code:
`string nama = "PPLG";

Console.WriteLine(
    nama.Length
);`,

        options: [
            "3",
            "4",
            "5",
            "PPLG"
        ],

        answer: 1
    },


    {
        question:
            "Apa hasil dari kode berikut?",

        code:
`bool a = true;
bool b = false;

Console.WriteLine(a && b);`,

        options: [
            "true",
            "false",
            "1",
            "Error"
        ],

        answer: 1
    },


    {
        question:
            "Apa output dari kode berikut?",

        code:
`int[] angka = { 2, 4, 6 };

Console.WriteLine(
    angka[1]
);`,

        options: [
            "2",
            "4",
            "6",
            "1"
        ],

        answer: 1
    },


    {
        question:
            "Apa nilai dari hasil?",

        code:
`int nilai = 80;

string hasil =
    nilai >= 75
    ? "Lulus"
    : "Tidak Lulus";`,

        options: [
            "80",
            "true",
            "Lulus",
            "Tidak Lulus"
        ],

        answer: 2
    },


    {
        question:
            "Berapa hasil akhir dari angka?",

        code:
`int angka = 1;

while (angka < 5)
{
    angka++;
}`,

        options: [
            "4",
            "5",
            "6",
            "1"
        ],

        answer: 1
    }

];


// ==========================================
// ELEMENT QUIZ
// ==========================================

const startGame =
    document.getElementById("startGame");

const restartGame =
    document.getElementById("restartGame");

const gameStart =
    document.getElementById("gameStart");

const gamePlay =
    document.getElementById("gamePlay");

const gameOver =
    document.getElementById("gameOver");

const scoreElement =
    document.getElementById("score");

const timeElement =
    document.getElementById("time");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const questionCode =
    document.getElementById("questionCode");

const quizOptions =
    document.getElementById("quizOptions");

const finalScore =
    document.getElementById("finalScore");

const resultMessage =
    document.getElementById("resultMessage");


// ==========================================
// VARIABLE QUIZ
// ==========================================

let currentQuestion = 0;

let score = 0;

let time = 20;

let timer = null;

let gameRunning = false;

let questionLocked = false;

let quizQuestions = [];


// ==========================================
// SHUFFLE
// ==========================================

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }

    return array;
}


// ==========================================
// START
// ==========================================

function startQuiz() {

    currentQuestion = 0;

    score = 0;

    time = 20;

    gameRunning = true;

    questionLocked = false;

    quizQuestions =
        shuffle([...questions]);


    scoreElement.textContent =
        score;

    timeElement.textContent =
        time;


    gameStart.style.display =
        "none";

    gameOver.style.display =
        "none";

    gamePlay.style.display =
        "block";


    showQuestion();
}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

        if (!gameRunning) return;

        time--;

        timeElement.textContent =
            time;


        if (time <= 0) {

            clearInterval(timer);

            if (!questionLocked) {

                questionLocked = true;

                nextQuestion();
            }
        }

    }, 1000);
}


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

    clearInterval(timer);

    questionLocked = false;

    time = 20;

    timeElement.textContent =
        time;


    const question =
        quizQuestions[currentQuestion];


    questionNumber.textContent =
        `${currentQuestion + 1}/10`;


    questionText.textContent =
        question.question;


    questionCode.textContent =
        question.code;


    quizOptions.innerHTML =
        "";


    const options =
        question.options.map(
            (text, index) => ({
                text,
                index
            })
        );


    shuffle(options);


    options.forEach((option) => {

        const button =
            document.createElement("button");

        button.className =
            "quiz-option";

        button.textContent =
            option.text;


        button.addEventListener(
            "click",
            () => {

                selectAnswer(
                    option.index,
                    button
                );

            }
        );


        quizOptions.appendChild(
            button
        );

    });


    startTimer();
}


// ==========================================
// ANSWER
// ==========================================

function selectAnswer(
    selected,
    clickedButton
) {

    if (
        !gameRunning ||
        questionLocked
    ) {
        return;
    }


    questionLocked = true;

    clearInterval(timer);


    const question =
        quizQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach((button) => {
        button.disabled = true;
    });


    if (
        selected ===
        question.answer
    ) {

        clickedButton.classList.add(
            "correct"
        );

        score += 100;

        scoreElement.textContent =
            score;

    } else {

        clickedButton.classList.add(
            "wrong"
        );


        buttons.forEach((button) => {

            const index =
                question.options.indexOf(
                    button.textContent
                );


            if (
                index ===
                question.answer
            ) {

                button.classList.add(
                    "correct"
                );
            }

        });

    }


    setTimeout(() => {
        nextQuestion();
    }, 900);
}


// ==========================================
// NEXT
// ==========================================

function nextQuestion() {

    clearInterval(timer);

    currentQuestion++;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        endQuiz();

        return;
    }


    showQuestion();
}


// ==========================================
// END
// ==========================================

function endQuiz() {

    gameRunning = false;

    questionLocked = true;

    clearInterval(timer);


    gamePlay.style.display =
        "none";

    gameOver.style.display =
        "block";


    finalScore.textContent =
        score;


    if (score >= 900) {

        resultMessage.textContent =
            "🔥 Luar biasa! Pemahaman C# kamu sangat bagus.";

    } else if (score >= 700) {

        resultMessage.textContent =
            "⚡ Bagus! Tinggal sedikit lagi.";

    } else if (score >= 500) {

        resultMessage.textContent =
            "💻 Lumayan! Terus latihan coding.";

    } else {

        resultMessage.textContent =
            "📚 Jangan menyerah, terus belajar C#!";
    }

}


// ==========================================
// BUTTON
// ==========================================

if (startGame) {

    startGame.addEventListener(
        "click",
        startQuiz
    );
}

if (restartGame) {

    restartGame.addEventListener(
        "click",
        startQuiz
    );
}