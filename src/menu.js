const menu_hash = {};
menu_hash["pizzas"] = ['Pepperoni', 'Cheese', 'Meatlovers', 'Vegetarian', 'House Special'];
menu_hash['salads'] = ['Caesar', 'House', 'Greek', 'Garden'];
menu_hash['dips'] = ['Hot Sauce', 'Ranch', 'Garlic'];
menu_hash['drinks'] = ['Rootbeer', 'Coke', 'Ginger Ale', 'House Wine'];


export default function menu(){
  let menu = document.createElement('div');
  menu.classList.add('container');
  menu.classList.add('pizza_background');



  // if del_or_pickup{
  //   console.log(`ordering ${del_or_pickup}`);
  // }


  let title = document.createElement('h1');
  title.innerHTML = "PizzaPalace Menu"
  title.style.color = 'white';
  menu.appendChild(title);

  let menu_container = document.createElement('div');
  menu_container.classList.add('menu');
  
  // Pizzas
  let pizza_sec = document.createElement('section');
  let pizza_title = document.createElement('h2');
  pizza_title.innerHTML = 'Pizzas';
  pizza_sec.appendChild(pizza_title);
  let pizzas = fill_menu_section('pizzas');
  pizza_sec.appendChild(pizzas);
  menu_container.appendChild(pizza_sec);

  // Salads
  let salad_sec = document.createElement('section');
  let salad_title = document.createElement('h2');
  salad_title.innerHTML = 'Salads';
  salad_sec.appendChild(salad_title);
  let salads = fill_menu_section('salads');
  salad_sec.appendChild(salads);
  menu_container.appendChild(salad_sec);

  // dips
  let dip_sec = document.createElement('section');
  let dip_title = document.createElement('h2');
  dip_title.innerHTML = 'Dips';
  dip_sec.appendChild(dip_title);
  let dips = fill_menu_section('dips');
  dip_sec.appendChild(dips);
  menu_container.appendChild(dip_sec);

  // drinks
  let drink_sec = document.createElement('section');
  let drink_title = document.createElement('h2');
  drink_title.innerHTML = 'Drinks';
  drink_sec.appendChild(drink_title);
  let drinks = fill_menu_section('drinks');
  drink_sec.appendChild(drinks);
  menu_container.appendChild(drink_sec);

  menu.appendChild(menu_container);

  return menu;
}

function fill_menu_section(key){  
  let options = menu_hash[key];
  console.log(options);
  let section = document.createElement('div');
  section.classList.add('container');
  let list = document.createElement('ul');
  section.appendChild(list);
  // for (let option in options){
  options.forEach( option => {
    let li = document.createElement('li');
    li.innerHTML = option;
    list.appendChild(li);
  });

  
  return section;
}

// function create_menu_item(item){

// }