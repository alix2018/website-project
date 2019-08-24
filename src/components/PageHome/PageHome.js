import React from 'react';
import './PageHome.css';
import Typewriter from '../Typewriter/Typewriter';

function PageHome() {
  function clickArrowsDown(e) {
    e.preventDefault();
    const currentAnchor = document.querySelector('.contact');
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <section id="home" className="home">
      <div className="left">
        <div className="name animated fadeInUp">
          Stéphanie Alix
        </div>
        <h1 className="animated fadeInUp">
          I am
        </h1>
        <div className="group-arrows animated fadeInUp" onClick={e => {clickArrowsDown(e);}}>
          <div className="arrow-1"/>
          <div className="arrow-2"/>
          <div className="arrow-3"/>
        </div>
      </div>
      <div className="right">
        <Typewriter
          className="typewriter animated fadeInUp"
          period={200}
          fullTexts={['Stéphanie', 'a web developer', 'in Amsterdam']}
        />
        <div className="icons">
          <form method="get" action="./public/assets/cv.pdf" className="btn-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <input type="submit" className="button" value="Download CV"></input>
          </form>
          <a href="https://www.linkedin.com/in/stephanie-alix/" className="linkedin-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <svg className="linkedin" viewBox="0 0 512 512">
              <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/>
            </svg>
          </a>
          <a href="https://github.com/alix2018" className="github-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <svg className="github" viewBox="0 0 512 512">
              <path d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"/>
            </svg>
          </a>
          <a href="https://join.skype.com/invite/ljzSCwTgKRyX" className="skype-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <svg className="skype" viewBox="0 0 512 512">
              <path d="m284.4375 237.761719-35.203125-7.8125c-13.390625-3.050781-28.804687-7.082031-28.804687-19.707031 0-12.652344 10.8125-21.492188 30.332031-21.492188 39.339843 0 35.746093 27.035156 55.277343 27.035156 10.277344 0 19.273438-6.042968 19.273438-16.433594 0-24.246093-38.804688-42.441406-71.722656-42.441406-35.734375 0-73.789063 15.175782-73.789063 55.59375 0 19.464844 6.953125 40.171875 45.257813 49.777344l47.5625 11.875c14.394531 3.546875 17.996094 11.644531 17.996094 18.949219 0 12.148437-12.066407 24.015625-33.925782 24.015625-42.699218 0-36.773437-32.859375-59.65625-32.859375-10.28125 0-17.742187 7.082031-17.742187 17.1875 0 19.703125 23.921875 45.996093 77.398437 45.996093 50.878906 0 76.089844-24.523437 76.089844-57.367187 0-21.207031-9.777344-43.722656-48.34375-52.316406zm0 0"/><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm133.285156 388.90625c-16.832031 16.839844-39.199218 26.09375-62.996094 26.09375-15.414062 0-30.507812-4.007812-43.839843-11.550781-8.652344 1.535156-17.515625 2.34375-26.359375 2.34375-20.320313 0-40.039063-3.984375-58.589844-11.847657-17.9375-7.5625-34.027344-18.425781-47.859375-32.25-13.816406-13.820312-24.667969-29.910156-32.242187-47.839843-7.859376-18.5625-11.835938-38.269531-11.835938-58.59375 0-8.703125.78125-17.417969 2.265625-25.945313-7.316406-13.160156-11.210937-28.050781-11.210937-43.203125 0-23.800781 9.273437-46.179687 26.097656-63.007812 16.832031-16.835938 39.210937-26.105469 63.011718-26.105469 14.578126 0 28.984376 3.636719 41.789063 10.445312.023437-.003906.050781-.003906.070313-.011718 9.335937-1.789063 18.925781-2.691406 28.503906-2.691406 20.316406 0 40.03125 3.980468 58.582031 11.828124 17.917969 7.582032 34.027344 18.433594 47.839844 32.253907 13.832031 13.824219 24.679687 29.921875 32.261719 47.847656 7.859374 18.558594 11.835937 38.269531 11.835937 58.589844 0 9.160156-.863281 18.328125-2.507813 27.285156 7.367188 13.210937 11.285157 28.152344 11.285157 43.355469-.003907 23.800781-9.265625 46.183594-26.101563 63.003906zm0 0"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PageHome;