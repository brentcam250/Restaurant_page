export default function contact(){
  let contact = document.createElement('div');
  contact.classList.add('container');
  contact.classList.add('hot_pizza');

  let title = document.createElement('h1');
  title.innerHTML = "Contact Page";
  title.style.color = 'white';
  contact.appendChild(title);

  let card = document.createElement('div');
  card.classList.add('contact_card');
  card.innerHTML = 'Thanks for visiting my fake restaurant!';
  contact.appendChild(card);

  return contact;
}