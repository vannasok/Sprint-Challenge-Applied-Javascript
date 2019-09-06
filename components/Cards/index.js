// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const dataArray = ['bootstrap','javascript','jquery','node','technology'];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    // console.log(response);
    
    for( let x in response.data.articles){
        
        // console.log(response.data.articles[x]);
        response.data.articles[x].forEach( ele =>{
            const newCard = createCard(ele);
            cards.appendChild(newCard);
        })
    }


})
.catch(err => console.log('return failed.', err))



const cards = document.querySelector('.cards-container');
// cards.appendChild(createCard(data));

function createCard (data){

    const
    card = document.createElement('div');
    cardHeadline = document.createElement('div');
    cardAuthor = document.createElement('div');
    cardImgContainer = document.createElement('div');
    cardImg = document.createElement('img');
    cardAuthorName = document.createElement('span');

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgContainer);
    cardAuthor.appendChild(cardAuthorName);
    cardImgContainer.appendChild(cardImg);

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgContainer.classList.add('img-container');

    cardHeadline.textContent = `${data.headline}`;
    cardImg.src = `${data.authorPhoto}`;
    cardAuthorName.textContent = `By: ${data.authorName}`;

    return card;
}