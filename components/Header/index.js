// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const hdShowcase = document.querySelector('.header-container');

hdShowcase.appendChild(Header());

function Header() {

 const 
 headerShowcase = document.createElement('div'),
 headerDate = document.createElement('span'),
 headerTitle = document.createElement('h1'),
 headerTemp = document.createElement('span');

 headerShowcase.appendChild(headerDate);
 headerShowcase.appendChild(headerTitle);
 headerShowcase.appendChild(headerTemp);

 headerShowcase.classList.add('header');
 headerDate.classList.add('date');
 headerTemp.classList.add('temp');

 headerTitle.textContent = 'Lambda Times';
 headerDate.textContent = 'September 6th, 2019';
 headerTemp.textContent = 80,'&deg;c';

 return headerShowcase;

}//header function


