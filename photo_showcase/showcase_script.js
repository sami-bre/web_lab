const imageNames = ['me.jpg', 'me_and_yusuf.jpg', 'only_me.jpg', 'me_and_yabse.jpeg'];

// let oneButtonHTML = '<button id="nextBtn">Next</button>'
// let twoButtonHTML = '<button id="prevBtn">Previous</button><button id="nextBtn">Next</button>'

let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.querySelector('#nextBtn');
let oneButtonModeBtn = document.querySelector("#oneButtonBtn");
let twoButtonModeBtn = document.querySelector("#nextPrevBtn")
let image = document.querySelector("#image");
let buttonRowDiv = document.querySelector("#buttonRowDiv");
let index = 0;

// let's add listerners to the side buttons
oneButtonModeBtn.addEventListener("click", oneButtonMode),
twoButtonModeBtn.addEventListener("click", twoButtonMode)

// we'll be starting with two button mode so set the callbacks for the two buttons
prevBtn.addEventListener("click", goBack);
nextBtn.addEventListener("click", goNext);

function mod(n, m){
    return (( n % m ) + m ) % m;
}

function goBack() {
    index = mod(index-1, imageNames.length);
    console.log("go back with index: " + index);
    image.setAttribute("src", imageNames[index]);
}

function goNext() {
    index = mod(index+1, imageNames.length)
    console.log("go next with index: " + index);
    image.setAttribute("src", imageNames[index]);
}

function oneButtonMode() {
    // buttonRowDiv.innerHTML = oneButtonHTML;
    prevBtn.classList.add("hidden");
    // document.querySelector("#nextBtn").addEventListener("click", goNext);
}

function twoButtonMode() {
    // buttonRowDiv.innerHTML = twoButtonHTML;
    prevBtn.classList.remove("hidden");
    // document.querySelector("#prevBtn").addEventListener("click", goBack);
    // document.querySelector("#nextBtn").addEventListener("click", goNext);
}
// we start with two button mode so let's add events to the two buttons

