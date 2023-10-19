"use strict;";

const thirdList = document.querySelector("ul").lastElementChild;

thirdList.innerHTML = "Good Bye";

const nestedAnchorTag = document.querySelector("ul.list li.item a");
nestedAnchorTag.style.color = "Red";

document.querySelector("input.btn").style.backgroundColor = "yellow";

document.querySelector("h1").classList.add("huge");
