import {useEffect, useState} from 'react';

function useScroll(pagesIds) {
  const [activePageId, setActivePageId] = useState('home');

  const firstLightColor = getComputedStyle(document.documentElement).getPropertyValue('--first-color-light');
  const secondDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--second-color-dark');
  const thirdColor = getComputedStyle(document.documentElement).getPropertyValue('--third-color');
  const greyColor = 'rgba(255, 255, 255, 0.5)';
  const offset = 48;

  function setMenuBarColors(nameColor, menuLinkColor) {
    document.querySelector('section.home .left .name').style.color = nameColor;
    document.querySelectorAll('.menu-effect a').forEach(menuItem => {
      menuItem.style.color = menuLinkColor;
    });
    document.querySelector('.menu-effect .active a').style.color = thirdColor;
  }

  function scrolling() {
    const pagesElements = pagesIds.map(pageId =>
      document.querySelector(`#${pageId}`)
    );
    const activePage = pagesElements.find(page => {
      const elementRect = page.getBoundingClientRect();
      return (elementRect.top <= offset) && (elementRect.top > -window.innerHeight + offset) &&
      (elementRect.bottom > offset) && (elementRect.bottom <= window.innerHeight + offset);
    });

    if (activePage) {
      setActivePageId(activePage.id);
    }
  }

  useEffect(() => {
    switch (activePageId) {
      case 'home':
        setMenuBarColors(secondDarkColor, greyColor);
        break;
      case 'portfolio':
        setMenuBarColors(firstLightColor, greyColor);
        break;
      case 'about-me':
        setMenuBarColors(secondDarkColor, greyColor);
        break;
      default:
        setMenuBarColors(firstLightColor, secondDarkColor);
        break;
    }

    window.addEventListener('scroll', scrolling);

    return () => window.removeEventListener('scroll', scrolling);
  }, [scrolling, activePageId]);

  return activePageId;
}

export default useScroll;
