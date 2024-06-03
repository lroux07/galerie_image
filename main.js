import './style.css'
const galerie = document.getElementById('galerie');

const data = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    date: 2023,
    title: 'Damme avec un appareil photo',
    categorie: ''
  },
  {
    id: 1,
    url: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
    date: 2022,
    title: 'Loupe qui zoom sur la nature',
    categorie: ''
  },
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg',
    date: 2024,
    title: 'Chien noir et blanc',
    categorie: ''
  }
];

const renderGalerie = () => {
  const ul = document.createElement('ul');
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${data[i].url}" alt="${data[i].title}"/>
      <h2>${data[i].title}</h2>
    `
    ul.appendChild(li);
  }
  galerie.appendChild(ul);
}
renderGalerie();