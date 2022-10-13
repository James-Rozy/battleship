export default function getHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  header.setAttribute('id', 'main-header');

  title.setAttribute('id', 'main-title');
  title.textContent = 'BATTLESHIP';

  header.appendChild(title);
  return header;
}
