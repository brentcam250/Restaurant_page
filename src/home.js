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

export default function home(){
  let home = document.createElement('div');
  home.classList.add('container');
  // test.innerHTML = "hello I am from module: home";
  let order = document.createElement('div');
  order.classList.add('order');
  let delivery_btn = document.createElement('button');
  delivery_btn.innerHTML = "Order Delivery!";
  let pickup_btn = document.createElement('button');

  pickup_btn.innerHTML = "Order Pickup!";
  order.appendChild(delivery_btn);
  order.appendChild(pickup_btn);
  home.appendChild(order);

  let test_content = document.createTextNode('Hello I am from module: home ');
  home.appendChild(test_content);
  let test = document.createElement('div');
  test.innerHTML = 'Hello inside';
  test.classList.add('content');
  test.classList.add('container');

  home.appendChild(test);
  return home;
}