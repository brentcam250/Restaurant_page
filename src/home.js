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
  let test = document.createElement('div');
  // test.innerHTML = "hello I am from module: home";
  let test_content = document.createTextNode('Hello I am from module: home ');
  test.appendChild(test_content);
  return test;
}