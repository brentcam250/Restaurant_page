// console.log('webpack worked');

// const content = document.getElementById('content');

import home from './home.js';
import './style.css';

// function render_component(){
  const content = document.getElementById('content');
  content.appendChild(home());
  // return content;

// }

// document.body.appendChild(render_component());