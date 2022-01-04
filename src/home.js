// const home = () => {
//   let test = document.createElement('div');
//   // test.innerHTML = "hello I am from module: home";
//   let test_content = document.createTextNode('Hello I am from module: home ');
//   test.appendChild(test_content);
//   return test;
// }


// export default home;

// export default function home(){
//   console.log('i get called from home');
// }
import pizza from './Assets/images/pizza1.jpg';

export default function home(){
  let home = document.createElement('div');
  home.classList.add('container');

  // order div 
  let order = document.createElement('div');
  order.classList.add('order');
  let delivery_btn = document.createElement('button');
  delivery_btn.innerHTML = "Order Delivery!";
  let pickup_btn = document.createElement('button');
  pickup_btn.innerHTML = "Order Pickup!";
  order.appendChild(delivery_btn);
  order.appendChild(pickup_btn);
  home.appendChild(order);

  let title = document.createElement('h1');
  title.innerHTML = "Welcome to PizzaPalace!"
  home.appendChild(title);

  // let photo = document.createElement('img');
  const photo = new Image();
  photo.src = pizza;

  home.appendChild(photo);

  let footer = document.createElement('div');
  footer.innerHTML = 'Written by ';
  let link = document.createElement('a');
  link.innerHTML = "Brent";
  link.href = 'https://github.com/brentcam250';
  // footer.classList.add('container');
  footer.appendChild(link);
  // footer.classList.add('container');

  home.appendChild(footer);
  return home;
}