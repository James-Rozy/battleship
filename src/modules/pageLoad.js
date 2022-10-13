import getHeader from './header';

export default function pageLoad() {
  const mainContainer = document.createElement('div');
  const header = getHeader();

  mainContainer.appendChild(header);
  return mainContainer;
}
