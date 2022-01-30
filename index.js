//Generate random number for dice 1

var randomNumber1 = Math.random() * 6;

randomNumber1 = Math.floor(randomNumber1) + 1;

//Generate random number for dice 2

var randomNumber2 = Math.random() * 6;

randomNumber2 = Math.floor(randomNumber2) + 1;

// document.querySelector(".img1").src = `images/dice${randomNumber1}.png`;

//Or

document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`); //for leftImage

document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`); //for rightImage

//Checking following conditions
if (randomNumber1 === randomNumber2) {

    document.querySelector("h1").innerHTML = "Draw!";

} else if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";

} else {

    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";

}

//We can also get the image source like this
// var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource1);

// var image2 = document.querySelectorAll("img")[01];

// image2.setAttribute("src", randomImageSource2);