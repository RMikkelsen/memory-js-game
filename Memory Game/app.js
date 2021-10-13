//grab a couple of thing
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data for cards (array of objects -16, 1 for each card)

const getData = () => [
  { imgSrc: "./images/pic1.jpg", name: "pic1" },
  { imgSrc: "./images/pic2.jpg", name: "pic2" },
  { imgSrc: "./images/pic3.jpg", name: "pic3" },
  { imgSrc: "./images/pic4.jpg", name: "pic4" },
  { imgSrc: "./images/pic5.jpg", name: "pic5" },
  { imgSrc: "./images/pic6.jpg", name: "pic6" },
  { imgSrc: "./images/pic7.jpg", name: "pic7" },
  { imgSrc: "./images/pic8.jpg", name: "pic8" },
  { imgSrc: "./images/pic1.jpg", name: "pic1" },
  { imgSrc: "./images/pic2.jpg", name: "pic2" },
  { imgSrc: "./images/pic3.jpg", name: "pic3" },
  { imgSrc: "./images/pic4.jpg", name: "pic4" },
  { imgSrc: "./images/pic5.jpg", name: "pic5" },
  { imgSrc: "./images/pic6.jpg", name: "pic6" },
  { imgSrc: "./images/pic7.jpg", name: "pic7" },
  { imgSrc: "./images/pic8.jpg", name: "pic8" },
];

//Randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//card generator function
const cardGenerator = () => {
  const cardData = randomize();
  //generate the HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //attach cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};
//check cards
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

  //Logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.getElementsByClassName.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("aw you lost, try again");
      }
    }
  }
  //run a check to see if we won the game
  if (toggleCard.length === 16) {
    restart("you won!");
  }
};

//restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    //randomize
    setTimeout(() => {
      cards[index].getElementsByClassName.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
