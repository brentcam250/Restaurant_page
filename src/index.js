// console.log('webpack worked');

// const content = document.getElementById('content');

import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

import './style.scss';

// function render_component(){
  const content = document.getElementById('content');
  content.appendChild(home());
  // return content;

// }

// listeners for tab clicks
document.getElementById('home').addEventListener("click", function(){ render('home'); });
document.getElementById('menu').addEventListener("click", function(){ render('menu'); });
document.getElementById('contact').addEventListener("click", function(){ render('contact'); });


function render(component){
  // first get rid of all the content
  const content = document.getElementById('content');

  clear_page(content);
  // content.appendChild(component);
  switch (component){
    case 'home':
      console.log(`Honey I'm home `);

      content.appendChild(home());
      break;
    case 'menu':
      console.log(`MENu clicked `);
      content.appendChild(menu());
      break;
    case 'contact':
      content.appendChild(contact());
      // console.log('build contact page');
      break;
    default:
      console.log(`${component} clicked `);

  }
}


// function clear_page(){
//   const content = document.getElementById('content');
//   content.innerHTML = '';
// }

function clear_page(parent){
  while(parent.firstChild){
    parent.removeChild(parent.lastChild);
  }
}