document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];

  //randomize cards for each game
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var clickedCard = [];
  var clickedCardId = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/cherry.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card); //card elements will go right into div with class id=grid
    }
  }

  var matchedCards = [];

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const firstClickedCardId = clickedCardId[0];
    const secondClickedCardId = clickedCardId[1];

    if (firstClickedCardId == secondClickedCardId) {
      cards[firstClickedCardId].setAttribute("src", "images/cherry.png");
      cards[secondClickedCardId].setAttribute("src", "images/cherry.png");
      alert("You have clicked the same image!");
    } else if (clickedCard[0] === clickedCard[1]) {
      alert("You found a match!");
      cards[firstClickedCardId].setAttribute("src", "images/white.png");
      cards[secondClickedCardId].setAttribute("src", "images/white.png");
      cards[firstClickedCardId].removeEventListener("click", flipCard);
      cards[secondClickedCardId].removeEventListener("click", flipCard);
      matchedCards.push(clickedCard);
    } else {
      cards[firstClickedCardId].setAttribute("src", "images/cherry.png");
      cards[secondClickedCardId].setAttribute("src", "images/cherry.png");
      alert("Sorry, try again:(");
    }
    clickedCard = [];
    clickedCardId = [];
    resultDisplay.textContent = matchedCards.length;
    if (matchedCards.length === cardArray.length / 2) {
      resultDisplay.textContent = "You won!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    clickedCard.push(cardArray[cardId].name);
    clickedCardId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (clickedCard.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
