const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

}

const nosProducteurs = [
    {
      name: "Lucky",
      picture: "https://placekitten.com/200/287"
    },
    {
      name: "Symba",
      picture: "https://placekitten.com/200/139"
    },
    {
      name: "Léo",
      picture: "https://placekitten.com/200/90"
    },
    {
      name: "Milo",
      picture: "https://placekitten.com/200/194"
    },
    {
      name: "Charly",
      picture: "https://placekitten.com/200/179"
    }
  ];
  
  function createCard(imageUrl) {
    const cards = document.querySelector(".cards");
  
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
  
    const cardImg = document.createElement("img");
    cardImg.src = imageUrl;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);
  
    // Step1: Create the cardBody div, add the class card-body and add it to the card
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    // Step2: Create the cardTitle h2, add the class card-title,
   
  
    // Step3: Create the cardButton button, add the class card-button,
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-Button");
    // set the text inside the tag to be "Adopt Now"
    cardButton.innerHTML = "Commander";
    // and add it to the cardBody
    cardBody.appendChild(cardButton);
  }
  
  /* Step 4: Create a for loop, for each element of the array, 
   call the function createCard with the corresponding parameter */
  for (let i = 0; i < nosProducteurs.length; i++) {
    createCard(nosProducteurs[i].picture);
  }
  