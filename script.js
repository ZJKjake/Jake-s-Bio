var age = 17;
var sunset = true;
var favColor = "blue";

function toGrey() {
    var allText = document.querySelectorAll("body *");
    for (var i = 0; i < allText.length; i++) {
        allText[i].style.color = "grey";
    }
}

function toBlack() {
    var allText = document.querySelectorAll("body *");
    for (var i = 0; i < allText.length; i++) {
        allText[i].style.color = "black";
    }
}

if (age >= 18) {
    toBlack();
} 
else {
    toGrey(); 
}

var funFact = document.getElementById("funFact");
if (sunset){
    funFact.innerHTML="<h3>Some Facts About Me</h3><p>I love to walk around outside during sunset!</p>";
}

var header = document.querySelector("header h1");

function highlight() {
    header.classList.add("highlight");
}

function noHighlight() {
    header.classList.remove("highlight");
}

header.addEventListener("click", function() {
    highlight();
    setTimeout(noHighlight, 1000); 
});

var footer = document.querySelector("footer p em");

footer.addEventListener("click", function() {
    alert("This is Jake's contact email!");
});

localStorage.setItem("favoriteColor", favColor);
